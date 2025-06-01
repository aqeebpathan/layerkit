"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";

import apexLogo from "@/assets/images/apex.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import twiceLogo from "@/assets/images/twice.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import outsideLogo from "@/assets/images/outside.svg";
import quantumLogo from "@/assets/images/quantum.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";

const LogoTicker = () => {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50">
          Already chosen by these market leaders
        </h3>

        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default LogoTicker;
