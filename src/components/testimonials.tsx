import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';

export const TESTIMONIALS = [
    {
        content: "Since implementing Qrazy, we’ve reduced counterfeit issues by 80% and seen a 35% increase in customer trust.",
        author: "Hemant",
        role: " Luxury Skincare Brand",
        image: "/images/person-one.jpg",
        rating: 5
    },
    {
        content: "Qrazy’s QR-based warranty system reduced our service fraud by 60% and improved after-sales service.",
        author: "James",
        role: "Electronics Manufacturer",
        image: "/images/person-two.jpg",
        rating: 4
    },
    {
        content: "Market analytics from Qrazy helped us discover new regions for expansion, boosting sales by 25%.",
        author: "Lucas",
        role: "Global Apparel Brand",
        image: "/images/person-four.jpeg",
        rating: 5
    },
    {
        content: "Since implementing Qrazy, we’ve reduced counterfeit issues by 80% and seen a 35% increase in customer trust.",
        author: "Hemant",
        role: " Luxury Skincare Brand",
        image: "/images/person-one.jpg",
        rating: 4
    },
    {
        content: "Qrazy’s QR-based warranty system reduced our service fraud by 60% and improved after-sales service.",
        author: "James",
        role: "Electronics Manufacturer",
        image: "/images/person-two.jpg",
        rating: 5
    },
    {
        content: "Market analytics from Qrazy helped us discover new regions for expansion, boosting sales by 25%.",
        author: "Lucas",
        role: "Global Apparel Brand",
        image: "/images/person-four.jpeg",
        rating: 5
    },
];

const Testimonials = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Testimonials" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Success Stories
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how brands are using Qrazy to protect their products and grow their business.
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative">
                    <div className="absolute -left-1 top-0 w-20 h-full bg-gradient-to-r from-[#101010] to-transparent z-10" />
                    <div className="absolute -right-1 top-0 w-20 h-full bg-gradient-to-l from-[#101010] to-transparent z-10" />

                    <Marquee className="[--gap:1.5rem]" pauseOnHover>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <AnimationContainer
                                key={index}
                                animation="fadeUp"
                                delay={0.6 + (index * 0.1)}
                            >
                                <div
                                    className="flex-shrink-0 w-[400px] rounded-3xl bg-[#191919] backdrop-blur-3xl p-8"
                                >
                                    <div className="flex flex-col gap-6">
                                        <AnimationContainer animation="fadeRight" delay={0.7 + (index * 0.1)}>
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">
                                                        {testimonial.author}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.1)}>
                                            <p className="text-lg">
                                                &quot;{testimonial.content}&quot;
                                            </p>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.9 + (index * 0.1)}>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-primary text-primary"
                                                    />
                                                ))}
                                            </div>
                                        </AnimationContainer>
                                    </div>
                                </div>
                            </AnimationContainer>
                        ))}
                    </Marquee>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Testimonials;
