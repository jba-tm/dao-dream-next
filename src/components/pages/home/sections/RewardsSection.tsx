import styled from "styled-components"
import LearnMoreButton from "@/src/components/common/LeanMoreButton";

const StyledSection = styled.section`
  display: grid;
  gap: 20px;
  background: radial-gradient(
          124.45% 123.58% at 50% 0%,
          rgba(0, 0, 0, 0.9) 45.92%,
          rgba(113, 61, 255, 0.9) 72.15%,
          rgba(255, 255, 255, 0.9) 100%
  );
  border: 1px solid var(--border-color);
  border-radius: 24px;

  height: auto;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  padding: 2rem;

  .reward_image {
    img {
      position: relative;
    }
  }

  @media (min-width: 1024px) {
    height: 385px;
    grid-template-columns: 1fr 1fr;
    padding: 0;

    .reward_image {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        top: -20px;
        left: -20px;
        bottom: -20px;
      }
    }
  }

`

const RewardsSection = ()=>{
    return (
        <StyledSection className=" mt-8">
            <div className="reward_image">
                <img src="/images/ton.png" alt="" />
            </div>

            <div className="py-14 h-full justify-between flex flex-col lg:items-start items-center gap-2 lg:text-left">
                <h2 className="lg:text-5xl text-3xl">Get Rewards</h2>

                <p className="lg:text-3xl text-xl">
                    Every Friday / 52 times a year!
                </p>

                <p className="text-secondary-text">
                    You automatically receive income every week and can withdraw it to your wallet at any time
                </p>

                <LearnMoreButton />
            </div>
        </StyledSection>

    )
}

export default RewardsSection