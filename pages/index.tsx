// import {StyledHeroSection, StyleImage} from "@/src/components/pages/home/sections/hero/styled";
import LineChart from "@/src/components/charts/LineChart";
// import LearnMoreButton from "@/src/components/common/buttons/LeanMoreButton";
import { AiFillCaretDown, AiOutlineSend } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
// import ContainerDropdown from "@/src/components/features/dropdowns/ContainerDropdown";
// import {StyledCard, StyledCardText} from "@/src/components/features/cards/Card";
import HeroSection from "@/src/components/pages/home/sections/HeroSection";
import FeaturesSection from "@/src/components/pages/home/sections/FeaturesSection";
import BlocksSection from "@/src/components/pages/home/sections/BlocksSection";
import RewardsSection from "@/src/components/pages/home/sections/RewardsSection";
import StatsSection from "@/src/components/pages/home/sections/StatsSection";
import RoadmapSection from "@/src/components/pages/home/sections/RoadmapSection";
// import RoadmapSection from "@/src/components/pages/home/sections/RoadmapSection";


const cards = [
    {
        title: "Sustainable Growth",
        text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
        title: "Sustainable Growth",
        text: "Invest in a crypto that prioritizes long-term sustainability and growth, rather than quick gains and instability.",
    },
    {
        title: "Auto Reinvesting",
        text: "Keep your investments growing with our automatic reinvestment feature, which reinvests your earnings for you.",
    },
    {
        title: "Anti-Dump",
        text: "Our anti-dump policy ensures that large sell-offs do not disrupt the market and harm our investors' portfolios.",
    },
];




export default function Home() {
    return (
        <>
            <HeroSection/>
            <div className="container mx-auto">
                <FeaturesSection/>
                <BlocksSection/>
                <RewardsSection/>
            </div>
            <StatsSection/>
            <RoadmapSection/>
        </>
    )
}
