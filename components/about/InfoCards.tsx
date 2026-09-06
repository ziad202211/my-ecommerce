import React from 'react';
import { Store, DollarSign, ShoppingBag, Banknote } from 'lucide-react';

const cardsData = [
  {
    icon: Store,
    value: '10.5k',
    label: 'Sellers active on our site',
    highlighted: false,
  },
  {
    icon: DollarSign,
    value: '33k',
    label: 'Monthly Product Sale',
    highlighted: true,
  },
  {
    icon: ShoppingBag,
    value: '45.5k',
    label: 'Customers active on our site',
    highlighted: false,
  },
  {
    icon: Banknote,
    value: '25k',
    label: 'Annual gross sales on our site',
    highlighted: false,
  },
];

const InfoCards = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
      {cardsData.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`group flex flex-col items-center justify-center p-8 rounded border transition-all duration-300 cursor-pointer ${
              card.highlighted
                ? 'bg-[#DB4444] text-white border-[#DB4444] shadow-md'
                : 'bg-white text-black border-gray-200 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]'
            }`}
          >
            {/* Icon Container */}
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                card.highlighted 
                  ? 'bg-red-400/40' 
                  : 'bg-gray-300 group-hover:bg-red-400/40'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  card.highlighted 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white group-hover:bg-white group-hover:text-black'
                }`}
              >
                <Icon size={28} strokeWidth={2} />
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-3xl font-bold mb-2 tracking-wide">
              {card.value}
            </h3>
            <p className={`text-sm text-center transition-colors duration-300 ${
              card.highlighted 
                ? 'text-white' 
                : 'text-gray-600 group-hover:text-white'
            }`}>
              {card.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCards;
