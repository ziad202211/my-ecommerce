import React from 'react';
import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
      icon: <Truck size={28} strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
      icon: <Headphones size={28} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="w-full py-16 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-5xl w-full px-4 justify-items-center">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center text-center max-w-[280px]">
            {/* Icon Circle */}
            <div className="w-[60px] h-[60px] bg-black rounded-full ring-[10px] ring-gray-300 flex items-center justify-center text-white mb-8">
              {service.icon}
            </div>
            
            {/* Text */}
            <h3 className="text-[16px] font-bold mb-2 uppercase">{service.title}</h3>
            <p className="text-[14px] text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
