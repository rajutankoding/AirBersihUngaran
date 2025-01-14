import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Sui Logo"
            className="h-10 w-10"
          />
          <span className="ml-2 text-xl font-bold">Y.A.A.P Tech</span>
        </div>
        <nav className="flex space-x-4">
          <div className="relative group">
            <button className="focus:outline-none">
              Learn <i className="fas fa-chevron-down"></i>
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">
              Build <i className="fas fa-chevron-down"></i>
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">
              Connect <i className="fas fa-chevron-down"></i>
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Get started
        </button>
      </header>
      <main className="relative">
        <img
          src="https://placehold.co/1920x600"
          alt="Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Yours Digital Solution
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Transformasi Digital Terpadu untuk Bisnis Anda
          </p>
        </div>
      </main>
      <section className="p-4">
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://placehold.co/256x144"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Company Profile Website
              </h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Watch recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://placehold.co/256x144"
              alt="Korean Blockchain Week 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Mobile APPs for Business
              </h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Watch recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://placehold.co/256x144"
              alt="Singapore"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Digital Marketing</h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Read recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://placehold.co/256x144"
              alt="Kyoto"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Consulting Business</h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Read recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center py-8">
        <p className="mb-4">The most innovative companies build on Sui</p>
        <div className="flex justify-center space-x-8">
          <img src="https://placehold.co/100x40" alt="Netmarble logo" />
          <img src="https://placehold.co/100x40" alt="Bluefin logo" />
          <img src="https://placehold.co/100x40" alt="GREE logo" />
          <img src="https://placehold.co/100x40" alt="X logo" />
          <img src="https://placehold.co/100x40" alt="Suilend logo" />
          <img src="https://placehold.co/100x40" alt="NNN logo" />
          <img src="https://placehold.co/100x40" alt="Cetus logo" />
          <img src="https://placehold.co/100x40" alt="SUPRA logo" />
          <img
            src="https://placehold.co/100x40"
            alt="Oracle Red Bull Racing logo"
          />
          <img src="https://placehold.co/100x40" alt="Aftermath logo" />
        </div>
      </footer>
    </div>
  );
}
