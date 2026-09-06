"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, type ContactFormValues } from '@/lib/utils/validators';

export default function ContactForm() {
  // 2. Initialize react-hook-form with the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  // 3. Define your submit handler
  const onSubmit = async (data: ContactFormValues) => {
    console.log('Form data:', data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Message sent successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-gray-200'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-gray-200'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 ${
            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-gray-200'
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
        Send Message
      </Button>
    </form>
  );
}