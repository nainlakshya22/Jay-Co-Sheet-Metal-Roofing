import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../../types';

interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigateTo } = useNavigation();

  return (
    <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-400 py-3 mb-6 border-b border-charcoal-800/60 font-sans" aria-label="Breadcrumb">
      <button
        onClick={() => navigateTo('home')}
        className="flex items-center gap-1 hover:text-copper transition-colors py-1"
      >
        <Home className="w-3.5 h-3.5 text-copper flex-shrink-0" />
        <span>Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600 flex-shrink-0" />
            {isLast || !item.route ? (
              <span className="text-ivory font-medium truncate max-w-[180px] sm:max-w-md py-1">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => navigateTo(item.route!)}
                className="hover:text-copper transition-colors truncate max-w-[140px] sm:max-w-md py-1"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
