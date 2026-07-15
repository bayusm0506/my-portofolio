'use client';

import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-4">
        <Link className="text-lg font-bold" href="/">
          Bayu Setra Maulana
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button className="text-sm" variant={isActive ? 'default' : 'ghost'}>
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full justify-start text-sm"
                    variant={isActive ? 'default' : 'ghost'}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
