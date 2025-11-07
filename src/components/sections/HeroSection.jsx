import React from "react";
import { useTheme } from "../../context/ThemeContext";
import BadgeTag from "../ui/BadgeTag";

const HeroSection = () => {
  const { theme } = useTheme();

  // Define the classes dynamically
  const bgImageClass = theme === 'dark' ? 'bg-hero-dark' : 'bg-hero-light';

  return (
    <section 
      id="home"
      className={`
        relative w-full h-auto md:h-[100vh] 
        flex items-center justify-center 
        pt-32 lg:pt-36 pb-16 
        bg-no-repeat bg-center bg-cover ${bgImageClass}
      `}
    >
      
      {/* 🚀 Main Content Wrapper (Grid Layout) */}
      <div className={`
        w-full h-full max-w-7xl 
        grid grid-cols-1 md:grid-cols-2 
        gap-12 md:gap-24 
        items-center justify-center 
        px-4 sm:px-6 lg:px-8 
        bg-transparent
      `}>        

        {/* === COLUMN 2: Video with Caption === */}
        <div className="
          relative 
          max-w-md w-full 
          mx-auto 
          order-1 md:order-2
          flex flex-col items-center justify-center       /* Changed to flex-col to stack video and caption */
        ">
          
          {/* Video Wrapper: Circular Container (Uncropped Video) */}
          <div className="
            relative w-full
            pb-[100%] 
            rounded-2xl md:rounded-full overflow-hidden 
            bg-support-muted/10 dark:bg-neutral-light/10
            
            border-[1px] md:border-[6px] 
            border-accent-primary/10 dark:border-accent-secondary/10 
            md:shadow-2xl shadow-accent-primary/50 
            
            md:bg-neutral-light/70 dark:md:bg-neutral-light/70
          ">
            {/* Story Video */}
            <video
              className="
                absolute inset-0 w-full h-full
                object-contain opacity-70                            
              "
              src="/assets/brand-assets/videos/AM-Video-Story-Behind-Rectangle.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* 📝 Video Caption / Text */}
          <div className="
            mt-4                                      /* Top margin for spacing */
            text-center 
            text-lg
            text-accent-primary dark:text-accent-secondary
            backdrop-blur-sm p-2 rounded-lg         /* Optional styling for emphasis */
            border border-dashed border-accent-secondary/30
          ">
            <span className="font-extrabold">The Arc's Origin:</span>
            <span className="font-normal"> Witness the transformation of data into design, and my personal journey.</span>
          </div>
        </div>


        {/* === COLUMN 1: Content Block (Text) === */}
        {/* ... (Content from Column 1 remains here) ... */}
        <div className="
          relative z-10 
          text-center md:text-left 
          order-2 md:order-1 
          fade-in 
          bg-transparent
        ">
          <BadgeTag badgeLabel=" ⃝✔ Open for opportunities" />
          <h1 className="
            text-5xl md:text-7xl lg:text-8xl 
            font-heading font-extrabold mb-4 
            transition-colors duration-500
          ">
            Animesh Maity
          </h1>
          <h2 className="
            text-xl md:text-3xl font-heading font-semibold mb-6 
            transition-colors duration-500
          ">
            Creative Insights Analyst
          </h2>
          
          <p className="
            text-lg md:text-2xl font-heading mb-2
          ">
            The Ani-Lytic Arc: Where Data Meets Design
          </p>
          <p className="
            text-md md:text-md font-body
            max-w-none text-center md:text-left
          ">
            I transform complex data into compelling visual stories. Explore the journey of analysis and design—a fusion that drives meaningful creative insights.
          </p>

          <button
            className="btn-primary mt-8"
            onClick={() => document.querySelector("#featured-projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            See My Recent Work
          </button>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;