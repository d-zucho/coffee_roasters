import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
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
          <SheetContent className='bg-gradient-to-b from-lightCream to-lightCream/20'>
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
                <SheetClose asChild>
                  <Link
                    key={link.label}
                    href={link.path}
                    className='font-fraunces text-darkBlue'
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default MobileNav
