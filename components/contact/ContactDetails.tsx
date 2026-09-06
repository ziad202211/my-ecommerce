import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactDetails() {
  return (
    <div className="bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded p-10 flex flex-col w-full">
      {/* Call To Us Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#DB4444] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
            <Phone size={18} strokeWidth={2} />
          </div>
          <h3 className="font-medium text-black text-base">Call To Us</h3>
        </div>
        <div className="flex flex-col gap-4 text-sm text-black">
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Write To Us Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#DB4444] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
            <Mail size={18} strokeWidth={2} />
          </div>
          <h3 className="font-medium text-black text-base">Write To US</h3>
        </div>
        <div className="flex flex-col gap-4 text-sm text-black">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
}