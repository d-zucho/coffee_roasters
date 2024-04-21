import Link from 'next/link'
import { links } from '@/textData/navItems'

const Nav = () => {
  return (
    <nav className='flex-center gap-4'>
      {links.map((link) => (
        <Link key={link.label} href={link.path} className='navMenu'>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
