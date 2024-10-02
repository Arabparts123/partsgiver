'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-5 xs:grid-cols-2 xxs:grid-cols-2 bg-secondary mt-20 text-white p-5">
        <div>
          <h6 className="font-semibold pb-3 text-lg">SHOP</h6>
          <ul className="text-gray-500 text-sm">
            <li>
              <Link href="/">Spark Plugs</Link>
            </li>
            <li>
              <Link href="/">Shock Absorber</Link>
            </li>
            <li>
              <Link href="/">Engine</Link>
            </li>
            <li>
              <Link href="/">Headlights</Link>
            </li>
            <li>
              <Link href="/">Taillights</Link>
            </li>
            <li>
              <Link href="/">Gearbox</Link>
            </li>
            <li>
              <Link href="/">Bumper</Link>
            </li>
            <li>
              <Link href="/">Radiator</Link>
            </li>
            <li>
              <Link href="/">View All {'>>'}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold pb-3 text-lg">ENQUIRE PRICE</h6>
          <ul className="text-gray-500 text-sm">
            <li>
              <Link href="/">Honda</Link>
            </li>
            <li>
              <Link href="/">Volkswagen</Link>
            </li>
            <li>
              <Link href="/">Audi</Link>
            </li>
            <li>
              <Link href="/">Porsche</Link>
            </li>
            <li>
              <Link href="/">Infiniti</Link>
            </li>
            <li>
              <Link href="/">Volvo</Link>
            </li>
            <li>
              <Link href="/">Toyota</Link>
            </li>
            <li>
              <Link href="/">Nissan</Link>
            </li>
            <li>
              <Link href="/">Lexus</Link>
            </li>
            <li>
              <Link href="/">View All {'>>'}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold pb-3 text-lg">CAR BATTERY SERVICES</h6>
          <ul className="text-gray-500 text-sm">
            <li>
              <Link href="/">Spot Battery Replacement in UAE</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold pb-3 text-lg">COMPANY & POLICIES</h6>
          <ul className="text-gray-500 text-sm">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold pb-3 text-lg">WE ACCEPT</h6>
          <div className="grid grid-cols-7 gap-1">
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/americanexpress.jpg"
                  alt="americanexpress"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/applepay.png"
                  alt="applepay"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/discover.jpg"
                  alt="discover"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/mastercard.png"
                  alt="masercard"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/paypal.webp"
                  alt="paypal"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/vimeo.png"
                  alt="vimeo"
                  width={48}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/img/pay/visa.jfif"
                  alt="visa"
                  width={50}
                  height={32}
                  className="rounded-md"
                />
              </Link>
            </div>
          </div>

          <h6 className="font-semibold py-3 text-lg">WE ACCEPT</h6>
          <div>
            <div>
              <Link href="/">
                <Image
                  src="/img/googleplay.png"
                  className="rounded-md"
                  alt="googlepay"
                  width={300}
                  height={200}
                />
              </Link>
            </div>

            <div className="my-2">
              <Link href="/">
                <Image
                  src="/img/applestore.png"
                  alt="applestore"
                  className="rounded-md"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background mx-auto text-center font-semibold py-5">
        <div className="flex justify-center space-x-5 text-xl text-heading">
          <div className="bg-secondary hover:bg-gray-800 rounded-xl hover:rounded-full p-3 px-4">
            <Link href={`https://www.facebook.com/emirates.auto.parts/`}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
          <div className="bg-secondary hover:bg-gray-800 rounded-xl hover:rounded-full p-3 px-4">
            <Link
              href={`https://www.instagram.com/emiratescar_parts/`}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <div className="bg-secondary hover:bg-gray-800 rounded-xl hover:rounded-full p-3 px-4">
            <Link
              href={`https://twitter.com/emiratescarpart`}
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
          <div className="bg-secondary hover:bg-gray-800 rounded-xl hover:rounded-full p-3 px-4">
            <Link href={`https://emirates-car.tumblr.com/`} aria-label="Tumblr">
              <FontAwesomeIcon icon={faTumblr} />
            </Link>
          </div>
        </div>
        <div className="text-sm text-secondary my-3 italic font-bold">
          &copy; PARTS<span className="text-heading">Giver</span>
        </div>
      </div>
    </footer>
  )
}
