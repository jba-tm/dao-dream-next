import styled from "styled-components"
import {Tab} from '@headlessui/react'
import React from "react";
import {StyledCard } from "@/src/components/features/Card";
import {Link} from "@/src/components/common/Link";
import {BsArrowUpRight} from "react-icons/bs";
import ContainerDropdown from "@/src/components/features/ContainerDropdown";
import LineChart from "@/src/components/charts/LineChart";



const StyledLoading = styled.div`
  width: 100%;
  height: 8px;
  box-shadow: 0 0 9px var(--pink-color);
  border-radius: 8px;
`

const StyledInner = styled.div`
  width: 91.70%;
  height: 100%;
  background-color: var(--pink-color);
  box-shadow: 0 0 16px -4px #713dff;
  border-radius: 8px;
`

const StyledTabItem = styled.div`
  min-width: 160px;
  outline: none;

  &.active {

    color: var(--purple-color);
    border-bottom: 2px solid;
    border-bottom-color: var(--purple-color);
  }
`

const StyledBadge = styled.div`
  /* voting status */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;

  width: 72px;
  height: 26px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 80px; 
`

const StyledShowMore = styled.button`
  /* Small text */

  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  display: flex;
  align-items: center;

  /* Light Periwinkle */

  color: var(--secondary-text-color);
  margin-top: 15px;
 
`

const StyledSmallText = styled.div`
  /* Small text */

  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  /* Light Periwinkle */
  &.secondary-text {
    color: var(--secondary-text-color);
    
  }
`
const StyledLink = styled(Link)`
  :hover {
    color: var(--purple-color)
  }
`

const StyledInput = styled.input`
  width: 100%;
  margin-top: 2.5px;
  background-color: transparent;
  appearance: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  ::placeholder{

    background: linear-gradient(180deg, #FFFFFF 0%, #CBD5D8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    opacity: 0.2;
  }

`

const StyledChartCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 10px;
`

const cryptoCurves = [
    {value: "UniSwap", title: "UniSwap"},
    {value: "dYdX", title: "dYdX"},
]


const dayChoices = [
    {
        value: 28,
        title: "Last 28 days",
    },
    {
        value: 21,
        title: "Last 21 days",
    },
    {
        value: 14,
        title: "Last 14 days",
    },
    {
        value: 7,
        title: "Last 7 days",
    },
];



const Voting = () => {
    return (
        <div className="pt-24">
            <div className="container">
                <h2>
                    dApp
                </h2>
            </div>
            <Tab.Group defaultIndex={0}>

                <div className="mt-10 mb-4 p-0 border-b border-gray-200 dark:border-gray-700">
                    <div className="container">
                        <Tab.List className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab">

                            <Tab as={React.Fragment}>
                                {({selected}) => (
                                    <StyledTabItem
                                        className={`p-4 inline-block hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${selected ? 'active' : ''}`}>
                                        Voting
                                    </StyledTabItem>
                                )}
                            </Tab>
                            <Tab as={React.Fragment}>
                                {({selected}) => (
                                    <StyledTabItem
                                        className={`p-4 inline-block hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${selected ? 'active' : ''}`}>
                                        System statistics
                                    </StyledTabItem>
                                )}
                            </Tab>
                        </Tab.List>
                    </div>
                </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='container'>
                            <div className="pt-12">
                                <StyledBadge className="mb-6">Ended</StyledBadge>
                                <h1>
                                    Proposal of TON Tokenomics Optimization
                                </h1>
                                <div className="grid lg:grid-cols-5 md:grid-cols-1 mt-6">
                                    <div className="mr-12">
                                        <div className="mb-5">
                                            <StyledSmallText className="secondary-text">
                                                Start date
                                            </StyledSmallText>
                                                <StyledSmallText>
                                                    Mar 20, 2023 13:00 UTC
                                                </StyledSmallText>
                                        </div>
                                        <div className="mt-5">
                                            <StyledSmallText className="secondary-text">
                                                End date
                                            </StyledSmallText>
                                            <StyledSmallText>

                                                Mar 30, 2023 13:00 UTC
                                            </StyledSmallText>
                                        </div>
                                    </div>
                                    <div className="mr-4">
                                        <div className="mb-5">
                                            <StyledSmallText className="secondary-text">
                                                Snapshot
                                            </StyledSmallText>

                                            <StyledSmallText>
                                                Mar 21, 2023 00:00 UTC
                                            </StyledSmallText>
                                        </div>
                                        <div className="mt-5">

                                            <StyledSmallText className="secondary-text">
                                                Contract
                                            </StyledSmallText>

                                            <StyledSmallText>
                                                <StyledLink className="flex gap-1" href="#">
                                                    <span >
                                                    EQCVy5bE...2c5-i-GS

                                                    </span>
                                                    <span className="text-white">
                                                    <BsArrowUpRight/>

                                                    </span>

                                                </StyledLink>
                                            </StyledSmallText>
                                        </div>
                                    </div>
                                    <div className="mr-4">
                                        <div className="flex justify-start mb-5">
                                            <div className="mr-4">

                                                <StyledSmallText className="secondary-text">
                                                    Dex
                                                </StyledSmallText>
                                                <ContainerDropdown choices={cryptoCurves}/>
                                            </div>
                                            <div className="ml-4">

                                                <StyledSmallText className="secondary-text">
                                                    Liquidity
                                                </StyledSmallText>
                                                <ContainerDropdown choices={cryptoCurves}/>

                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <StyledSmallText className="secondary-text">
                                                Smart contract address
                                            </StyledSmallText>
                                            <StyledSmallText>
                                                <StyledInput
                                                    className="leading-tight focus:outline-none"
                                                    type="text" placeholder="Jane Doe" aria-label="Enter address"/>
                                                {/*<input type="email" placeholder="Enter address"/>*/}
                                            </StyledSmallText>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-24">
                                <StyledCard>
                                    <p>
                                        Tokenomics proposal to achieve community consensus on circulating supply of TON.
                                        Proposal for a 48 month temporary freeze of inactive mining wallets, which have
                                        never been activated and do not have any outgoing transfer in their history. In
                                        response to repeated requests for greater certainty, clarity and transparency
                                        over the tokenomics of the TON network on December 17, 2022, the community
                                        called for all early miners to activate their inactive mining wallets by the end
                                        of 2022.
                                    </p>
                                    <StyledShowMore>
                                        Show more
                                    </StyledShowMore>
                                </StyledCard>
                            </div>
                            <div className="mt-12 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-8 md:gap-4">
                                <StyledCard className="mb-4">
                                    <table className="table-auto">
                                        <thead>
                                        <tr>
                                            <th>Recent votes</th>
                                            <th></th>
                                            <th>1.82M TON</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                            <td>Malcolm Lockyer</td>
                                            <td>1961</td>
                                        </tr>
                                        <tr>
                                            <td>Witchy Woman</td>
                                            <td>The Eagles</td>
                                            <td>1972</td>
                                        </tr>
                                        <tr>
                                            <td>Shining Star</td>
                                            <td>Earth, Wind, and Fire</td>
                                            <td>1975</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <StyledShowMore>
                                        Show more
                                    </StyledShowMore>
                                </StyledCard>
                                <div className="flex flex-col justify-between mb-4">

                                    <StyledCard className="flex-auto mb-2">
                                        <p className="mb-4">
                                            <span className="mr-2">Results</span>
                                            <span className="text-secondary-text">1,726 votes</span>
                                        </p>

                                        <div className="flex items-center justify-between mb-2">
                                            <p>
                                                Yes <span className="text-secondary-text">91.75%</span>
                                            </p>

                                            <div className="flex text-secondary-text">
                                                1.29K votes 1.67M TON
                                            </div>
                                        </div>
                                        <StyledLoading>
                                            <StyledInner/>
                                        </StyledLoading>
                                    </StyledCard>
                                    <StyledCard className="flex-auto mt-2">

                                        <p className="mb-4">
                                            <span className="mr-2">Winner</span>
                                            <span className="text-secondary-text">1,543 votes</span>
                                        </p>

                                        <div className="flex gap-4 items-center">
                                            <img src="/images/coin.png" alt="" />

                                            <div className="flex flex-col gap">
                                                <p>Stake CAKE</p>

                                                <p className="text-secondary-text">
                                                    Stake, Earn — And more!
                                                </p>
                                            </div>
                                        </div>
                                    </StyledCard>
                                </div>
                            </div>
                        </div>

                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="container">


                            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-10">
                                <StyledChartCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Received from staking/farming profits
                                            </p>
                                            <ContainerDropdown choices={dayChoices} />
                                        </div>

                                        <div className="flex items-end flex-wrap gap-4 mb-4">
                                            <h1 className="text-5xl font-medium">$2.14B</h1>

                                            <p className="text-secondary-text">April 7, 2023</p>
                                        </div>
                                    </div>
                                    <LineChart
                                        borderColor={"#713DFF"}
                                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                    />
                                </StyledChartCard>

                                <StyledChartCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Transferred to rewards for Holders
                                            </p>

                                            <ContainerDropdown choices={dayChoices} />
                                        </div>

                                        <div className="flex items-end flex-wrap gap-4 mb-4">
                                            <h1 className="text-5xl font-medium">$315.49B</h1>

                                            <p className="text-secondary-text">April 7, 2023</p>
                                        </div>
                                    </div>
                                    <LineChart
                                        borderColor={"#713DFF"}
                                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                    />

                                </StyledChartCard>
                            </div>

                            <StyledChartCard className=" flex flex-col gap-4 my-10">
                                <div className="p-8">
                                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                        <p className="font-medium">
                                            Received from staking/farming profits
                                        </p>
                                        <ContainerDropdown choices={dayChoices} />
                                    </div>

                                    <div className="flex items-end flex-wrap gap-4 mb-4">
                                        <h1 className="text-5xl font-medium">$2.14B</h1>

                                        <p className="text-secondary-text">April 7, 2023</p>
                                    </div>
                                </div>
                                <LineChart
                                    borderColor={"#713DFF"}
                                    backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                    backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                />
                            </StyledChartCard>
                            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-10">
                                <StyledChartCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Received from staking/farming profits
                                            </p>
                                            <ContainerDropdown choices={dayChoices} />
                                        </div>

                                        <div className="flex items-end flex-wrap gap-4 mb-4">
                                            <h1 className="text-5xl font-medium">$2.14B</h1>

                                            <p className="text-secondary-text">April 7, 2023</p>
                                        </div>
                                    </div>
                                    <LineChart
                                        borderColor={"#713DFF"}
                                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                    />
                                </StyledChartCard>

                                <StyledChartCard className=" flex flex-col gap-4">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                            <p className="font-medium">
                                                Transferred to rewards for Holders
                                            </p>

                                            <ContainerDropdown choices={dayChoices} />
                                        </div>

                                        <div className="flex items-end flex-wrap gap-4 mb-4">
                                            <h1 className="text-5xl font-medium">$315.49B</h1>

                                            <p className="text-secondary-text">April 7, 2023</p>
                                        </div>
                                    </div>
                                    <LineChart
                                        borderColor={"#713DFF"}
                                        backgroundColorBottom={"rgba(0, 143, 255, 0)"}
                                        backgroundColorTop={"rgba(0, 143, 255, 1)"}
                                    />

                                </StyledChartCard>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

        </div>


    )
}

export default Voting