'use client';
import Image from "next/image";
import Header from "../sections/header"
import Footer from '../sections/footer';
import Navigation from "../sections/navigation";
import TawkToWrapper from "../sections/tawt-to";

const products = [
      {
        name: 'All Snacks',
        menuUrl: 'https://nebula.wsimg.com/b4e5e936ba2f360b7a6eff3f034c59d2?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:'/all-snacks.png',
        altTag: "a bag of Lay's chips"
      },
      {
        name: 'All Beverages',
        menuUrl: 'https://nebula.wsimg.com/51514c525e01616a7ae2968b3b85e083?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl: '/beverages.png',
        altTag: "A can of Coca Cola"
      },
      {
        name: 'Healthy Snacks',
        menuUrl: 'https://nebula.wsimg.com/fc633c25aadfc057fa7b16f8f31e2b1a?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:'/healthy-snack.png',
        altTag: "a bag of Chex Mix"
      },
      {
        name: 'School Snacks',
        menuUrl: 'https://nebula.wsimg.com/0df5caf71984a17639a330aeb3d08e0f?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl: '/school-snacks2.png',
        altTag: "a can of Welch's apple juice"
      },
      {
        name: 'Coffee Items',
        menuUrl: 'https://nebula.wsimg.com/4fd66fbc522bfd70dc64919530bc9318?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/coffee.png',
        altTag:"a can of Pilon expresso coffee"
      },
      {
        name: 'Sandwiches',
        menuUrl: 'https://nebula.wsimg.com/04a6239b57652a84b89ad96dc8a3a756?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:'/sandwich.svg',
        altTag:"a ham and cheese crossiant sandwich"
      },
  ]
  
  const Products = () => {
    return (
        <>
            <TawkToWrapper/> 
            <Navigation/>
            <Header title="Products" />
            <div className="bg-white">
                <div className="py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Snacks and Refreshments</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Discover a wide range of delectable snacks and beverages designed to cater to all cravings. From classic favorites like traditional Lay&apos;s chips to more substantial options like ham and cheese sandwiches, our vending machines offer a diverse selection that satisfies every appetite. 
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {products.map((product) => (
                            <li key={product.name}>
                                <div className="flex items-center gap-x-6 group">
                                <Image
                                className="transition-transform rotate-0 group-hover:rotate-45 group-hover:duration-300 group-hover:ease-out" 
                                src={product.imageUrl} 
                                height={70}
                                width={70}
                                alt={product.altTag}
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-green-700">{product.name}</h3>
                                    <a href={product.menuUrl} className="text-sm font-semibold leading-6 text-gray-700 hover:text-yellow-600 ">Learn More <span aria-hidden="true">→</span></a>
                                </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <svg  className="relative rotate-180" viewBox="0 0 1439 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1440 54.5205L1380.26 85.6751C1320.52 118.128 1198.97 181.735 1079.48 190.822C960 199.908 840.515 154.475 718.97 122.022C599.485 90.8675 480 72.694 360.515 67.5016C238.97 63.6072 119.485 72.694 59.7426 76.5883L0 81.7807V0H59.7426C119.485 0 238.97 0 360.515 0C480 0 599.485 0 718.97 0C840.515 0 960 0 1079.48 0C1198.97 0 1320.52 0 1380.26 0H1440V54.5205Z" fill="white"/>
                </svg> */}
            </div>
            <Footer/>
        </>
    )
  }
  
  export default Products;