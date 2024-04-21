import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import Image from 'next/image'
import { links } from '@/textData/navItems'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const MobileNav = () => {
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src={'/assets/shared/mobile/icon-hamburger.svg'}
              alt='Hamburger'
              width={20}
              height={15}
              className='hover:cursor-pointer'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Image
                src='/assets/shared/desktop/logo.svg'
                alt='Logo'
                width={170}
                height={40}
              />
              <Separator />
            </SheetHeader>
            <nav className='flex flex-col pt-6 items-center heading3 gap-8'>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className='font-fraunces'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default MobileNav
