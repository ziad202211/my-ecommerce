import Link from "next/link";
import { getAuthUser, logoutAction } from "@/lib/actions/auth.actions";
import { CartButton } from "./CartButton";
import { SearchBar } from "./SearchBar";

const Navbar = async () => {
    const user = await getAuthUser();
return (
    <nav className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between h-20">
                
                {/*Our Logo*/}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-2xl font-bold tracking-wide text-black">
                        My Ecommerce
                    </Link>
                </div>
                
                {/*  Nav Links */}
                <div className="hidden md:flex items-center space-x-12">
                    <Link href="/" className="text-black font-medium hover:underline underline-offset-8 decoration-gray-400">
                        Home
                    </Link>
                    <Link href="/contact" className="text-black font-medium hover:underline underline-offset-8 decoration-gray-400">
                        Contact
                    </Link>
                    <Link href="/about" className="text-black font-medium hover:underline underline-offset-8 decoration-gray-400">
                        About
                    </Link>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-black font-medium pr-2">Hi, {user.firstName}</span>
                            <form action={logoutAction}>
                                <button type="submit" className="text-red-600 font-medium hover:underline underline-offset-8 decoration-red-400 cursor-pointer">
                                    Logout
                                </button>
                            </form>
                        </div>
                    ) : (
                        <Link href="/login" className="text-black font-medium hover:underline underline-offset-8 decoration-gray-400">
                            Login
                        </Link>
                    )}
                </div>
                
                {/*  Search and Icons */}
                <div className="flex items-center gap-6">
                    
                    {/* Search Bar*/}
                    <SearchBar />
                    
                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        
                        <CartButton />
                    </div>
                    
                </div>
                
            </div>
        </div>
    </nav>
);
};

export default Navbar;