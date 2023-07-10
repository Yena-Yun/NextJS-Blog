import Link from 'next/link';
import navLinks from '@/data/navLinks';

const Navbar = () => {
  return (
    <nav className={`flex gap-5`}>
      {navLinks.map(({ title, link }) => (
        <Link href={link} key={title}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
