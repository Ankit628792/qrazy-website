import React from 'react'
import Wrapper from './global/wrapper'
import AnimationContainer from './global/animation-container'
import SectionBadge from './ui/section-badge'
import Icons from './global/icons'

const whyUseQrazy = [
    {
        icon: Icons.bolt,
        title: "100% Secure & Unique QR Codes",
    },
    {
        icon: Icons.bolt,
        title: "AI-Powered Market & Fraud Analysis",
    },
    {
        icon: Icons.bolt,
        title: "Seamless Integration with Your Products",
    },
    {
        icon: Icons.bolt,
        title: "Enhances Customer Engagement & Loyalty",
    },
]

function About() {
    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 md:py-20 relative">
            <div className='hidden lg:block absolute top-1/2 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]'></div>

            <AnimationContainer animation="fadeUp" delay={0.2}>
                <div className="max-w-5xl md:mx-auto text-start md:text-center">
                    <SectionBadge title="Your Trust. Your Safety. Your Rewards." />
                    <h2 className="max-w-xl mx-auto text-3xl lg:text-4xl font-semibold mt-6">
                        Counterfeit Protection <br /> & Product Growth
                    </h2>
                    <p className="text-muted-foreground mt-6">
                        Qrazy is a next-gen QR code technology that helps brands combat counterfeit products, boost remarketing efforts, enhance warranty services, and analyze market trends. With Qrazy, you can ensure product authenticity, protect your brand’s reputation, and increase customer trust—all while gaining valuable insights into sales patterns and potential fraud.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.2} className="w-full max-w-7xl m-5 my-10 md:my-20 rounded-3xl bg-gray-900">
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
            </AnimationContainer>
        </Wrapper>
    )
}

export default About