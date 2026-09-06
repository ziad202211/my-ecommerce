export default function CartCoupon() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2">
       <input 
         type="text" 
         placeholder="Coupon Code" 
         className="border border-black rounded px-6 py-3.5 w-full sm:w-[280px] focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
       />
       <button className="bg-[#DB4444] text-white rounded px-10 py-3.5 font-medium hover:bg-[#c23a3a] transition-colors w-full sm:w-auto whitespace-nowrap">
         Apply Coupon
       </button>
    </div>
  );
}
