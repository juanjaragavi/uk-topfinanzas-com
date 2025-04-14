"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUs() {
  // State for FAQ accordion
  const [openFAQs, setOpenFAQs] = useState<{ [key: number]: boolean }>({});

  // Toggle FAQ open/closed state
  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // FAQ data structure
  const faqs = [
    {
      question: "What services does Top Finanzas offer?",
      answer: (
        <p>
          Top Finanzas offers financial advice, practical tools, and educational
          resources. For more details,
          <Link href="/" className="text-blue-600 hover:underline ml-1">
            visit our homepage
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How can I improve my personal finances?",
      answer: (
        <p>
          Start by evaluating your income and expenses, establishing a budget,
          and setting clear financial goals. Find more advice on
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            our blog
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer personalised advice?",
      answer: (
        <p>
          Yes, we offer personalised services tailored to your needs and
          financial goals. For more information,
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline ml-1"
          >
            click here
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How do I create an effective budget?",
      answer: (
        <p>
          Identify your income, list your expenses, prioritise your needs, and
          establish spending limits.
        </p>
      ),
    },
    {
      question: "How can I contact Top Finanzas?",
      answer: (
        <p>
          You can contact us through our online form, email, or phone by
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline ml-1"
          >
            clicking here
          </Link>
          .
        </p>
      ),
    },
    {
      question:
        "What resources does Top Finanzas offer to learn about investments?",
      answer: (
        <p>
          We offer articles, tutorials, and webinars on investments. Learn more
          in our
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            investment section
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How can I improve my credit score?",
      answer: (
        <p>
          Pay your bills on time, reduce your debts, and regularly review your
          credit report.
        </p>
      ),
    },
    {
      question: "What are the best strategies for saving money?",
      answer: (
        <p>
          Automate your savings and regularly review your expenses. Find more
          strategies in our
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            savings article
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer free financial tools?",
      answer: <p>Yes, we offer calculators and other tools on our website.</p>,
    },
    {
      question: "How can I invest my money wisely?",
      answer: (
        <p>
          Research your options and consider speaking with a financial advisor.
          Learn more about
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            investment options
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas have a mobile app?",
      answer: (
        <p>
          We are currently developing an app to enhance the user experience.
        </p>
      ),
    },
    {
      question: "How do I manage credit card debt?",
      answer: (
        <p>
          Make payments above the minimum and consider consolidating your debts.
        </p>
      ),
    },
    {
      question:
        "Does Top Finanzas offer advice on retirement and long-term planning?",
      answer: (
        <p>
          Yes, we provide information and resources for your retirement and
          long-term financial security.
        </p>
      ),
    },
  ];

  // State for testimonial animation
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote:
        "Investing always seemed like something from another world to me, but with Top Finanzas everything changed. I started little by little and now I watch my money grow. I'm even thinking about my retirement! It's incredible how accessible investing is for everyone! Thank you for making it so easy to understand.",
      name: "James Davies",
      location: "Manchester",
      initials: "JD",
    },
    {
      quote:
        "Looking for a loan had me lost among so many options. But with Top Finanzas' help, I not only found one that suited me, but I also learned to manage the terms and my payments. Now I feel super confident with my finances. It was a real game-changer in my financial education!",
      name: "Sarah Wilson",
      location: "London",
      initials: "SW",
    },
    {
      quote:
        "Before, managing my credit cards was a real headache. But wow! I learned with Top Finanzas how to make the most of them. Now I manage my expenses intelligently, and my credit score has even improved. They really opened my eyes to the fact that credit cards are allies in my financial goals. Thank you so much!",
      name: "Robert Mitchell",
      location: "Edinburgh",
      initials: "RM",
    },
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col px-4 sm:px-6 bg-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl bg-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Top Finanzas: Your guide to the world of personal finance
          </h1>

          <div className="mb-12">
            <Image
              src="https://media.topfinanzas.com/images/uk/about-us-uk.webp"
              alt="Top Finanzas UK Team"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>

          <section className="mb-12">
            <p className="text-lg mb-6">
              At Top Finanzas, we firmly believe that good financial management
              is the key to a more fulfilling and peaceful life.
            </p>

            <p className="mb-6">
              We are convinced that effective and responsible financial
              management is not only fundamental for economic stability but also
              essential for achieving a more satisfying and serene life. We
              understand that financial peace of mind is a crucial component of
              overall wellbeing, and we strive to provide you with the tools and
              knowledge necessary to achieve it.
            </p>

            <p className="mb-6">
              Our goal is simple: to provide practical and easy-to-understand
              advice that empowers you financially, regardless of where you are
              in your financial journey.
            </p>

            <p className="mb-6">
              Our approach focuses on breaking down complex financial concepts
              into simple, applicable advice, tailored to different levels of
              financial experience and knowledge. From beginners in personal
              finance to individuals with experience in investments, our
              objective is to offer clear and accessible guidance that
              strengthens your financial autonomy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Commitment
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Quality Information
                  </h3>
                  <p>
                    We commit to providing up-to-date and relevant content,
                    based on the latest trends and data from the financial
                    sector. Our priority is to ensure you have access to
                    accurate and useful information that allows you to make
                    informed decisions.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Community and Support
                  </h3>
                  <p>
                    We are dedicated to building an inclusive and supportive
                    community where you can find guidance and advice at every
                    step of your financial journey. From interactive forums to
                    online events, we aim to create a space for mutual learning
                    and growth.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Tangible Results
                  </h3>
                  <p>
                    Our focus is on helping you see concrete and practical
                    improvements in your money management. Whether you're saving
                    for a specific goal or improving your credit score, we're
                    here to help you achieve tangible and beneficial results.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Empowering Your Financial Decisions
            </h2>

            <p className="mb-6">
              At Top Finanzas, we understand that every step in your financial
              journey is important. Whether you're beginning to organise your
              personal finances or exploring advanced investment strategies, our
              content is meticulously designed to provide you with the
              confidence and knowledge necessary to make prudent financial
              decisions. We accompany you at every stage, from choosing the most
              suitable credit card for your needs to offering strategies for
              planning your retirement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={openFAQs[index] || false}
                  >
                    <h3 className="font-semibold text-lg text-left flex items-center">
                      <span
                        className={`text-green-500 mr-2 transition-transform duration-300 ${
                          openFAQs[index] ? "rotate-90" : ""
                        }`}
                      >
                        ▸
                      </span>
                      {faq.question}
                    </h3>
                    <span className="text-gray-400">
                      {openFAQs[index] ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFAQs[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Testimonials
            </h2>

            <div className="relative overflow-hidden bg-gray-50 rounded-lg shadow p-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : 100,
                    position:
                      activeTestimonial === index ? "relative" : "absolute",
                  }}
                  transition={{ duration: 0.7 }}
                  className={`${
                    activeTestimonial === index ? "block" : "hidden"
                  }`}
                >
                  <p className="italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      {/* Dynamic image/fallback for testimonial authors */}
                      <Image
                        src={`/images/testimonials/${testimonial.name
                          .toLowerCase()
                          .replace(" ", "-")}.jpg`}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image fails to load, show initials as fallback
                          e.currentTarget.style.display = "none";
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.innerHTML = `<span class="text-green-600 font-bold">${testimonial.initials}</span>`;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">
                        {testimonial.name}
                      </p>
                      <p className="text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Testimonial navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } transition-colors duration-300`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
