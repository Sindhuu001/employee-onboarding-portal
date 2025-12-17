import Head from "next/head";

export default function OnboardingWelcome() {
  return (
    <>
      <Head>
        <title>PAVES Onboarding</title>
      </Head>

      <div className="min-h-screen bg-[#e8f1ff] flex items-center justify-center py-12 px-4">

        {/* MAIN CARD */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">

          {/* ================= LEFT IMAGE SIDE ================= */}
          <div className="relative h-[320px] md:h-auto">
            <img
              src="/images/culture1.png"
              alt="PAVES Culture"
              className="w-full h-full object-cover"
            />

            {/* Blue bottom curve */}
            <svg
              className="absolute bottom-0 left-0 w-full h-20"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M-9.31,84.27 C150.00,150.00 349.20,0.00 512.39,104.16 L500.00,0.00 L0.00,0.00 Z"
                fill="#2b63f1"
              ></path>
            </svg>
          </div>

          {/* ================= RIGHT CONTENT AREA ================= */}
          <div className="relative bg-white p-10 md:p-12 flex flex-col justify-center">

            {/* Curved top shape */}
            <div className="absolute right-0 top-0">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <path
                  d="M0 0 H120 V60 C80 80 40 40 0 60 Z"
                  fill="#2b63f1"
                  opacity="0.8"
                />
              </svg>
            </div>

            <p className="text-gray-500 text-sm mb-2">PAVES Corporation</p>

            {/* FORMAL HEADING */}
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 mb-4">
              Introduction to the <span className="text-[#2b63f1]">Onboarding Portal</span>
            </h1>

            {/* FORMAL TEXT */}
            <p className="text-gray-600 leading-relaxed mb-4">
              We appreciate your interest in progressing with PAVES.  
              This portal has been designed to provide you with essential information and a structured overview of the
              forthcoming onboarding activities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Here, you will find details regarding our organizational culture, expectations, and the steps required to
              complete your pre-joining formalities.  
              Our objective is to ensure a clear, smooth, and professional onboarding experience as you move toward the
              next stage of engagement with PAVES.
            </p>

            {/* CTA BUTTON */}
            <button className="mt-8 flex items-center gap-3 bg-[#2b63f1] hover:bg-[#1e49b3] text-white font-medium px-6 py-3 rounded-xl shadow-md transition">
              Proceed
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
