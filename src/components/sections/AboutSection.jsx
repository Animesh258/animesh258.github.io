import React from "react";
import { navigateToResume } from "../../configs/staticConfigs";
import BadgeTag from "../ui/BadgeTag";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-container pt-36 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="flex flex-col md:flex-row items-start gap-12">
        
        {/* === Profile Image === */}
        <div className="flex-shrink-0 mx-auto md:mx-0 md:top-36 self-start static md:sticky">
          <img
            src="/assets/images/AM-Profile-Picture-Animesh-Maity.jpg"
            alt="Animesh Maity"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-accent-secondary"
          />
        </div>

        {/* === Content === */}
        <div className="flex-1 space-y-12">
          {/* === Title Block === */}
          <div>
            <h2 className="text-4xl font-heading mb-4">
              <span className="text-[var(--color-text-primary)]">
                About Me:
              </span>{" "}
              The Analyst and The Arc
            </h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-3xl">
              My journey is one of <span className="font-semibold">metamorphosis</span> — a
              transformation fueled by curiosity, creativity, and data. Through
              my work, I aim to find beauty in logic and emotion in insight.
            </p>
          </div>

          {/* === 1. My Transformation, Skills, and Next Step === */}
          <div className="p-8 rounded-2xl shadow-md bg-[var(--color-bg-primary)] border border-accent-primary/20">
            <h3 className="text-2xl font-heading mb-4">
              My Transformation, Skills, and Next Step
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              My professional path has been defined by <strong>evolution</strong> — from
              creative storytelling to uncovering the patterns that shape those
              stories. While I come from a non-technical background, I am now
              immersed in the analytical craft, driven by one belief:
              <br />
              <span className="italic font-semibold">
                “Data is not a report; it is a blueprint for design.”
              </span>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I aspire to grow as a <strong>Data Analyst</strong> who brings both
              analytical precision and visual empathy to the table — crafting
              insights that are not just accurate, but also meaningful and
              actionable.
            </p>

            {/* Skills List */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Visual Storytelling & Reporting
                </h4>
                <p className="text-md">
                  Crafting intuitive dashboards using <strong>Power BI</strong> and{" "}
                  <strong>Excel</strong> to turn metrics into clarity.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Data Exploration & Design
                </h4>
                <p className="text-md">
                  Using design thinking to make data <strong>emotionally resonant</strong> and
                  logically structured.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Foundational Analytics
                </h4>
                <p className="text-md">
                  Hands-on with <strong>Data Cleaning</strong>, <strong>SQL</strong>, and{" "}
                  <strong>Python</strong> for structured insights.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                className="btn-primary text-lg px-8 py-3"
                onClick={navigateToResume}
              >
                Download Full CV
              </button>
            </div>
          </div>

          {/* === 2. The Ani-Lytic Arc: Vision & Relevance === */}
          <div className="p-8 rounded-2xl border-l-4 border-accent-secondary bg-[var(--color-bg-primary)] shadow-sm">
            <h3 className="text-2xl font-heading mb-4">
              The Ani-Lytic Arc: My Vision and Relevance
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              <strong>My Essence:</strong> The Ani-Lytic Arc represents the harmony
              between <strong>logic and aesthetics</strong> — where analytical depth meets
              creative intuition. It’s a personal philosophy that celebrates
              insight as a form of art.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  The Name
                </h4>
                <ul className="list-disc pl-5 text-md space-y-1">
                  <li>
                    <strong>“Ani-Lytic”</strong> — merges my identity with my process.
                  </li>
                  <li>
                    <strong>“Arc”</strong> — symbolizes progress, elevation, and continuous
                    metamorphosis.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  My Vision
                </h4>
                <p className="text-md">
                  To bridge the gap between <strong>information</strong> and{" "}
                  <strong>inspiration</strong>, transforming complex data into stories that
                  drive understanding and action.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              <strong>My Design Philosophy:</strong> Every visual I create balances{" "}
              <strong>consistency and adaptability</strong> — structured enough to be
              trusted, yet flexible enough to fit any business or client context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
