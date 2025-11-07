import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { BiRun } from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
import TechIcon from "../components/ui/TechIcon";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-6 lg:px-16 gap-10 fade-in">

      {/* Left Content Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 space-y-8 text-center">

        {/* Title Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            A Disagreement Led to This…
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-text-primary)]">
            ( Where Data Meets Design — but not always peacefully 🫣 )
          </p>
          <p className="text-sm sm:text-base text-support-warning font-bold mt-4">
            404 Error: Page Not Found 
            <Link href="/"> ↩ Return Home <FaHome className="mr-2 w-4 h-4 inline-block" /></Link>
          </p>
          
        </div>

        {/* Text Illustration */}
        <div className="justify-center">
          <img
            src="/assets/images/ui-illustrations/AM-Error-404-Illustration-text.svg"
            alt="404 description text"
            className="w-full max-w-md lg:max-w-xl select-none"
          />
        </div>

        {/* CTA Section */}
        <section className="w-full flex flex-col items-center space-y-6">

          {/* Prompt */}
          <p className="max-w-lg text-base sm:text-lg text-neutral-light leading-relaxed text-center border px-6 py-4 rounded-xl bg-accent-primary">
            While they argue... What do you want to do next?
          </p>

          {/* Options A & B (side-by-side in large screens) */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            {/* Option A */}
            <div className="space-y-2">
              
              <Link
                href="/projects"
                className="btn-outline px-4 py-2 flex items-center justify-center text-md"
              >
                A. 
                <FaArrowLeft className="mx-2" /> 
                <FaMagnifyingGlassChart className="mr-2" /> Projects
              </Link>
              <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">
                ← 🚶 Follow the Analyst
              </p>
            </div>

            {/* Option B */}
            <div className="space-y-2">
              <Link
                href="/blogs"
                className="btn-outline px-4 py-2 flex items-center justify-center text-md"
              >
                B. 
                <TbBulbFilled className="mx-2" /> Insights <FaArrowRight className="ml-2" />
              </Link>
              <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">
                Follow the Designer 🤸 →
              </p>
            </div>
          </div>

          {/* Option C (Always below) */}
          <div className="space-y-2 text-center">
            <Link
              href="/"
              className="btn-outline px-4 py-2 flex items-center justify-center text-md"
            >
              C. 
              Run <BiRun className="mx-2 w-4 h-4"/> <FaHome className="mr-2 w-4 h-4" /> Home
            </Link>
            <p className="text-xs text-[var(--color-text-primary)] flex items-center justify-center ml-2">
              Before They Argue More <AiFillAlert className="ml-2 w-4 h-4 text-support-warning"/>
            </p>
          </div>
        </section>
      </div>

      {/* Right Illustration (Main Disagreement Graphic) */}
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src="/assets/images/ui-illustrations/AM-Error-404-Illustration.svg"
          alt="Analyst and Designer disagreement illustration"
          className="w-full max-w-sm sm:max-w-2xl select-none"
        />
      </div>

    </main>
  );
};

export default NotFoundPage;
