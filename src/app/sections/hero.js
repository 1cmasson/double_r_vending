'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from './navigation';

const Hero = () => {

  return (
    <>
      <div className="bg-gray-900">
      <Navigation/>
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/main-background.png"
          priority
          fill
          alt="snacks inside a vending machine"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Vending Machine Maintenance Services in Miami, FL
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Welcome to Double R Vending, where convenience meets satisfaction. Discover our premium vending services designed to elevate your workplace experience and cater to your cravings. From delectable snacks to refreshing beverages, we&apos;ve got your cravings covered. Elevate your break time with us today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact" 
                title='Get Started'
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300  hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 focus-visible:bg-yellow-300 focus-visible:text-black"
              >
                  Get started
              </a>
            </div>
          </div>
        </div>
        <div className='bg-black relative top-0 left-0 h-full w-full opacity-8'/>
      </div>
    </div>
    </>
  )
}

export default Hero;