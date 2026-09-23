"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural (Breadcrumb)" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto">
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-brand-ink/65">
        <li className="inline-flex items-center">
          <Link 
            href="/" 
            className="hover:text-brand-primary inline-flex items-center gap-1 transition-colors"
            title="Ir para a Página Inicial"
          >
            <Home className="w-3.5 h-3.5 text-brand-secondary" />
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3 h-3 text-brand-secondary/60 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-brand-primary line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="hover:text-brand-primary transition-colors line-clamp-1"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
