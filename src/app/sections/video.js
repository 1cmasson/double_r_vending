import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAppleWhole,
  faCookieBite,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons'
import {
    Cog6ToothIcon,
    CreditCardIcon,
    CpuChipIcon
  } from '@heroicons/react/20/solid'

  const YouTube = React.lazy(() => import('react-youtube'));
  
  const features = [
    {
      name: 'Curated Snacks',
      description: 'Enjoy a diverse selection of curated snacks, from healthy choices to classic favorites.',
      icon: FontAwesomeIcon,
      font: faCookieBite
    },
    {
      name: 'Innovative Technology',
      description: 'SureVend guarantees the correct product delivery or a refund, ensuring a seamless experience.',
      icon: CpuChipIcon,
    },
    {
      name: 'Cashless Payment Options',
      description: 'Embrace convenience with our cashless payment solutions, including NFC payment methods.',
      icon: CreditCardIcon,
    },
    {
      name: 'Free Amenities',
      description: 'Experience exceptional value with our thoughtful free amenities upon request, enhancing your snacking experience beyond expectations.',
      icon: FontAwesomeIcon,
      font: faHandHoldingHeart
    },
    {
      name: '24/7 Repair Maintenance',
      description: 'Our skilled technicians promptly address any issues with the vending machines to ensure uninterrupted service.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Healthy Snacks for Schools',
      description: 'Our snacks are chosen to meet nutritional guidelines for children to have access to healthy snacks.',
      icon: FontAwesomeIcon,
      font: faAppleWhole
    },
  ]
  
  const Video = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            At Double R Vending, we are committed to providing top-notch vending solutions tailored to your needs. Our range of services is designed to elevate your snacking experience, whether you&apos;re a business seeking convenience or a school aiming for nutritious options. Discover how our offerings can transform your workplace or event.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" flex justify-center videoWrapper" >
                <YouTube videoId="xavFFA3Sf2E" opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon icon={feature?.font || null} className="absolute left-1 top-1 h-5 w-5 text-green-700" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

  export default Video;
  