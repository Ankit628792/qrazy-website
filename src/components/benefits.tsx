import { cn } from "@/lib";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import Container from "./global/container";

import {
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon,
    BarChartBigIcon
} from "lucide-react";

export const BENEFITS = [
    {
        title: "Enhance User Experience",
        description: "Efficiently manage user data and interactions with advanced analytics and AI tools",
        icon: WandSparklesIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Comprehensive Insights",
        description: "Gain deep insights into your audience and campaign performance",
        icon: BarChartBigIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Data Management",
        description: "Manage your products information with ease and efficiency",
        icon: DatabaseIcon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Real-Time Analytics",
        description: "Track and analyze your brand's marketing performance in real-time",
        icon: TrendingUpIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Boosted Customer Engagement",
        description: "Encourage repeat purchases and brand loyalty.",
        icon: ZapIcon,
        image: "/images/feature-five.svg",
    }
]

const Benefits = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Benefits for Your <span className="font-subheading italic">Business</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Your brand deserves protection. Your customers deserve authenticity. Qrazy makes it possible.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible max-w-7xl">

                {BENEFITS.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
                        index === 3 && "lg:col-span-2",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                    )}>
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <feature.icon className="size-5 text-primary" />
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>

                            <div className="mt-6 w-full bg-card/50 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Benefits
