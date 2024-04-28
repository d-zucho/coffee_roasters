import { links } from '../../textData/navItems'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper className='bg-darkBlue'>
        <h3 className='heading3 text-white font-fraunces text-center'>
          coffeeroasters
        </h3>
        <div className=''>
          <nav
            id='footer-nav'
            className='uppercase text-gray text-sm flex flex-col gap-5 mx-auto text-center py-10'
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className='hover:text-white transition'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
