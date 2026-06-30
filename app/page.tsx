"use client";

import Image from "next/image";
import FadeIn from "./components/FadeIn";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-8 text-center">

        {/* Mascot - Left */}
        <div className="absolute top-10 left-10">
          <Image
            src="/images/mascot.png"
            alt="Mascot"
            width={140}
            height={140}
            className="rounded-full h-auto"
          />
        </div>

        {/* Logo - Right */}
        <div className="absolute top-10 right-10">
          <Image
            src="/images/logo.png"
            alt="Tugs Logo"
            width={140}
            height={140}
            className="w-auto h-auto"
          />
        </div>

        <FadeIn>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Experimental storytelling
            <br />
            for brands that want attention
          </h1>

          <p className="mt-8 text-gray-400 text-lg">
            Films • Digital Growth • Campaign Experiences
          </p>

          <div className="flex gap-5 mt-10 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium">
              View Work
            </button>

            <button className="border border-white px-8 py-4 rounded-full">
              Start Project
            </button>
          </div>
        </FadeIn>

      </section>

      {/* TUGS FILMS WORK */}
      <FadeIn>
<section className="py-32 px-8">

  <h2 className="text-5xl font-bold text-center mb-16">
    Tugs Films Work
  </h2>

  <div className="max-w-6xl mx-auto space-y-8">

    <div className="bg-zinc-900 rounded-3xl overflow-hidden group hover:scale-[1.02] transition duration-500">

      <div className="grid md:grid-cols-2">

        <div className="p-10 flex flex-col justify-center">

          <p className="text-sm text-gray-500 uppercase">
            Brand Storytelling
          </p>

          <h3 className="text-4xl font-bold mt-3">
            Swarnkala
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            Visual storytelling and content built around
            brand identity and audience engagement.
          </p>

        </div>

        <div className="bg-black min-h-[300px] flex items-center justify-center">

          <span className="text-gray-600">
            Project Visual
          </span>

        </div>

      </div>

    </div>

    <div className="bg-zinc-900 rounded-3xl overflow-hidden group hover:scale-[1.02] transition duration-500">

      <div className="grid md:grid-cols-2">

        <div className="p-10 flex flex-col justify-center">

          <p className="text-sm text-gray-500 uppercase">
            Healthcare Brand
          </p>

          <h3 className="text-4xl font-bold mt-3">
            HealthNest
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            Content strategy and campaign execution
            focused on healthcare storytelling.
          </p>

        </div>

        <div className="bg-black min-h-[300px] flex items-center justify-center">

          <span className="text-gray-600">
            Project Visual
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
</FadeIn>

      {/* INDEPENDENT WORK */}
      <FadeIn>
        <section className="py-32 px-8 bg-zinc-950">

          <h2 className="text-5xl font-bold text-center mb-16">
            Independent Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-black border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Experimental Films
              </h3>

              <p className="text-gray-400 mt-4">
                Visual experiments and storytelling projects.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Music Videos
              </h3>

              <p className="text-gray-400 mt-4">
                Independent creative direction and edits.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">
                Creative Concepts
              </h3>

              <p className="text-gray-400 mt-4">
                Story-driven visual ideas and experiments.
              </p>
            </div>

          </div>

        </section>
      </FadeIn>

      {/* CONTACT */}
      <FadeIn>
        <section className="py-32 px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-5xl font-bold">
              Let's build something memorable
            </h2>

            <p className="text-gray-400 mt-8 text-xl">
              Films • Social Media • Creative Direction
            </p>

            <div className="mt-10 text-lg">

              <p>
                📩 hello.tugsfilms@gmail.com
              </p>

              <p className="mt-4">
                📱 +91 9405688999
              </p>

            </div>

          </div>

        </section>
      </FadeIn>

    </main>
  );
}