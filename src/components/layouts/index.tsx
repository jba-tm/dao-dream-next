import {ReactNode} from "react";
import {StyledWrapper} from "@/src/components/layouts/styled";
import Header from "./Header"
import Footer from "@/src/components/layouts/Footer";


export const DefaultLayout = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <Header/>
            <StyledWrapper>
                {children}
            </StyledWrapper>
            <Footer/>
        </div>
)
}