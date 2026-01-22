import Breadcrumbs from "../../components/common/Breadcrumbs";
import aboutbg from "../../assets/images/sections/aboutpage/about-bg.jpg";
export default function AboutHero() {
    return (
        <section className="relative w-full h-83.25 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${aboutbg})`,
                    opacity: 0.93,
                }}
            />

            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <h1
                    className="
  text-center font-poppins font-medium leading-none
  text-[48px] mb-4
"
                >
                    About <span className="text-gradient-primary">Technodha</span>
                </h1>

                <Breadcrumbs />
            </div>
        </section>
    );
}
