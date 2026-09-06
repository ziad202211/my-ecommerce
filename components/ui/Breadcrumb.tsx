import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <div className={`flex items-center text-sm text-gray-500 ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-black transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={`${isLast ? 'text-black font-medium' : ''}`}>
                {item.label}
              </span>
            )}
            
            {!isLast && <span className="mx-3">/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};
