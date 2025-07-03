import yukataPhoto from "../assets/me-in-yukata.jpg";
import asakusa from "../assets/sensoji.jpg";
import skytree from "../assets/skytree.jpg";

function About() {
  return (
    <div className="flex h-full flex-col gap-6 px-3 py-4 2xl:grid 2xl:grid-cols-3 2xl:grid-rows-5 2xl:px-0 2xl:py-0">
      <h1 className="place-self-center text-3xl font-semibold lg:text-5xl">
        About Me
      </h1>

      <section className="flex-col place-self-center px-2 py-1 text-center 2xl:col-span-1 2xl:row-start-2">
        <h2 className="text-2xl lg:text-3xl">🧠 Language Learning!</h2>
        <p className="px-5">
          During some parts of my free-time, I engage in some sort of Japanese
          learning. I love the journey of leveling up and learning something
          new, just like in coding!
        </p>
      </section>
      <section className="flex-col place-self-center text-center 2xl:col-span-1 2xl:row-start-3">
        <h2 className="text-2xl lg:text-3xl">🧗‍♂️ Bouldering!</h2>
        <p className="px-5">
          I have only been bouldering once, but I love watching YouTube videos
          about it! Seeing how people of different skill levels and techniques
          can come up with a solution to a problem is extremely eye-opening.
        </p>
      </section>
      <section className="flex-col place-self-center text-center 2xl:col-span-1 2xl:row-start-4">
        <h2 className="text-2xl lg:text-3xl">✈️ Traveling!</h2>
        <p className="px-5">
          Being completely immersed in a new culture and exploring unknowns is
          gratifying. Not only do I learn more about the culture, but I learn a
          little bit more about myself.
        </p>
      </section>
      <section className="flex-col place-self-center text-center 2xl:col-span-1 2xl:row-start-5">
        <h2 className="text-2xl lg:text-3xl">📺 TV Shows!</h2>
        <p className="px-5">
          Some of my favorites are The Pitt and ER! Medical shows give that
          sense of urgency while also catering to the needs of the people!
        </p>
      </section>

      <section className="relative mx-auto hidden place-items-center md:flex 2xl:col-span-2 2xl:col-start-2 2xl:row-span-5">
        <div className="flex">
          {/* Straight card */}
          <div className="relative z-100 h-[245px] w-[225px] rounded-md border-2 bg-white transition-all duration-300 hover:z-1000 hover:scale-115 hover:shadow-[6px_6px_5px_rgba(0,0,0,.20)] lg:h-[310px] lg:w-[275px]">
            <div className="absolute top-4 left-4 h-[185px] w-[190px] lg:h-[220px] lg:w-[240px]">
              <img
                className="h-full w-full object-cover"
                src={skytree}
                alt="Photo of an alleyway that highlights the beauty of SkyTree at night"
              />
              <p className="mt-2 text-center font-medium">SkyTree</p>
            </div>
          </div>
          {/* Tilted card behind all */}
          <div className="absolute left-47 h-[245px] w-[225px] translate-y-10 rotate-z-20 rounded-md border-2 bg-white transition-all duration-300 hover:z-1000 hover:scale-115 hover:shadow-[6px_6px_5px_rgba(0,0,0,.20)] lg:h-[310px] lg:w-[275px]">
            <div className="absolute top-4 left-4 h-[185px] w-[190px] lg:h-[220px] lg:w-[240px]">
              <img
                className="h-full w-full object-cover"
                src={yukataPhoto}
                alt="Photo of me in a Yukata at an onsen"
              />
              <p className="mt-2 text-center font-medium">Me in a yukata</p>
            </div>
          </div>
          {/* Tilted card in the front */}
          <div className="absolute -left-47 h-[245px] w-[225px] translate-y-10 -rotate-z-20 rounded-md border-2 bg-white transition-all duration-300 hover:z-1000 hover:scale-115 hover:shadow-[6px_6px_5px_rgba(0,0,0,.20)] lg:h-[310px] lg:w-[275px]">
            <div className="absolute top-4 left-4 h-[185px] w-[190px] lg:h-[220px] lg:w-[240px]">
              <img
                className="h-full w-full object-cover"
                src={asakusa}
                alt="Picture of Sensoji Temple in Asakusa"
              />
              <p className="mt-2 text-center font-medium">
                Sensoji Temple in Asakusa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default About;
