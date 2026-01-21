import React, { useEffect } from "react";
import gsap from "gsap";

import Men from "../assets/images/sections/whychoose/whychoose-main.png"
import IconWC1 from "../assets/images/sections/whychoose/icone-wc-1.png";
import IconWC2 from "../assets/images/sections/whychoose/icone-wc-2.png";
import IconWC3 from "../assets/images/sections/whychoose/icone-wc-3.png";

import MenBg from "../assets/images/sections/whychoose/men-bg.png"

function WhyChooseSection() {
    useEffect(() => {
        const mm = gsap.matchMedia();

        gsap.set(".word", { x: 0, y: 0, opacity: 0 });
        gsap.set(".men-image", { scale: 1 });

        /* ================= MOBILE ================= */
        mm.add("(max-width: 639px)", () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(".word-1", { opacity: 1, x: -120, y: -40, duration: 1 })
                .to(".men-image", { scale: 1.05, duration: 1 }, "<")
                .to(".word-2", { opacity: 1, x: -180, y: 20, duration: 1 })
                .to(".men-image", { scale: 1.08, duration: 1 }, "<")
                .to(".word-3", { opacity: 1, x: 80, y: -30, duration: 1 })
                .to(".men-image", { scale: 1.1, duration: 1 }, "<")
                .to(".word-4", { opacity: 1, x: -190, y: 150, duration: 1 })
                .to(".men-image", { scale: 1.12, duration: 1 }, "<")
                .to(".word-5", { opacity: 1, x: 90, y: 150, duration: 1 })
                .to(".men-image", { scale: 1.15, duration: 1 }, "<")
                .to(".word", { opacity: 0, x: 0, y: 0, duration: 1 })
                .to(".men-image", { scale: 1, duration: 1.5 }, "<");
        });

        mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(".word-1", { opacity: 1, x: -130, y: -70, duration: 1.1 })
                .to(".men-image", { scale: 1.05, duration: 1 }, "<")
                .to(".word-2", { opacity: 1, x: -200, y: 30, duration: 1.1 })
                .to(".men-image", { scale: 1.1, duration: 1 }, "<")
                .to(".word-3", { opacity: 1, x: 80, y: -40, duration: 1.1 })
                .to(".men-image", { scale: 1.15, duration: 1 }, "<")
                .to(".word-4", { opacity: 1, x: -220, y: 140, duration: 1.1 })
                .to(".men-image", { scale: 1.18, duration: 1 }, "<")
                .to(".word-5", { opacity: 1, x: 90, y: 150, duration: 1.1 })
                .to(".men-image", { scale: 1.2, duration: 1 }, "<")
                .to(".word", { opacity: 0, x: 0, y: 0, duration: 1.3 })
                .to(".men-image", { scale: 1, duration: 2 }, "<");
        });

        mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(".word-1", { opacity: 1, x: -170, y: -70, duration: 1.1 })
                .to(".men-image", { scale: 1.05, duration: 1 }, "<")
                .to(".word-2", { opacity: 1, x: -250, y: 30, duration: 1.1 })
                .to(".men-image", { scale: 1.1, duration: 1 }, "<")
                .to(".word-3", { opacity: 1, x: 80, y: -40, duration: 1.1 })
                .to(".men-image", { scale: 1.15, duration: 1 }, "<")
                .to(".word-4", { opacity: 1, x: -280, y: 140, duration: 1.1 })
                .to(".men-image", { scale: 1.18, duration: 1 }, "<")
                .to(".word-5", { opacity: 1, x: 90, y: 150, duration: 1.1 })
                .to(".men-image", { scale: 1.2, duration: 1 }, "<")
                .to(".word", { opacity: 0, x: 0, y: 0, duration: 1.3 })
                .to(".men-image", { scale: 1, duration: 2 }, "<");
        });

        mm.add("(min-width: 1280px)", () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(".word-1", { opacity: 1, x: -220, y: -120, duration: 1.2 })
                .to(".men-image", { scale: 1.05, duration: 1 }, "<")
                .to(".word-2", { opacity: 1, x: -360, y: 20, duration: 1.2 })
                .to(".men-image", { scale: 1.1, duration: 1 }, "<")
                .to(".word-3", { opacity: 1, x: 100, y: -60, duration: 1.2 })
                .to(".men-image", { scale: 1.15, duration: 1 }, "<")
                .to(".word-4", { opacity: 1, x: -410, y: 180, duration: 1.2 })
                .to(".men-image", { scale: 1.2, duration: 1 }, "<")
                .to(".word-5", { opacity: 1, x: 120, y: 190, duration: 1.2 })
                .to(".men-image", { scale: 1.25, duration: 1 }, "<")
                .to(".word", { opacity: 0, x: 0, y: 0, duration: 1.5 })
                .to(".men-image", { scale: 1, duration: 2.5 }, "<");
        });

        return () => mm.revert();
    }, []);

    return (
        <section data-theme="light" className="bg-bg border px-6 xl:px-30 py-25 xl:max-h-145.75">
            <div className="flex flex-col md:flex-row items-center">

                {/* LEFT CONTENT */}
                <div className="w-full xl:w-1/2">
                    <span className="bg-linear-to-r from-[#FB6557] to-[#FE9139] bg-clip-text text-transparent text-sm">
                        WHY CHOOSE TECHNODHA
                    </span>

                    <h1 className="text-[#1a1a1f] mt-2 text-[24px] sm:text-[28px] xl:text-[32px] font-semibold">
                        Built for <span className="italic text-[#FB6557]">Scale</span>{" "}
                        Designed for <span className="italic text-[#FE9139] font-medium">Growth.</span>
                    </h1>

                    <p className="mt-4 text-sm sm:text-base text-[#5f5f6b] max-w-xl font-justify">
                        We design and build reliable, scalable digital solutions that help businesses move faster, adapt to change, and grow confidently in an evolving digital landscape.
                    </p>

                    <div className="mt-6 space-y-5">
                        {[
                            [IconWC1, "Startup-First Mindset", "We design with speed and flexibility."],
                            [IconWC2, "Scalable Architecture", "Built to scale smoothly."],
                            [IconWC3, "Clean Code", "Readable, future-ready code."],
                        ]
                            .map(([img, title, desc], i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-b from-[#FB655733] to-[#FE913933] flex">
                                        <img
                                            src={img}
                                            alt={title}
                                            className="w-6 h-6 m-auto"
                                        />

                                    </div>
                                    <div>
                                        <p className="font-medium text-[14px] leading-5 tracking-[0.006em] text-[#1A1A1F]">
                                            {title}
                                        </p>
                                        <p className="tabel-support font-normal text-[13px] text-[#5f5f6b]">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full xl:w-1/2 flex justify-center relative overflow-visible">
                    <div className="relative flex justify-center items-center">

                        <img
                            src={MenBg}
                            alt=""
                            aria-hidden="true"
                            className="
                absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2

                /* Size control */
                w-[140%] sm:w-[150%] md:w-[160%] lg:w-[170%] xl:w-[180%]

                /* Visual tuning */
                opacity-80
                z-0
                pointer-events-none
            "
                        />

                        {/*  WORDS */}
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
                            {["Growth", "Reliability", "Speed", "Performance", "Stability"].map((word, i) => (
                                <span
                                    key={word}
                                    className={`word word-${i + 1} text-gradient font-black text-[16px] xl:text-[43px]`}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>

                        {/* MEN IMAGE */}
                        <img
                            src={Men}
                            alt="Illustration"
                            className="
                men-image
                relative
                z-20

                /* Responsive sizes */
                w-52 h-64
                sm:w-56 sm:h-70
                md:w-60 md:h-75
                xl:w-76.75 xl:h-96
            "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default React.memo(WhyChooseSection);
