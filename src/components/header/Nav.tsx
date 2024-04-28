import Link from 'next/link'
import { links } from '@/textData/navItems'
import { cn } from '@/lib/utils'

const Nav = ({ styles }: any) => {
  return (
    <nav className={cn('flex-center gap-4', styles)}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          className='navMenu hover:text-paleOrange transition'
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
