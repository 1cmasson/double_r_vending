import Image from "next/image";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Machines', href: '#machines' },
  { name: 'Contact', href: '#contact' },
]

const products = [
  {name:"Beverages"},
  {name:"Traditional Snacks"},
  {name:"Healthy Snacks"},
  {name:"Coffee Products"},
  {name:"Cold Meals"},
  {name:"School Snacks"}
]

const machines = [
  {name:"Beverage Machines"},
  {name:"Snack Machines"},
  {name:"Coffee Machines"},
  {name:"Sandwich Machines"},
]

const  Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">  
          <div className="mt-16 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-4 md:col-start-2 md: col-span-1 md:gap-8">
              <div>
                <Image
                  height={140}
                  width={140}
                  src="/logo.svg"
                  alt="Company name"
                />
                <address className="text-sm not-italic mt-6 text-black">
                <div className="grid grid-rows-3 gap-1 items-center">
                  <div>
                    <div className="font-semibold text-green-800">Office</div>
                    35 NE Ninth Ct
                    <br />
                    Hialeah, FL 33010
                  </div>
                  <div>
                    <div className="text-green-800 font-semibold">Phone</div>
                    <a className="hover:text-gray-300 font-normal" href="tel:+1 (786) 423-1818">+1 (786) 423-1818</a>
                  </div>
                  <div>
                  <div className="text-green-800 text-sm font-semibold">Email</div> 
                    <a className="hover:text-gray-300" href="mailto:doublervendingco@bellsouth.net">doublervendingco@bellsouth.net</a> 
                  </div>
                </div>          
              </address>
              </div>
              <div className="mt-24 md:mt-0 md:ml-8">
                <h3 className="text-base font-bold leading-6 text-green-800">Navigation</h3>
                <span className="relative h-0.5 w-40 mt-4 bg-gray-300 block"/>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0">
                <h3 className="text-base font-bold leading-6 text-green-800">Products</h3>
                <span className="relative h-0.5 w-40 mt-4 bg-gray-300 block"/>
                <ul role="list" className="mt-6 space-y-4">
                  {products.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0">
                <h3 className="text-base font-bold leading-6 text-green-800">Machines</h3>
                <span className="relative h-0.5 w-40 mt-4 bg-gray-300 block"/>
                <ul role="list" className="mt-6 space-y-4">
                  {machines.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;