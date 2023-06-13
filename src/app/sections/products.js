import Image from "next/image";

const people = [
      {
        name: 'All Snacks',
        menuUrl: 'https://nebula.wsimg.com/b4e5e936ba2f360b7a6eff3f034c59d2?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/all-snacks.png',
      },
      {
        name: 'All Beverages',
        menuUrl: 'https://nebula.wsimg.com/51514c525e01616a7ae2968b3b85e083?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/beverages.png',
      },
      {
        name: 'Healthy Snacks',
        menuUrl: 'https://nebula.wsimg.com/fc633c25aadfc057fa7b16f8f31e2b1a?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/healthy-snack.png'
      },
      {
        name: 'School Snacks',
        menuUrl: 'https://nebula.wsimg.com/0df5caf71984a17639a330aeb3d08e0f?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/school-snacks2.png',
      },
      {
        name: 'Coffee Items',
        menuUrl: 'https://nebula.wsimg.com/4fd66fbc522bfd70dc64919530bc9318?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:
          '/coffee.png',
      },
      {
        name: 'Cold Snacks',
        menuUrl: 'https://nebula.wsimg.com/04a6239b57652a84b89ad96dc8a3a756?AccessKeyId=099683943F8980B51AC6&disposition=0&alloworigin=1',
        imageUrl:'/sandwich.svg'
      },
  ]
  
  const Products = () => {
    return (
      <section id="products">
      <div className="bg-gray-200">
        <img className="relative" src="white-wave.svg"/>
        <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl"><a >Snacks and Refreshments</a></h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a wide range of delectable snacks and beverages designed to cater to all cravings. From classic favorites like traditional Lay&apos;s chips to more substantial options like ham and cheese sandwiches, our vending machines offer a diverse selection that satisfies every appetite. 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 group">
                  <Image
                   className="transition-transform rotate-0 group-hover:rotate-45 group-hover:duration-300 group-hover:ease-out" 
                   src={person.imageUrl} 
                   height={70}
                   width={70}
                   alt="" 
                   />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-green-700">{person.name}</h3>
                    <a href={person.menuUrl} className="text-sm font-semibold leading-6 text-gray-700 hover:text-yellow-600 ">Learn More <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img className="relative rotate-180" src="white-wave.svg"/>
      </div>
      </section>
    )
  }
  
  export default Products;