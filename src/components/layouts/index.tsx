import {StyledHomeWrapper, StyleHomeLandingSection, StyleHomeImage} from "@/src/components/layouts/styled";
import {ReactNode} from "react";


export const DefaultLayout = ({children}: {children: ReactNode})=>{
    return (
        <div>
            <StyleHomeLandingSection>
                <div className="container mx-auto">
                    <div className="mt-12 flex flex-col gap-10 text-center lg:text-5xl text-3xl font-medium">
                        <div className="flex flex-col items-center gap-10 md:w-8/12 w-full mx-auto ">
                            <h2>The WA demo</h2>
                            <h1>DAO DREAM</h1>
                        </div>

                        <StyleHomeImage src="/images/bird.png" alt="" className="mx-auto" />

                        <p className="text-xl font-normal md:w-5/12 w-full mx-auto mt-4">
                            Essentially purchase and hold the HighPoint Token acquire
                            hazardous, yet manageable, easy revenue
                        </p>
                    </div>
                </div>
            </StyleHomeLandingSection>
            {/*{children}*/}
        </div>
    )
}