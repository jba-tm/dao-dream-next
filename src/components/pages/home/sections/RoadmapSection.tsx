import styled from "styled-components";

const StyledWrapper = styled.div`
  .home__roadmap {

    &__col {
      border: 1px solid var(--border-color);
      padding: 16px;
      border-radius: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 80px;
      position: relative;
      background-color: var(--dark-blue);
    }

    &__row {
      display: grid;
      gap: 1.5rem;
    }

    &__rows {
      padding: 0 2rem;

      &__wrapper {
        background-image: url("/icons/connectors/mobile.png");
        background-repeat: no-repeat;
        background-size: 100% 530px;
        background-position: 0 35px;
        gap: 1.5rem;
        height: 640px;
      }
    }

    @media (min-width: 1024px) {
      &__rows {
        width: 85%;

        &__wrapper {
          background-image: none;
          height: auto;
        }

        &:nth-child(1) {
          .home__roadmap__col {
            &::after {
              background-image: url("/icons/connectors/2.svg");
              top: 50%;
            }
          }
        }

        &:nth-child(2) {
          .home__roadmap__col {
            &::after {
              z-index: -1;
              background-image: url("/icons/connectors/1.svg");
              //top: -30%;
            }

            &:last-child {
              &::after {
                display: none;
              }
            }
          }
        }
      }

      &__row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 9rem;
      }

      &__col {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 100%;
          height: 94px;
          width: 100px;
          background-repeat: no-repeat;
          bottom: 21%;
        }
      }
    }
  }
`

const StyledText = styled.div`/* Optimize your deals on hundreds of DEX across multiple networks. */

  
  width: 248px;
  height: 36px;

  /* Small text */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Small Text Radial */

  background: radial-gradient(58.87% 227925.18% at 50% 49.99%, #FFFFFF 24.48%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.04) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`


const RoadmapSection = ()=>{
    return (
        <StyledWrapper>
            <div className="container">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-5xl uppercase">Roadmap</h1>

                    <p className="text-secondary-text">
                        The roadmap is a to-do list of our upcoming events. No official
                        launch dates are going to be publicly announced so we can
                        change.
                    </p>
                </div>

                <div className="home__roadmap__rows__wrapper flex flex-col lg:gap-8 mt-24">
                    <div className="home__roadmap__rows">
                        <div className="home__roadmap__row">
                            <div className="home__roadmap__col">
                                Security (kyc/audit/multisign)
                            </div>

                            <div className="home__roadmap__col">Official Launch</div>

                            <div className="home__roadmap__col">
                                Second phase of marketing
                            </div>
                        </div>
                    </div>

                    <div className="home__roadmap__rows lg:ml-auto">
                        <div className="home__roadmap__row">
                            <div className="home__roadmap__col">Website</div>

                            <div className="home__roadmap__col">
                                Launch discord and official accounts
                            </div>

                            <div className="home__roadmap__col">More to come</div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-24">
                    {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((_, index) => (
                        <div
                            className="flex justify-center items-center text-center"
                            key={index}
                        >
                            <img src={`/logos/logo-${index}.png`} alt="" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">

                    <StyledText className="text-center mt-16">
                        Optimize your deals on hundreds of DEX across multiple networks.
                    </StyledText>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default RoadmapSection