import React from "react";
import showcase1 from "../assets/showcase1.svg";

function Main() {
  return (
    <div className="w-[100%]">
      <main>
        <div className="flex items-center justify-center w-[100%] pl-[100px] pr-[100px]">
          <div className="flex items-center justify-center w-[100%] bg-[#F9F9F9] rounded-[24px]">
            <div className="flex items-center justify-center w-[60%]">
              <div className="flex flex-col items-start justify-start gap-[60px] w-[70%] h-[500px] overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-[33px]">
                  <p className="text-[54px] font-[600]">
                    Роспись стен в Санкт-Петербурге
                  </p>
                  <p className="text-[18px] font-[400]">
                    Закажите роспись стен в Санкт-Петербурге от художественной
                    студии Нимбус. Авторская техника росписи. Оформляем
                    квартиры, детские и офисы от 1 дня. Создаем эскизы, сами
                    закупаем материалы и оставляем всё в чистоте. Вам нужно
                    только позвонить нам.
                  </p>
                </div>
                <div className="flex bg-white rounded-[8px] overflow-hidden w-[400px] h-[60px]">
                  <input
                    type="text"
                    placeholder="0 (000) 000-00-00"
                    className="flex-1 px-4 text-gray-500 outline-none"
                  />
                  <button className="bg-[#FF5B88] text-white px-6 rounded-l-none rounded-r-[10px] text-[16px] font-medium">
                    заказать
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <img src={showcase1} alt="" draggable="false" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            Мы - команда
          </h2>
          <p className="text-center max-w-[700px] text-gray-600 mb-10">
            О нас написали в Деловом Петербурге, Невских Новостях, Авито
            Подкасте, Подкасте Либо-Либо, vc.ru и многие другие. <br />
            Также мы открыли свою школу росписи стен, запустили франшизу и
            зарегистрировали товарный знак.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] w-full">
            <div className="flex items-center justify-center border rounded-lg px-4 py-3 text-center hover:bg-black hover:text-white transition">
              Наши успехи
            </div>
            {[
              "За 2021 год в Санкт-Петербурге",
              "10 детских",
              "14 офисов",
              "52 пекарни",
              "12 квартир",
              "7 салонов красоты",
              "3 школы",
              "2 кофейни",
              "1 отель",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center border rounded-lg px-4 py-3 text-center hover:bg-black hover:text-white transition"
              >
                <span
                  className="text-[#FF5B88] font-medium"
                  dangerouslySetInnerHTML={{
                    __html: text.replace(
                      /^(\d+|За \d+)/,
                      '<span class="text-[#FF5B88]">$1</span>'
                    ),
                  }}
                />
                {text.replace(/^(\d+|За \d+)(.*)/, "$2")}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
