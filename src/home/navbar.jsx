import React, { useState } from "react";
import nimbus from "../assets/nimbus.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import call from "../assets/call.svg";

function Navbar() {
  const [selected1, setSelected1] = useState("Категория");
  const [selected2, setSelected2] = useState("Цены");
  const [selected3, setSelected3] = useState("Услуги");
  const [selected4, setSelected4] = useState("Контакты");
  const [selected5, setSelected5] = useState("О нас");

  return (
    <div className="flex items-center justify-center w-[100%]">
      <header className="flex items-center justify-between p-[8px] pl-[100px] pr-[100px] w-full">
        <div className="flex items-center justify-center gap-[45px]">
          <div className="w-[130px]">
            <img src={nimbus} alt="" draggable="false" />
          </div>

          <div className="flex items-center justify-center gap-[30px]">
            {/* Dropdown 1 */}
            <div className="relative group inline-block">
              <button className="outline-none px-4 py-2 bg-white rounded">
                {selected1}
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-lg z-10 min-w-full">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected1("Портфолио")}
                >
                  Портфолио
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected1("Фотографии")}
                >
                  Фотографии
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected1("Видео")}
                >
                  Видео
                </button>
              </div>
            </div>

            {/* Dropdown 2 */}
            <div className="relative group inline-block">
              <button className="outline-none px-4 py-2 bg-white rounded">
                {selected2}
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-lg z-10 min-w-full">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected2("Цены")}
                >
                  Цены
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected2("Цены")}
                >
                  Цены
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected2("Цены")}
                >
                  Цены
                </button>
              </div>
            </div>

            {/* Dropdown 3 */}
            <div className="relative group inline-block">
              <button className="outline-none px-4 py-2 bg-white rounded">
                {selected3}
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-lg z-10 min-w-full">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected3("Услуги")}
                >
                  Услуги
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected3("Услуги")}
                >
                  Услуги
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected3("Услуги")}
                >
                  Услуги
                </button>
              </div>
            </div>

            {/* Dropdown 4 */}
            <div className="relative group inline-block">
              <button className="outline-none px-4 py-2 bg-white rounded">
                {selected4}
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-lg z-10 min-w-full">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected4("Контакты")}
                >
                  Контакты
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected4("Контакты")}
                >
                  Контакты
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected4("Контакты")}
                >
                  Контакты
                </button>
              </div>
            </div>

            {/* Dropdown 5 */}
            <div className="relative group inline-block">
              <button className="outline-none px-4 py-2 bg-white rounded">
                {selected5}
              </button>
              <div className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-lg z-10 min-w-full">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected5("О нас")}
                >
                  О нас
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected5("О нас")}
                >
                  О нас
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => setSelected5("О нас")}
                >
                  О нас
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[40px]">
          <div className="flex items-center justify-center gap-[5px]">
            <button className="w-[30px]">
              <img src={telegram} alt="" draggable="false" />
            </button>
            <button className="w-[30px]">
              <img src={whatsapp} alt="" draggable="false" />
            </button>
            <button className="w-[30px]">
              <img src={email} alt="" draggable="false" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-[5px] cursor-pointer">
            <div className="w-[20px]">
              <img src={call} alt="" draggable="false" />
            </div>
            <p className="text-[#FF5681] text-[14px] font-[600]">
              8 (965) 016-54-31
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
