'use client';

import Link from 'next/link';

import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
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

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-4">
        <Link className="text-lg font-bold" href="/">
          Bayu Setra Maulana
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  className="text-sm"
                  variant={isActive ? 'default' : 'ghost'}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
