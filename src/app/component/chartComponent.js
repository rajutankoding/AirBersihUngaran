export const ChartImageTitleSub = () => {
  return (
    <div className="chart-image-title-sub border-2 border-dotted border-gray-200">
      <div className="chart-image-title-sub__left">
        <div className="chart-image-title-sub__left__title">Title</div>
        <div className="chart-image-title-sub__left__description">
          Description
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-gray-200 hover:border-transparent">
          Klik Saya
        </button>
      </div>
    </div>
  );
};

export const ChartImageDetail = () => {
  return (
    <div className="chart-image-detail w-64 my-4">
      <img
        className="w-full h-80 object-cover"
        src="https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image"
      />
      <a
        href="#"
        className="border-solid border-2 text-red-200 border-white hover:border-transparent hover:bg-black bg-yellow-100"
      >
        Ini tombol
      </a>
    </div>
  );
};
