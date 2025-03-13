import About from "@/components/about";
import Analysis from "@/components/analysis";
import Benefits from "@/components/benefits";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import PlatformMetrics from "@/components/platform-metrics";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <section className="w-full">
                <Hero />
            </section>
            <section className="w-full" id="about">
                <About />
            </section>

            <section className="w-full">
                <Perks />
            </section>

            <section className="w-full">
                <Benefits />
            </section>

            <section className="w-full" id="how-it-works">
                <HowItWorks />
            </section>

            <section className="w-full" id="features">
                <Features />
            </section>

            <section className="w-full">
                <Analysis />
            </section>

            <section className="w-full">
                <Testimonials />
            </section>

            <section className="w-full">
                <PlatformMetrics />
            </section>

            <section className="w-full" id="faqs">
                <FAQ />
            </section>

            <section className="w-full" id="get-started">
                <CTA />
            </section>
        </div>
    );
};

export default HomePage;
