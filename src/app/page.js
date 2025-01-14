import Image from "next/image";
import {
  ChartImageDetail,
  ChartImageTitleSub,
} from "./component/chartComponent";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-blue-400 text-white">
        <div className="flex items-center">
          <img src="/KTM.png" alt="Sui logo" className="h-8 w-8 object-cover" />
          <span className="ml-2 text-xl font-bold">AIR BERSIH</span>
        </div>
        {/* <div className="hidden md:flex space-x-4">
          <div className="relative group">
            <button className="focus:outline-none">Learn</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">Build</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">Connect</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
        </div> */}
        <a
          href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih"
          className="hubungiKami text-white px-4 py-2 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hubungi Kami
        </a>
      </header>
      <div className="text-center bg-black text-white py-2">
        <p>percayakan kebutuhan air bersih kepada kami!</p>
      </div>
      <main className="relative">
        <img
          src="https://images.pexels.com/photos/13826995/pexels-photo-13826995.png?auto=compress&cs=tinysrgb&w=600"
          alt="Background"
          className="w-full h-96 rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="filter text-wrap">
            <h1 className="text-5xl font-bold mt-8 heroTitle">
              Air Gunung Ungaran, Langsung dari Alam
            </h1>
            <p className="heroSubtitle">
              Segarnya air pegunungan kini hadir di rumah Anda. Nikmati
              kesegaran alam Gunung Ungaran setiap hari
              {/* Sui delivers the benefits of{" "}
          <span className="text-red-500">Web3</span> with the ease of Web2 */}
            </p>
            {/* <div className="mt-8 space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
                Start building
              </button>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-md">
                Learn about Sui
              </button>
            </div> */}
          </div>
        </div>
      </main>
      <section className="p-4">
        {/* <div className="text-center text-4xl font-semibold mt-8">
          we are here to advance your business
          <ChartImageTitleSub />
          <ChartImageDetail />
        </div> */}

        <div className="flex flex-wrap justify-center space-x-4">
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/airbersih-gedung-proyek-semarang.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Untuk Gedung dan Proyek
              </h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20untuk%20gedung%20dan%20proyek"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/air-bersih-rumah-makan-ungaran.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Untuk Rumah Makan</h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20untuk%20Rumah%20Makan"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/air-bersih-perumahan-semarang.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Air Bersih Perumahan</h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20untuk%20Perumahan"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/air-bersih-isi-ulang-semarang.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Untuk Depo Isi Ulang Air Minum
              </h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20untuk%20Isi%20Ulang%20Air%20Minum"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/air-bersih-pabrik-semarang.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Kebutuhan Air Bersih Pabrik
              </h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20untuk%20Pabrik"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="/air-bersih-kolam-renang-ungaran.jpg"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Untuk Kolam Renang</h2>
              <a
                href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih%20Kolam%20Renang"
                target="_blank"
                className="text-blue-400 mt-2 block"
              >
                Tanyakan Detail <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              "9 Tahun Kami Melayani Kebutuhan Air Bersih"
            </h1>
            <p className="text-lg mt-2">
              9 Tahun Terpercaya, Jutaan Liter Kesegaran. Kami telah melayani
              ratusan konsumen dengan air bersih berkualitas dari Gunung Ungaran
              selama 9 tahun. Pengalaman kami menjadi jaminan kesegaran air yang
              Anda nikmati.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* <div className="bg-gradient-to-b from-blue-400 to-blue-100 p-8 rounded-lg w-full md:w-1/2 text-center"> */}
            <div className=" p-8 rounded-lg w-full md:w-1/2 ">
              <i className="fas fa-gamepad text-4xl mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">40.000++ Pengiriman</h2>
              <p className="mb-4">
                Lebih dari 40.000 pengiriman air bersih telah kami lakukan ke
                seluruh wilayah Semarang, Kendal, dan Demak. Kepercayaan 200
                perusahaan menjadi bukti kualitas layanan kami.
              </p>
              {/* <button className="bg-white text-black py-2 px-4 rounded-full">
                Play for free
              </button> */}
            </div>
            <div className=" p-8 rounded-lg w-full md:w-1/2 ">
              <i className="fas fa-music text-4xl mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">
                Terpercaya dan Komitmen
              </h2>
              <p className="mb-4">
                Dipercaya oleh ratusan konsumen dan 200 perusahaan, kami
                berkomitmen untuk selalu memberikan air bersih berkualitas
                dengan pelayanan terbaik. Kepuasan Anda adalah prioritas kami.
              </p>
              {/* <button className="bg-white text-black py-2 px-4 rounded-full">
                Discover artists
              </button> */}
            </div>
            <div className=" p-8 rounded-lg w-full md:w-1/2 ">
              <i className="fas fa-music text-4xl mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">
                Kesegaran dan Kualitas
              </h2>
              <p className="mb-4">
                Langsung dari sumber mata air Gunung Ungaran, kami telah
                menyalurkan jutaan liter air segar ke rumah-rumah Anda.
                Kesegaran alam yang kami hadirkan, memberikan kesegaran untuk
                keluarga Anda.
              </p>
              {/* <button className="bg-white text-black py-2 px-4 rounded-full">
                Discover artists
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-8">
        <div className="text-center mb-4">
          <p className="text-lg">
            Kami melayani Konsultasi 24 Jam untuk wilayah Semarang, Kendal,
            Demak dan sekitarnya
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <a
            href="https://wa.me/081325098909?text=Halo,%20saya%20ingin%20menanyakan%20tentang%20air%20bersih"
            className="hubungiKami text-white px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </a>
          {/* <img
            src="https://placehold.co/100x40"
            alt="Netmarble logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Bluefin logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="GREE logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="XoXo logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Suilend logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="NNN logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Cetus logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Supra logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Oracle Red Bull Racing logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Aftermath logo"
            className="h-10"
          /> */}
        </div>
      </footer>
      {/* <main className="p-8"> */}
      {/* <div className="text-center text-4xl font-semibold mb-8">
          The support you need, when you need it
        </div> */}
      {/* <div className="text-center text-4xl font-semibold mb-8">
          grow your business with us
        </div> */}
      {/* <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1684225765169-2c46196bcca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJuZXR8ZW58MHx8MHx8fDA%3D"
              alt="Cube icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">Digitalization</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1669323926640-680d85157a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vYmlsZSUyMGZhc3RlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Cube icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">Mobile Apps Faster</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1683288662057-2ac296955d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN0YXRpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Trophy icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">
              More Client Interact <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div> */}

      {/* <div className="flex justify-center space-x-8">
          <div className="text-white">
            <div className="flex items-center space-x-2">
              <span>Forum</span>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <span>Office hours</span>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <span>Grants</span>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div> */}
      {/* </main> */}
    </div>
  );
}
