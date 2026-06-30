"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between">

        <h1 className="font-bold">
          TUGS FILMS
        </h1>

        <div className="flex gap-8">

          <a href="#work">Work</a>
          <a href="#independent">Independent</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  );
}