import React from "react";
import icon from "../asset/image/iconTree.svg";

const tablePrice = () => {
  return (
    <div	>
      <h1 class="mb-4 text-center	 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bảng giá dịch vụ</span></h1>

      <div class="grid md:grid-cols-3 grid-cols-1">
        {/* div 1 */}
        <div class="  m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img
            src={icon}
            alt="icon"
            className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
          />

          <p class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
            Gói 1 tháng
          </p>
          <p class="blueberry font-semibold text-gray-600 text-xs">
            Tư vấn viên hỗ trợ 24/7 thông qua điện thoại, Email, Telegram, Zalo,
            Facebook
          </p>
          <div class="ordernow flex flex-row justify-between items-center w-full">
            <p class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
              499.000 VND
            </p>
            <p class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
              <button>Mua ngay</button>
            </p>
          </div>
        </div>
        {/* div 2 */}
        <div class="  m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img
            src={icon}
            alt="icon"
            className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
          />

          <p class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
            Gói 3 tháng
          </p>
          <p class="blueberry font-semibold text-gray-600 text-xs">
            Tư vấn viên hỗ trợ 24/7 thông qua điện thoại, Email, Telegram, Zalo,
            Facebook
          </p>
          <div class="ordernow flex flex-row justify-between items-center w-full">
            <p class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
              1.299.000 VND
            </p>
            <p class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
              <button>Mua ngay</button>
            </p>
          </div>
        </div>
        {/* div 3 */}
        <div class=" m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
          <img
            src={icon}
            alt="icon"
            className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
          />

          <p class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
            Gói 6 tháng
          </p>
          <p class="blueberry font-semibold text-gray-600 text-xs">
            Tư vấn viên hỗ trợ 24/7 thông qua điện thoại, Email, Telegram, Zalo,
            Facebook
          </p>
          <div class="ordernow flex flex-row justify-between items-center w-full">
            <p class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
              2.499.000 VND
            </p>
            <p class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
              <button>Mua ngay</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tablePrice;
