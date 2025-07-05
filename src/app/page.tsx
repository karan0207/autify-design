'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import SubscriptionCard from "@/components/global/subscription-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  return (
    <main className="flex items-center justify-center flex-col overflow-hidden">
      <Navbar />
      <section className="min-h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased overflow-visible">
        <div className="absolute inset-0 h-full w-full flex items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>

        {/* Container Scroll Section */}
        <div className="flex flex-col mt-[-60px] md:mt-[-50px] w-full px-2 sm:px-4">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col text-center mt-10 md:mt-0 w-full">
                <Button
                  size="lg"
                  className="w-full max-w-xs sm:max-w-fit p-4 sm:p-8 mb-6 sm:mb-8 text-lg sm:text-2xl rounded-full border-t-2 border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Get Started
                  </span>
                </Button>
                <h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-8xl font-sans font-extrabold tracking-tight leading-tight
                    bg-clip-text text-transparent
                    bg-gradient-to-br from-white via-[#a18cd1] to-[#2d006e]
                    drop-shadow-[0_4px_32px_rgba(80,0,120,0.35)]
                    animate-gradient-move"
                  style={{
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left center'
                  }}
                >
                  Automate Your Work With Autify
                </h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-2xl text-neutral-300 font-medium animate-fade-in delay-200 px-2 sm:px-0">
                  The easiest way to streamline your business and boost productivity.
                </p>
              </div>
            }
          >
            {/* Responsive Image */}
            <div className="w-full flex justify-center items-center mt-6">
              {isMobile ? (
                <Image
                  src="/main.jpeg"
                  width={400}
                  height={250}
                  alt="bannerImage"
                  className="object-cover border-4 rounded-2xl overflow-hidden w-full max-w-[95vw] h-full"
                />
              ) : (
                <Image
                  src="/main.jpeg"
                  width={1000}
                  height={1000}
                  alt="bannerImage"
                  className="object-cover border-8 rounded-2xl overflow-hidden"
                />
              )}
            </div>
          </ContainerScroll>
        </div>

        {/* Infinite Moving Cards for Mobile */}
        {/* <div className="w-full border border-white z-50 flex flex-col justify-center items-center h-full">
          {isMobile ? (
            <InfiniteMovingCards
              className="md:mt-[18rem] mt-[-100px] w-full"
              items={clients}
              direction="right"
              speed="slow"
            />
          ) : (
            <InfiniteMovingCards
              className="md:mt-[18rem] mt-[-100px] w-full"
              items={clients}
              direction="right"
              speed="slow"
            />
          )}
        </div> */}
      </section>

      {/* Infinite Moving Cards for Desktop */}

      {/* Hero Parallax Section */}
      <section className="w-full">
        <HeroParallax products={products} />
      </section>

      {/* Lamp and Subscription Section */}
      <section id="pricing" className="mt-[-500px] px-4 py-12 w-full flex flex-col items-center">
        <LampComponent />
        <SubscriptionCard />
      </section>
    </main>
  );
}
