import { Container, Icons, Wrapper } from "@/components";
import AnimationContainer from "@/components/global/animation-container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { benefits, faqs, features, howToUseQrazy, reviews, whyUseQrazy } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, User, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    const firstRow = reviews.slice(0, reviews.length / 2)
    const secondRow = reviews.slice(reviews.length / 2);


    return (
        <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
            {/* Header  */}
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 w-full">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing Qrazy 2.0
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-4xl mx-auto w-11/12 md:w-full">
                            <h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100 text-transparent">
                                Scan, Verify & Earn Rewards!
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 text-center">
                                Your Trust. Your Safety. Your Rewards.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href={"#download"} className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/30 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">
                                        ✨ See Qrazy in Action!
                                    </p>
                                    <Button size={"sm"} className="rounded-full hidden lg:flex border border-foreground/20">
                                        Download Now
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]">
                            </div>
                            <div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                                <Image src={"/assets/header.png"} alt="Dashboard" width={1200} height={1200} objectFit="cover" className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border" />
                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* Why use qrazy  */}
            <Wrapper className="flex flex-col items-center justify-center py-12 md:py-20 relative">
                <div className='hidden lg:block absolute top-1/2 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]'></div>

                <Container>
                    <div className="max-w-5xl md:mx-auto text-start md:text-center">
                        <SectionBadge title="Your Trust. Your Safety. Your Rewards." />
                        <h2 className="max-w-xl mx-auto text-3xl lg:text-4xl font-semibold mt-6">
                            Scan & Verify Products While Earning Rewards!
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Qrazy is your ultimate product authenticity checker that ensures you’re buying genuine products while also rewarding you! Simply scan the QR code on your product to verify its authenticity, report counterfeits, and earn cashbacks, discounts, and exciting coupons.
                        </p>
                    </div>
                </Container>

                <Container className="w-full max-w-7xl m-5 my-10 md:my-20 rounded-3xl bg-gray-900">
                    <div className="flex flex-col items-center justify-center py-10 gap-10 w-full">
                        <SectionBadge title="Why Use Qrazy?" />
                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl w-full gap-8">
                            {
                                whyUseQrazy.map((item) => (
                                    <div key={item.title} className="flex items-center gap-4 bg-gray-950 py-3 px-4 rounded-xl">
                                        <div className="flex items-center justify-center bg-gray-800 rounded-full p-2">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-medium">
                                            {item.title}
                                        </h3>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* Benefits  */}
            <Wrapper id="benefits" className="flex flex-col items-center justify-center py-12 lg:py-20 relative">
                <div className='hidden lg:block absolute top-1/2 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]'></div>

                <Container>
                    <div className="max-w-xl md:mx-auto text-start md:text-center">
                        <SectionBadge title="Benefits" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Scan Smart. Shop Safe.
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Make better shopping decisions with real-time product details and brand updates.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 divide-x-0 md:divide-x divide-gray-900">
                            {
                                benefits.map((benefit) => (
                                    <div key={benefit.title} className="flex flex-col items-center px-0">
                                        <div className="flex items-center justify-center">
                                            <benefit.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-lg font-medium mt-4">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-center">
                                            {benefit.info}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* Features  */}
            <Wrapper id="features" className="flex flex-col items-center justify-center py-12 lg:py-20 relative">
                <Container>
                    <div className="max-w-xl md:mx-auto text-start md:text-center">
                        <SectionBadge title="Feature" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Shopping just got smarter, safer & more rewarding!
                        </h2>
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col items-center mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ">
                            {
                                features.map((feature) => (
                                    <div key={feature.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 py-4 lg:py-6 border border-transparent rounded-lg hover:border-gray-900 transition-all duration-150">
                                        <div className="flex items-center justify-center">
                                            <feature.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-lg font-medium mt-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-start">
                                            {feature.info}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* How to use qrazy ? */}
            <Wrapper id="how-it-works" className="flex flex-col items-center justify-center gap-20 py-12 lg:py-20 relative">
                <Container>
                    <div className="max-w-xl md:mx-auto text-center md:text-center flex flex-col  items-center">
                        <SectionBadge title="Scan Smart. Shop Safe. Earn More." />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Get Started with Qrazy 🚀
                        </h2>
                        <p className="text-muted-foreground mt-4">That’s it! Safe shopping & exciting rewards in just one scan!</p>
                    </div>
                </Container>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 sm:px-5 max-w-6xl mx-auto">
                    {
                        howToUseQrazy.map((item, i) => (
                            <Container key={item.title} className={cn("flex flex-col items-center gap-6 lg:gap-16 bg-gray-900 p-5 lg:py-10 lg:px-16 rounded-3xl", i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
                                <div className={cn("w-full max-w-xs h-60 lg:h-80 lg:max-w-sm rounded-2xl transform overflow-hidden", i % 2 == 0 ? "lg:-skew-x-6" : "lg:skew-x-6")}>
                                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className={cn("flex flex-col items-center text-center gap-2", i % 2 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-start")}>
                                    <SectionBadge title={"Step 0" + item.step} />
                                    <h3 className="text-lg font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </Container>
                        ))
                    }
                </div>
            </Wrapper>


            {/* Reviews  */}
            <Wrapper className="flex flex-col items-center justify-center py-12 lg:py-20 relative">
                <Container>
                    <div className="max-w-xl mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Real Customer Reviews & Success Stories
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {
                                    firstRow.map((review) => (
                                        <figure key={review.name} className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[0.15]">
                                            <div className="flex items-center gap-2">
                                                <User className="w-6 h-6" />
                                                <div className="flex flex-col">
                                                    <figcaption className="text-sm font-medium">
                                                        {review.name}
                                                    </figcaption>
                                                    <p className="text-xs font-medium text-muted-foreground">
                                                        {review.username}
                                                    </p>
                                                </div>
                                            </div>
                                            <blockquote className="mt-2 text-sm">
                                                {review.body}
                                            </blockquote>
                                        </figure>
                                    ))
                                }
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {
                                    secondRow.map((review) => (
                                        <figure key={review.name} className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[0.15]">
                                            <div className="flex items-center gap-2">
                                                <User className="w-6 h-6" />
                                                <div className="flex flex-col">
                                                    <figcaption className="text-sm font-medium">
                                                        {review.name}
                                                    </figcaption>
                                                    <p className="text-xs font-medium text-muted-foreground">
                                                        {review.username}
                                                    </p>
                                                </div>
                                            </div>
                                            <blockquote className="mt-2 text-sm">
                                                {review.body}
                                            </blockquote>
                                        </figure>
                                    ))
                                }
                            </Marquee>

                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* FAQs  */}
            <Wrapper id="faqs" className="py-20 lg:py-32">
                <div className="flex flex-col items-center text-center gap-4">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="FAQ" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Still have questions?
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find answers to common questions about our PropEase
                        </p>
                    </AnimationContainer>
                </div>

                <div className="max-w-3xl mx-auto pt-10">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((item, index) => (
                            <AnimationContainer
                                key={index}
                                animation="fadeUp"
                                delay={0.5 + (index * 0.1)}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border-none bg-[#191919] rounded-2xl px-6"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6 text-base md:text-lg text-left font-normal">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-left">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </AnimationContainer>
                        ))}
                    </Accordion>
                </div>
            </Wrapper>

            {/* Download  */}
            <Wrapper id="download" className="flex flex-col items-center justify-center py-12 lg:py-20 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">

                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                Start Using Qrazy Today!
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
                                Verify your products. Protect yourself. Earn rewards.
                            </p>
                            <div className="flex items-center gap-6 mt-6">
                                <Button variant={"white"} className="w-40" asChild>
                                    <Link href={"#"}>
                                        Play Store
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant={"white"} className="w-40" asChild>
                                    <Link href={"#"}>
                                        Download APK
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                            <SectionBadge className="mt-6" title="Start Scanning" />
                        </div>
                    </LampContainer>
                </Container>


                {/* Newsletter */}
                <Container className="relative z-[99999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about Qrazy
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input required type="email" placeholder="Enter your email" className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full outline-none" />
                                    <Button type="submit" size="sm" variant={"secondary"} className={cn("w-full md:w-max p-5")}>
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our <Link href={"#"}>Terms & Conditions</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </section>
    )
};

export default HomePage;
