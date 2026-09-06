import React from 'react';
import Image from 'next/image';
const Twitter = ({ size = 20, strokeWidth = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Instagram = ({ size = 20, strokeWidth = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Linkedin = ({ size = 20, strokeWidth = 1.5, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const teamData = [
  {
    name: 'Sami Hasan',
    role: 'Founder & Chairman',
    // Using high-quality placeholder portraits that fit the professional vibe
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop', 
  },
  {
    name: 'Fahim Hasan',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mohamad Hasan',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  }
];

const Team = () => {
  return (
    <section className="w-full py-20">
        <h2 className="text-4xl font-bold mb-2 tracking-wide text-center">Meet Our Team Members</h2>
        <p className="text-xl text-gray-600 mb-4 text-center">Discover our top-selling products that our customers love the most!</p>
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-20">
        
        {teamData.map((member, index) => (
          <div key={index} className="flex flex-col w-full max-w-[320px]">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] bg-gray-100 rounded flex items-end justify-center overflow-hidden mb-5">
              <Image 
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Member Details */}
            <h3 className="text-2xl font-medium mb-1 tracking-wide">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-900">
              <a href="#" className="hover:text-[#DB4444] transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#DB4444] transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#DB4444] transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Team;
