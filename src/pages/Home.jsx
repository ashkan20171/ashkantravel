import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-teal-50 min-h-screen">
      {/* هدر قهرمان (Hero Section) */}
      <section className="text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-teal-700 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("welcomeTitle") || "به گردشگری اشکان خوش آمدید"}
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t("welcomeSubtitle") || "ماجراجویی خود را با ما آغاز کنید..."}
        </motion.p>

        <Link
          to="/tours"
          className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 transition-all"
        >
          {t("exploreTours") || "مشاهده تورها"}
        </Link>
      </section>

      {/* بخش تورهای محبوب */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-10">
          {t("popularTours") || "تورهای محبوب"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "سفر به استانبول",
              img: "https://images.unsplash.com/photo-1570158268183-d296b2892211",
              price: "18,000,000 تومان",
            },
            {
              title: "تور دبی",
              img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
              price: "22,500,000 تومان",
            },
            {
              title: "سفر به کیش",
              img: "https://images.unsplash.com/photo-1617196037295-5dcbb0cbe4c3",
              price: "9,800,000 تومان",
            },
          ].map((tour, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-teal-700 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-500 mb-3">{tour.price}</p>
                <Link
                  to="/tours"
                  className="text-sm bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* بخش تماس با ما */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">در تماس با ما باشید</h2>
          <p className="text-gray-200 mb-8">
            برای دریافت اطلاعات بیشتر درباره تورها و مشاوره سفر، فرم زیر را پر کنید.
          </p>
          <form className="max-w-md mx-auto grid gap-4">
            <input
              type="text"
              placeholder="نام شما"
              className="p-3 rounded text-gray-800"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="p-3 rounded text-gray-800"
            />
            <textarea
              placeholder="پیام شما"
              rows="4"
              className="p-3 rounded text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-teal-700 font-bold py-2 rounded hover:bg-gray-100 transition"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
