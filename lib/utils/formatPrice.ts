export function formatPrice(price: number | string, currency: string = 'USD'): string {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    return '$0.00'; 
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(numericPrice);
}