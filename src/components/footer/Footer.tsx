import { socials } from '@/textData/socials'
import { links } from '../../textData/navItems'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../header/Nav'

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper className='bg-darkBlue py-10'>
        <h3 className='heading3 text-white font-fraunces text-center'>
          coffeeroasters
        </h3>
        <div className=''>
          <div
            id='footer-nav'
            className='uppercase text-gray text-sm text-center py-10 md:flex-row md:justify-center'
          >
            {/* {links.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className='hover:text-white transition'
              >
                {link.label}
              </Link>
            ))} */}
            <Nav
              styles={
                'flex-col gap-5 mx-auto text-center md:flex-row md:justify-center'
              }
            />
          </div>
        </div>

        {/* SOCIALS */}
        <div className='flex justify-center gap-5'>
          {socials.map((social) => (
            <Image
              key={social.name}
              src={social.path}
              alt={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
