import Main from "../components/Main"
import Head from "next/head"
import Image from "next/image"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Travis' Portfolio Home</title>
                <meta name="description" content="Portfolio for Me!" />
                <link rel="icon" href="/eq-favicon.ico" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
