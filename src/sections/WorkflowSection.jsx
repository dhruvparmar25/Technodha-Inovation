import React from "react";

import CheckIcon from "../assets/images/sections/workflow/check.png";
import LightIcon from "../assets/images/sections/workflow/icon-light.png";
import DesignIcon from "../assets/images/sections/workflow/icon-design.png";
import CodeIcon from "../assets/images/sections/workflow/code.png";
import RocketIcon from "../assets/images/sections/workflow/rocket.png";

const workflowSteps = [
    {
        title: "Requirement Gathering",
        description: "We understand goals, users, scope, and project needs clearly.",
        icon: CheckIcon,
    },
    {
        title: "Ideation",
        description: "We brainstorm solutions, structure flows, and plan the best approach.",
        icon: LightIcon,
    },
    {
        title: "Design",
        description: "We design clean screens, smooth journeys, and consistent UI systems.",
        icon: DesignIcon,
    },
    {
        title: "Development",
        description: "We build scalable, secure, and performance-ready solutions.",
        icon: CodeIcon,
    },
    {
        title: "Launch",
        description: "We deploy, test final checks, and make everything live smoothly.",
        icon: RocketIcon,
    },
];

function WorkflowSection() {
    return (
        <section className="px-6 xl:px-30 py-20">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="bg-linear-to-r from-[#FB6557] to-[#FE9139] bg-clip-text text-transparent text-sm font-medium">
                    FROM BRIEF TO BUILD
                </span>

                <h2 className="heading-primary mt-2">
                    A <span className="italic text-[#FB6557]">workflow</span> that turns clarity
                    into <span className="italic text-[#FE9139]">scalable</span> code
                </h2>

                <p className="text-support mt-3 max-w-2xl mx-auto">
                    We align early, design with purpose, and ship with confidence—so every phase
                    creates visible progress.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-7xl mx-auto">
                {/* dashed line (desktop only) */}
                <div className="hidden lg:block absolute top-56.25 left-0 w-full border-t-2 border-dashed border-orange-200" />

                <div
                    className="
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-5 
                        gap-12
                    "
                >
                    {workflowSteps.map((step) => (
                        <div
                            key={step.title}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-40 h-40 rounded-full border-2 border-(--light-color-border) bg-white flex items-center justify-center">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-17.5 h-17.5 animate-scale"
                                    loading="lazy"
                                />
                            </div>

                            <div className="w-0.5 h-10 bg-(--light-color-border) hidden lg:block" />

                            <div className="relative w-12.5 h-12.5 bg-(--light-color-primary) rounded-full hidden lg:flex items-center justify-center mb-4">
                                <div className="absolute w-7.5 h-7.5 bg-(--light-color-secondary) rounded-full"></div>
                                <div className="absolute w-5 h-5 bg-white rounded-full"></div>
                            </div>

                            <h3 className="text-base font-medium text-[#1A1A1F] mb-2">
                                {step.title}
                            </h3>
                            <p className="text-[12px] font-normal text-[#5F5F6B] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default React.memo(WorkflowSection);
