'use client'
import Image from "next/image";
import Header from "../sections/header"
import Footer from '../sections/footer';
import Navigation from "../sections/navigation";
import TawkToWrapper from "../sections/tawt-to";

const machines = [
      {
        make: 'Crane Merchant Media',
        machineType: 'Snack Machine',
        model:'186 (4-wide) / #187 (6-wide)',
        imageUrl:'/snack-machine.png',
        description: 'This machine combines compact convenience with a wide selection of 44 choices. Designed to maximize space efficiency, it is an ideal solution for small offices, factories, and waiting rooms. With its versatility, this machine offers diverse options to cater to different preferences, ensuring a satisfying experience in limited areas.',
        altTag:'snack machines in Miami'
      },
      {
        make: 'BevMAX MEDIA2',
        machineType: 'Beverage Machine',
        model:'723 (Narrow) / #713 (Wide)',
        imageUrl:'/beverage-machine2.png',
        description: 'Enjoy a diverse selection of 35 beverages in various sizes, akin to a convenience store offering. With its integrated cashless system and a 9\' touchscreen, indulge in an interactive experience with cart purchasing, nutrition details, and more. This industry-leading beverage machine sets the bar high for today\'s market.',
        altTag:'beverage machines in Miami'
      },
      {
        make: 'Crane Shopper',
        machineType: 'Sandwich Machine',
        model:'432',
        imageUrl:'/sandwich-machine.png',
        description: 'Delivering remarkable features within a compact footprint, offering 44 diverse selections to maximize variety in limited spaces. This versatile machine proves to be an excellent choice for small offices, factories, and waiting rooms, providing convenience and options in compact environments.',
        altTag:'sandwich machines in Miami'
      }
  ]
  
  const Machines = () => {
    return (
      <>
        <TawkToWrapper/>
        <Navigation/>
        <Header title="Machines" />
        <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <div className="sticky top-14 h-auto">
                <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl"> Our Cutting-Edge Vending Machines</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover a variety of vending machines that are specifically designed to fit perfectly into your available space. We offer different types of machines, including those for beverages, snacks, and even sandwiches, all of which can be customized to meet your specific needs.
                </p>
            </div>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {machines.map((machine) => (
              <li key={machine.make} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <Image className="w-40 flex-none" width={200} height={200} src={machine.imageUrl} alt="" />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900">{machine.make} <em className="font-normal italic text-base">Model #{machine.model}</em></h3>
                  <p className="font-semibold leading-7 text-green-700">{machine.machineType}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{machine.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
      </>
    )
  }

  export default Machines;