'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Machines', href: '#machines' },
]

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Double R Vending</span>
              <Image
                src="/logo2.svg"
                priority
                style={{ width: 'auto', height: 'auto' }}
                height={70}
                width={180}
                alt="Double R Vending Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus-visible:outline-none focus-within:text-yellow-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm bg-green-600 rounded  px-4 py-2 font-semibold leading-6 text-white hover:bg-yellow-300 hover:text-black">
              Contact Us
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Double R Vending</span>
                <Image
                  src="/logo.svg"
                  height={150}
                  width={150}
                  priority
                  alt="Double R Vending Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y-2 divide-green-600">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block"
                    >
                      <button className='flex justify-start rounded-lg px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200' onClick={() => setMobileMenuOpen(false)}>
                        <span className='text-base left-0 font-semibold leading-7 text-black'>{item.name}</span>
                      </button>
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    title='Contact Us'
                    className="-mx-3 block"
                  >
                    <button className='flex justify-start rounded-lg px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200' onClick={() => setMobileMenuOpen(false)}>
                        <span className='text-base left-0 font-semibold leading-7 text-black'>Contact Us</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/desktop-background.png"
          priority
          fill
          alt="snacks inside a vending machine"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Convenient Vending Solutions for Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Welcome to Double R Vending, where convenience meets satisfaction. Discover our premium vending services designed to elevate your workplace experience and cater to your cravings. From delectable snacks to refreshing beverages, we&apos;ve got your cravings covered. Elevate your break time with us today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact" 
                title='Get Started'
              >
                <button type='button' className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 focus-visible:bg-yellow-300 focus-visible:text-black hover:text-black">
                  Get started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='bg-black relative top-0 left-0 h-full w-full opacity-8'/>
      </div>
    </div>
  )
}

export default Hero;