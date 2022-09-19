import Card from "../components/Card"
import Head from "next/head"
import Navbar from "../components/Navbar"

export default function card() {
    return (
        <div>
            <Head>
                <title>Travis' Portfolio Home</title>
                <meta name="description" content="Portfolio for Me!" />
                <link rel="icon" href="/eq-favicon.ico" />
            </Head>
            <Navbar />
            <Card />
        </div>
    )
}
