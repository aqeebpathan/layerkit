import Image from "next/image";

import Key from "@/components/Key";
import Tag from "@/components/Tag";
import Avatar from "@/components/Avatar";
import FeatureCard from "@/components/FeatureCard";

import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";

const Features = () => {
  return (
    <section className="px-4 py-24 md:pt-30" id="features">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>

        <h2 className="mx-auto mt-6 max-w-2xl text-center text-6xl font-medium">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <FeatureCard
            title="Real-time collaboration"
            description="Work seamlessly with conflict-free team editing"
            className="group md:md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>

              <Avatar className="z-30 -ml-6 border-indigo-500">
                <Image src={avatar2} alt="Avatar 1" className="rounded-full" />
              </Avatar>

              <Avatar className="z-20 -ml-6 border-amber-500">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>

              <Avatar className="-ml-6 border-transparent transition group-hover:border-green-500">
                <div className="relative inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 transition group-hover:opacity-100"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex size-1.5 rounded-full bg-white"
                    >
                      {" "}
                    </span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
            className="group md:md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <p className="text-center text-4xl font-extrabold text-white/20 transition duration-500 group-hover:text-white/10">
                We&apos;ve achieved{" "}
                <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <span>incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl opacity-0 shadow-xl transition duration-500 group-hover:opacity-100"
                  />
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you designs more quickly"
            className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="flex aspect-video items-center justify-center gap-4">
              <Key className="w-28 outline-2 outline-offset-4 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                shift
              </Key>
              <Key className="outline-2 outline-offset-4 outline-transparent transition delay-150 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                alt
              </Key>
              <Key className="outline-2 outline-offset-4 outline-transparent transition delay-300 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 transition duration-500 hover:scale-105 md:px-5 md:py-2"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950 transition duration-500 group-hover:rotate-45">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guide",
];

export default Features;
