import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'
import CategoryTabs from './components/CategoryTabs'
import Footer from './components/Footer'
import CarParts from '../public/img/car-spare-parts.png'
import Flag from '../public/img/flag.jpg'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1  mb-10 bg-background py-10">
        <div className="mx-auto">
          <form className="bg-white border-2 border-heading shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="make">
                Make
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="make"
                type="text"
                placeholder="Choose your Make"
              />
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2" htmlFor="model">
                Model
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                type="model"
                placeholder="Choose your model"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="year">
                Year
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="year"
                type="text"
                placeholder="Year"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-heading hover:bg-red-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Find My Part
              </button>
            </div>
          </form>
        </div>
        <div>
          <Image src={CarParts} alt="car parts" width={600} height={600} />
        </div>
      </div>

      <div className="grid grid-cols-2 mb-10 xs:grid-cols-1 xxs:grid-cols-1 mx-auto">
        <div className="mx-auto">
          <h3 className="font-semibold text-3xl my-10">
            Why{' '}
            <span className="italic">
              PARTS<span className="text-heading">Giver</span>
            </span>{' '}
            ?
          </h3>
          <ol className="text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum lorem ipsum</li>
            <li>Lorem Ipsum ipsum</li>
            <li>Lorem Ipsum lorem</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold text-3xl mt-10 text-center text-heading">
            Areas we serve
          </h3>
          <Image
            src={Flag}
            alt="car parts"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>

      <CategoryTabs />
      <div className="max-w-6xl mx-auto mb-10">
        <div className="mb-5 flex justify-between font-semibold text-lg">
          <div className="text-left text-xl">Shop By Make</div>
          <div>
            <Link href="/" className="underline text-base">
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-9 xs:grid-cols-2 xxs:grid-cols-3 md:grid-cols-5">
          <div>
            <Image
              src="/img/car-logos/ford.webp"
              width={40}
              height={40}
              alt="ford spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/dodge.webp"
              width={40}
              height={40}
              alt="dodge spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/honda.webp"
              width={40}
              height={40}
              alt="honda spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/toyota.webp"
              width={40}
              height={40}
              alt="toyota spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/porsche.webp"
              width={40}
              height={40}
              alt="porsche spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/fiat.webp"
              width={40}
              height={40}
              alt="fiat spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/hyundai.webp"
              width={40}
              height={40}
              alt="hyundai spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/kia.webp"
              width={40}
              height={40}
              alt="kia spare parts"
            />
          </div>
          <div>
            <Image
              src="/img/car-logos/jeep.webp"
              width={40}
              height={40}
              alt="jeep spare parts"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-10">
        <div className="mb-5 flex justify-between font-semibold text-lg">
          <div className="text-xl">Location</div>
        </div>
        <div className="grid grid-cols-5 mx-auto xs:grid-cols-2 xxs:grid-cols-3 md:grid-cols-5">
          <div>
            <Image
              src="/img/location/abudhabi.jpg"
              width={80}
              height={80}
              alt="spare parts in abu dhabi"
            />
          </div>
          <div>
            <Image
              src="/img/location/ajman.jpg"
              width={80}
              height={80}
              alt="spare parts in ajman"
            />
          </div>
          <div>
            <Image
              src="/img/location/alain.jpg"
              width={80}
              height={80}
              alt="spare parts in al ain"
            />
          </div>
          <div>
            <Image
              src="/img/location/dubai.jpg"
              width={80}
              height={80}
              alt="spare parts in dubai"
            />
          </div>
          <div>
            <Image
              src="/img/location/sharjah.png"
              width={80}
              height={80}
              alt="spare parts in sharjah"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-3xl text-teal-900 font-semibold xs:text-xl ">
            PartsGiver - Features & Functionalities
          </h1>
          <ol className="list-inside list-decimal text-sm">
            <li>Spare parts Ecommerce catalog</li>
            <li>Hosted on AWS Lambda</li>
            <li>Inquiry form</li>
            <li>User search functionalities</li>
            <li>Paypal Integration</li>
            <li>Supplier Login</li>
            <li>Supplier Bid page</li>
            <li>Client create, add, edit, update spare parts details</li>
            <li>Inquiry form</li>
          </ol>
        </main>
      </div>
      <Footer />
    </div>
  )
}
