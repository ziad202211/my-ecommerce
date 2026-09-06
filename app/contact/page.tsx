import ContactForm from '@/components/contact/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]} 
        className="mb-20"
      />

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <div className="w-full lg:w-1/3">
          <ContactDetails />
        </div>
        <div className="w-full lg:w-2/3 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded p-10 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}