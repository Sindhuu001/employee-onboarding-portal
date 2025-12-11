import Head from "next/head";

export default function OnboardingWelcome() {
  return (
    <>
      <Head>
        <title>PAVES Onboarding</title>
        <meta name="description" content="Welcome to PAVES onboarding portal" />
      </Head>

      <div className="min-h-screen w-full bg-white">
        {/* HERO */}
        <section className="relative w-full h-[56vh] md:h-[60vh] lg:h-[64vh] flex items-center justify-center overflow-hidden">
          {/* Background image (place your hero image in public/onboarding-hero.jpg) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/onboarding-hero.jpg')",
            }}
            aria-hidden="true"
          />

          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#0f3b68] bg-opacity-85"></div>

          {/* Optional Logo top-left */}
          <div className="absolute top-6 left-6 z-10">
            <img src="/logo.svg" alt="PAVES logo" className="w-10 h-10" />
          </div>

          {/* Welcome Text */}
          <h1
            className="relative z-10 text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center"
            aria-label="Welcome to PAVES"
          >
            Welcome!
          </h1>
        </section>

        {/* CONTENT */}
        <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20">
          {/* Left decorative SVGs */}
          <div className="pointer-events-none absolute left-6 top-10 md:left-12 md:top-20 z-0">
            {/* stacked geometric SVG group */}
            <svg width="120" height="320" viewBox="0 0 120 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
              {/* top small triangle */}
              <polygon points="30,10 60,40 0,40" fill="#FF6B61" />
              {/* semicircle */}
              <path d="M90 70 A30 30 0 0 1 30 70 L90 70 Z" fill="#FFC857" />
              {/* teal rounded square with circle cutout */}
              <rect x="0" y="90" width="80" height="80" rx="18" fill="#2AD1C6" />
              <circle cx="30" cy="130" r="18" fill="#ffffff" />
              {/* diagonal orange bar */}
              <rect x="30" y="190" width="80" height="24" rx="6" transform="rotate(-20 30 190)" fill="#FF8A4C" />
              {/* grey circle bottom */}
              <circle cx="30" cy="280" r="24" fill="#DDDDDD" />
            </svg>
          </div>

          {/* Right decorative SVGs */}
          <div className="pointer-events-none absolute right-6 top-10 md:right-12 md:top-20 z-0">
            <svg width="140" height="320" viewBox="0 0 140 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* top quarter circle */}
              <path d="M140 0 A40 40 0 0 0 100 40 L140 40 Z" fill="#E6E6E6" />
              {/* orange semicircle */}
              <path d="M140 60 A30 30 0 0 0 80 60 L140 60 Z" fill="#FF8A4C" />
              {/* small red arc */}
              <path d="M110 120 A18 18 0 0 0 74 120 L110 120 Z" fill="#FF6B61" />
              {/* orange slanted bar */}
              <rect x="10" y="170" width="90" height="26" rx="6" transform="rotate(20 10 170)" fill="#FFB04C" />
              {/* grey circle bottom */}
              <circle cx="100" cy="280" r="30" fill="#E9E9E9" />
            </svg>
          </div>

          {/* Main centered text */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              Welcome to the Company! Where innovation meets excellence. Thrilled to have you on board for a journey of success
              together!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
