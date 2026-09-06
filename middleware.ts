import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  // We create a response object early so we can attach new cookies to it if needed
  let response = NextResponse.next();

  // 1. SILENT TOKEN REFRESH LOGIC
  // If access token is gone but we have a refresh token, let's refresh!
  if (!accessToken && refreshToken) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refreshToken,
          expiresInMins: 30,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const isProduction = process.env.NODE_ENV === "production";
        
        // Update the request cookies so the rest of the Next.js app (like Server Components)
        // knows about the new tokens immediately during this request cycle.
        request.cookies.set('accessToken', data.accessToken);
        request.cookies.set('refreshToken', data.refreshToken);

        // Update the response cookies so the browser saves the new tokens for future requests.
        response.cookies.set('accessToken', data.accessToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite: 'lax',
          maxAge: 30 * 60,
          path: '/',
        });

        response.cookies.set('refreshToken', data.refreshToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite: 'lax',
          maxAge: 7 * 24 * 60 * 60,
          path: '/',
        });
      } else {
        // Refresh token failed (it probably expired). Delete the bad cookie.
        response.cookies.delete('refreshToken');
        request.cookies.delete('refreshToken');
      }
    } catch (error) {
      console.error('Failed to refresh token in middleware:', error);
    }
  }

  // 2. ROUTE PROTECTION LOGIC
  // Define which paths require the user to be logged in. 
  // You can adjust these to match your e-commerce routes!
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/profile') || request.nextUrl.pathname.startsWith('/checkout');
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login');

  // We use the updated request.cookies to check auth status
  const isAuthenticated = request.cookies.has('accessToken') || request.cookies.has('refreshToken');

  if (isProtectedRoute && !isAuthenticated) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && isAuthenticated) {
    // Redirect authenticated users away from the login page (back to home)
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}

// 3. MIDDLEWARE CONFIGURATION
export const config = {
  // This matcher ensures the middleware doesn't run on static files, images, or API routes, saving server resources.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
