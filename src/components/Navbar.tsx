'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/videos', label: 'Videos' },
  ];

  return (
    <nav className="sticky top-0 z-1000 bg-white shadow-md border-b border-[#E5DFF5]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex justify-start items-center gap-6 md:gap-12">
        <Link href="/" className="no-underline flex items-center gap-3">
          <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#6A2BBF] to-[#9B6DD1] bg-clip-text text-transparent tracking-tight transition-opacity hover:opacity-85">
            Project Aequitas
          </span>
        </Link>
        
        <ul className="flex list-none gap-6 md:gap-10 m-0 p-0 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`relative text-[#1E1E1E] no-underline text-sm md:text-base font-medium py-2 transition-colors tracking-tight
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-[#6A2BBF] after:to-[#9B6DD1] after:transition-all after:duration-300
                  hover:text-[#6A2BBF] hover:after:w-full
                  ${pathname === link.href ? 'text-[#6A2BBF] font-semibold after:w-full after:bg-[#6A2BBF]' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
