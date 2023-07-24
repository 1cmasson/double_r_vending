import Image from 'next/image'

const Header = (props) => {
    const { title } = props;
    return (
      <div className="relative isolate overflow-hidden bg-green-900 px-6 pb-36 pt-56 lg:px-8">
        {/* <Image
          src="https://"
          alt=""
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
        </div>
      </div>
    )
  }

  export default Header;