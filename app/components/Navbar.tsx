import Link from 'next/link';
import navLinks from '@/data/navLinks';

const Navbar = () => {
  return (
    <nav>
      {navLinks.map(({ title, link }) => (
        <Link href={link} key={title} className={`mr-5`}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
