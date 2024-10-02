'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('#interior')
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  return (
    <div className="mb-10 mx-auto max-w-6xl">
      <div className="tabs font-semibold text-lg mb-3" data-tabs="true">
        <button
          className={`tab m-2 ${
            activeTab === '#interior' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#interior')}
        >
          Interior
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#exterior' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#exterior')}
        >
          Exterior
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#wheelstires' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#wheelstires')}
        >
          Wheels & Tires
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#performance' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#performance')}
        >
          Performance
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#lighting' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#lighting')}
        >
          Lighting
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#accessories' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#accessories')}
        >
          Accessories
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#repairparts' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#repairparts')}
        >
          Repair Parts
        </button>
        <button
          className={`tab m-2 ${
            activeTab === '#coolingsystems' ? 'active' : ''
          } hover:underline`}
          onClick={() => handleTabClick('#coolingsystems')}
        >
          Cooling Systems
        </button>
      </div>
      <div
        className={`${activeTab === '#interior' ? '' : 'hidden'}`}
        id="interior"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/SeatCoversInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Seat Covers</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/ShiftKnobsInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Shift Knobs</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/SteeringWheelsInterior.png"
              height={130}
              width={130}
            />
            <span className="pt-2">Steering wheels</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/DashKitsInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Dash kits</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/GaugesInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Gauge</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/BilletPedalsInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Billet Pedals</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/FloorMatsInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Floor Mats</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/InteriorTrimInterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Interior Trim</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#exterior' ? '' : 'hidden'}`}
        id="exterior"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/LightsExterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Lights</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/MirrorsExterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Mirrors</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/GrilleGuardsExterior.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Grille Guards</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#wheelstires' ? '' : 'hidden'}`}
        id="wheelstires"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/WheelCovers.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Wheel Covers</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Tires.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Tires</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Wheels.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Wheels</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#performance' ? '' : 'hidden'}`}
        id="performance"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/TransmissionPerformance.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Transmission</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/TurbosPerformance.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Turbos & Superchargers</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/AirIntakePerformance.webp"
              height={130}
              width={130}
            />
            <span className="pt-2"> Air Intake & Fuel Delivery</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#lighting' ? '' : 'hidden'}`}
        id="lighting"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Headlights.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Headlights</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/CarBulbs.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Car bulbs</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Taillights.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Tail lights</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#accessories' ? '' : 'hidden'}`}
        id="accessories"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/RadarDetectors.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Radar Detectors</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/GPS.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">GPS Navigation Systems</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Cameras.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Cameras & Driver Safety</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#repairparts' ? '' : 'hidden'}`}
        id="repairparts"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/BigBrakeKits.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Big Brake Kits</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/BraidedBrake.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Braided Brake Lines</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/BrakeCalipers.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Brake Calipers</span>
          </div>
        </div>
      </div>
      <div
        className={`${activeTab === '#coolingsystems' ? '' : 'hidden'}`}
        id="coolingsytems"
      >
        <div className="grid grid-cols-8 md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2">
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Antifreeze.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Antifreeze & Additives</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/Intercoolers.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Intercoolers</span>
          </div>
          <div className="p-2 text-center mx-auto">
            <Image
              alt="seat covers"
              src="/img/Category/EnginePulleys.webp"
              height={130}
              width={130}
            />
            <span className="pt-2">Engine Pulleys</span>
          </div>
        </div>
      </div>
    </div>
  )
}
