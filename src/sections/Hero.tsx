"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";

import cursorYouImage from "@/assets/images/cursor-you.svg";
import designExampleImage1 from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    // left design animation
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // right design aniamtion
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <section
      className="overflow-x-clip px-4 py-24"
      id="#home"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="relative container mx-auto">
        {/* left design */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute top-16 -left-32 hidden lg:block"
        >
          <Image
            src={designExampleImage1}
            alt="Design example 1 image"
            draggable="false"
          />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Andrew" />
        </motion.div>

        {/* right design */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -top-16 -right-64 hidden lg:block"
        >
          <Image
            src={designExampleImage2}
            alt="Design example 2 image"
            draggable="false"
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>

        {/* hero content */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 text-[14px] font-semibold text-neutral-950">
            <span className="-ml-1">✨ $7.5M Seed Round Raised</span>
          </div>
        </div>
        <h1 className="mx-auto mt-8 max-w-5xl text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Design magic, made real in moments
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design apps shouldn’t interrupt progress. Layerkit packs advanced
          features in a clean layout that fuels your creativity from idea to
          output
        </p>
        <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 bg-transparent px-4 outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
