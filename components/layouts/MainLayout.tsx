import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";


interface Props {
    children: JSX.Element;
    title?: string;
}

export const MainLayout: FC<Props> = ({children, title}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title || "TITLE"}</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
