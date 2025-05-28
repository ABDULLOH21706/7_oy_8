import React from "react";
import showcase1 from "../assets/showcase1.svg";
import serviceImage1 from "../assets/swipe1.svg";
import serviceImage2 from "../assets/swipe2.svg";
import serviceImage3 from "../assets/swipe3.svg";
import serviceImage4 from "../assets/swipe4.svg";
import serviceImage5 from "../assets/swipe1.svg";
import serviceImage6 from "../assets/swipe2.svg";
const ServiceCard = ({ imageSrc, title }) => {
  return (
    <div
      className="
      bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center
      transition-all duration-300 ease-in-out cursor-pointer
      hover:shadow-lg hover:-translate-y-1 /* Hover effekti: soya va yuqoriga siljish */
    "
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>{" "}
    </div>
  );
};

function Main() {
  const serviceData = [
    { image: serviceImage1, title: "Роспись стен в офисе" },
    { image: serviceImage2, title: "Роспись стен в детской" },
    { image: serviceImage3, title: "Роспись стен в квартире" },
    { image: serviceImage4, title: "Граффити на стене" },
    { image: serviceImage5, title: "Художественная роспись" },
    { image: serviceImage6, title: "Дизайн интерьера" },
  ];

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

        <div className="flex flex-col items-center justify-center bg-[#F9F9F9] pt-[50px] pb-[50px] gap-[30px] w-full">
          <p className="text-[26px] font-[600] mb-5">Услуги</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.image}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;