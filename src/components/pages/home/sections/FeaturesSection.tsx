import {StyledCard, StyledCardText} from "@/src/components/features/Card";

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

const FeaturesSection = ()=>{
    return (

        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-8 md:gap-4 mt-20">
            {cards.map((card, index) => (
                <StyledCard className="mb-8" key={index}>
                    <img
                        src={`/card-icons/${index + 1}.svg`}
                        alt=""
                        className="mb-10"
                    />

                    <div className="text-xl mb-2">
                        {card.title}
                    </div>

                    <StyledCardText className="text-md">{card.text}</StyledCardText>
                </StyledCard>
            ))}
        </div>
    )
}

export default FeaturesSection