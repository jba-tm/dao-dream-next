import type {AppProps} from 'next/app'
import {DefaultLayout} from "@/src/components/layouts";

import "@/styles/global.scss";


export default function App({Component, pageProps}: AppProps) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}
