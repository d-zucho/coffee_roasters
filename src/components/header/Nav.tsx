import Link from 'next/link'

const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Create your plan',
    path: '/plans',
  },
]

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
