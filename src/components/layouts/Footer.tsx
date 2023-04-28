import styled from "styled-components";
import {AiFillCaretDown, AiOutlineSend} from "react-icons/ai";

const StyledFooter = styled.footer`
  /* Footer */


  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 0;
  gap: 40px;
 

  background: radial-gradient(91.53% 133.1% at 50% 133.1%, rgba(255, 255, 255, 0.9) 0%, rgba(113, 61, 255, 0.9) 32.82%, rgba(0, 0, 0, 0) 78.46%);

  /* Inside auto layout */

  flex: none;
  order: 7;
  flex-grow: 0;
  
  @media (max-width: 1024px){
    padding: 40px 0;
    gap: 24px;
  }
`

const StyledSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`

const StyledSocial = styled.div`
  border: 1px solid var(--border-color);
  padding: 11px 8px;
  border-radius: 14px;
  width: 100%;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  gap: 10px;
  
  :hover {
    box-shadow: 0 0 16px -4px #713DFF;
  }
  
`

const StyleBottomText = styled.div`
  /* © 2023 dao-dream.com. All rights reserved. */
  /* Small text */

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* Light Periwinkle */

  color: var(--secondary-text-color);
`

export default function Footer() {
    return (
        <StyledFooter className="bottom-0 w-full bg-darkest-blue py-16">
            <div className="container">

                <p>dao-dream.com</p>

                <StyledSocials className="mt-10">
                    {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8]).map((_, index) => (
                        <StyledSocial key={index}>
                            <AiOutlineSend/>
                            <span>Channel</span>
                        </StyledSocial>
                    ))}
                </StyledSocials>
            </div>
            <div className="w-full py-5 border-t border-border bg-transparent">
                <div className="container">

                    <StyleBottomText>
                        © 2023 dao-dream.com. All rights reserved.
                    </StyleBottomText>
                </div>
            </div>
        </StyledFooter>
    );
}
