import { Container } from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <Container className="py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Social</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="#"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="#"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Contact</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">your.email@example.com</p>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between pt-8 text-sm text-slate-600 dark:text-slate-400 sm:flex-row">
          <p>© {currentYear} Bayu Setra Maulana. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
