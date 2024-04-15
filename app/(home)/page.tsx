import BenefitCard from "@/components/benefitSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import ReviewCard from "@/components/reviewSection";
import React from "react";

const DashboardPage = () => {
    return (
        <main className={"lg:snap-y lg:snap-mandatory lg:overflow-y-scroll no-scrollbar"}>
            <div className={"lg:snap-start"}>
                <HeroSection/>
            </div>
            <div className={"lg:snap-start"}>
                <BenefitCard/>
            </div>
            <div className={"lg:snap-start"}>
                    <ReviewCard/>
                    <Footer/>
            </div>

        </main>
    );
};

export default DashboardPage;