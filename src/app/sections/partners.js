import React from 'react';
import Image from 'next/image';

const Partners = () => {
    return (
        <div className="bg-gray-200 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="mx-auto w-full max-w-xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-green-700">We are proud to announce our partnership </h2>
                <p className="mt-6 text-lg leading-8 text-gray-800">
                  We are officially exclusive distributors of Yogusto&apos;s yogurt products. Starting September 2023, all of our vending machines will be supplied with Yogusto products.
                </p>
              </div>
                <a  classname="mx-auto flex w-full max-w-xl" href='https://www.yogusto.com/' title='Yogusto'>
                    <Image
                    className="max-h-32 w-full"
                    src="/yogusto.svg"
                    alt="Tuple"
                    width={105}
                    height={48}
                    />
                </a>
            </div>
          </div>
        </div>
      )
}

export default Partners;