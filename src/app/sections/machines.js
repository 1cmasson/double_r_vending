import Image from "next/image";

const people = [
      {
        name: 'Crane Merchant Media',
        role: 'Snack Machine',
        model:'246',
        imageUrl:
          '/snack-machine.png',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      },
      {
        name: 'BevMAX MEDIA2',
        role: 'Beverage Machine',
        model:'5800',
        imageUrl:
          '/beverage-machine2.png',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      },
      {
        name: 'Crane Shopper',
        role: 'Sandwich Machine',
        model:'432',
        imageUrl:
          '/sandwich-machine.png',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      }
  ]
  
  const Machines = () => {
    return (
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <div className="sticky top-0 h-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Our Cutting-Edge Vending Machines</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover a variety of vending machines that are specifically designed to fit perfectly into your available space. We offer different types of machines, including those for beverages, snacks, and even sandwiches, all of which can be customized to meet your specific needs.
                </p>
            </div>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <Image className="w-40 flex-none" width={200} height={200} src={person.imageUrl} alt="" />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900">{person.name} <em className="font-normal italic text-base">Model #{person?.model}</em></h3>/_next/image
                  <p className="font-semibold leading-7 text-green-700">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  export default Machines;