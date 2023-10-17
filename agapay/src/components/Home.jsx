import React, {useEffect} from "react"
import Footer from "./Footer"
import Reporting from "./Reporting"
import Hotlines from "./Hotlines"
import PersuadingUsers from "./PersuadingUsers"
import Guidelines from "./Guidelines"
import Carousel from "./Carousel"
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>

        <Carousel />
        <Reporting />
        <Hotlines />
        <Guidelines />
        <PersuadingUsers />
        <Footer />
        </>
    )
};