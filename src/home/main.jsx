import React from "react";
import "../index.css";
import showcase1 from "../assets/showcase1.svg";
import serviceImage1 from "../assets/swipe1.svg";
import serviceImage2 from "../assets/swipe2.svg";
import serviceImage3 from "../assets/swipe3.svg";
import serviceImage4 from "../assets/swipe4.svg";
import serviceImage5 from "../assets/swipe1.svg";
import serviceImage6 from "../assets/swipe2.svg";

const serviceData = [
  {
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Service+1",
    title: "Художественная роспись стен",
  },
  {
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Service+2",
    title: "Оформление интерьеров",
  },
  {
    image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Service+3",
    title: "Граффити и муралы",
  },
  {
    image: "https://via.placeholder.com/150/FFFF00/000000?text=Service+4",
    title: "Дизайн фасадов",
  },
];
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

  const teamMembers = [
    {
      name: "Анна",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text ever since the 1500s, when an unknown.",
    },
    {
      name: "Анна",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text ever since the 1500s, when an unknown.",
    },
    {
      name: "Анна",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
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

        <div className="flex items-center justify-center w-[100%]">
          <div className="flex flex-col items-center justify-center gap-[30px] pt-[50px] pb-[50px] w-[50%]">
            <p className="text-[26px] font-[600]">Цена росписи стен</p>
            <div className="flex items-center justify-center gap-[20px]">
              <div class="card bg-white rounded-2xl p-10 shadow-lg text-center w-80 sm:w-[340px] flex flex-col items-center justify-center gap-[60px]">
                <div className="flex flex-col items-center justify-center gap-[30px]">
                  <p class="text-[28px] font-medium text-gray-800">Просто</p>
                  <p>
                    <span class="text-primary-pink text-[38px] font-bold">
                      от 900 ₽
                    </span>
                    <span class="text-gray-600 text-lg ml-2">за м2</span>
                  </p>
                  <p class="text-gray-500 text-base">
                    Геометрия, линии и роспись по скотчу
                  </p>
                </div>
                <button class="bg-white text-primary-pink border border-primary-pink py-3.5 px-9 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-pink hover:text-white focus:outline-none">
                  заказать
                </button>
              </div>
              <div class="card bg-white rounded-2xl p-10 shadow-lg text-center w-80 sm:w-[340px] flex flex-col items-center justify-center gap-[60px]">
                <div className="flex flex-col items-center justify-center gap-[30px]">
                  <p class="text-[28px] font-medium text-gray-800">Просто</p>
                  <p>
                    <span class="text-primary-pink text-[38px] font-bold">
                      от 900 ₽
                    </span>
                    <span class="text-gray-600 text-lg ml-2">за м2</span>
                  </p>
                  <p class="text-gray-500 text-base">
                    Геометрия, линии и роспись по скотчу
                  </p>
                </div>
                <button class="bg-white text-primary-pink border border-primary-pink py-3.5 px-9 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-pink hover:text-white focus:outline-none">
                  заказать
                </button>
              </div>
              <div class="card bg-white rounded-2xl p-10 shadow-lg text-center w-80 sm:w-[340px] flex flex-col items-center justify-center gap-[60px]">
                <div className="flex flex-col items-center justify-center gap-[30px]">
                  <p class="text-[28px] font-medium text-gray-800">Просто</p>
                  <p>
                    <span class="text-primary-pink text-[38px] font-bold">
                      от 900 ₽
                    </span>
                    <span class="text-gray-600 text-lg ml-2">за м2</span>
                  </p>
                  <p class="text-gray-500 text-base">
                    Геометрия, линии и роспись по скотчу
                  </p>
                </div>
                <button class="bg-white text-primary-pink border border-primary-pink py-3.5 px-9 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-pink hover:text-white focus:outline-none">
                  заказать
                </button>
              </div>
            </div>
            <p className="text-center text-[#787878] text-[13px] font-[400]">
              Стоимость художественной росписи стен в Санкт-Петербурге
              рассчитывается индивидуально. На цену влияет размер рисунка,
              сложность, особенности поверхности и вид материалов. При заказе
              большого объема мы делаем скидки. Если у вас ограниченный бюджет,
              мы подстраиваемся и подбираем несложные рисунки. Стоимость
              материалов всегда оплачивается отдельно. Также отдельно
              оплачивается эскиз. Закажите роспись стен в спб у нас на сайте.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
            <div class="flex items-baseline mb-6 flex-wrap">
              <h2 class="text-2xl font-semibold text-gray-800 leading-tight">
                Заказать роспись стен
              </h2>
              <span class="text-sm text-pink-500 ml-2 whitespace-nowrap mt-1 md:mt-0">
                *согласие на обработку персональных данных
              </span>
            </div>
            <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <input
                type="tel"
                class="flex-grow p-3 rounded-lg border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="0 (000) 000-00-00"
              />
              <button class="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg whitespace-nowrap transition-colors duration-200">
                заказать
              </button>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Мы - команда
            </h2>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex w-full max-w-sm bg-pink-100 rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="w-4 bg-pink-500 flex-shrink-0"></div>
                    <div className="p-6 flex flex-col items-center text-center flex-grow">
                      <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex items-center justify-center mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <div className="flex justify-center gap-1 mb-4">
                        {Array.from({ length: member.stars }).map((_, i) => (
                          <span key={i} className="text-pink-500 text-xl">
                            &#9733;
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-left">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 z-10">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 z-10">
                <svg
                  className="w-5 h-5 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Main;
