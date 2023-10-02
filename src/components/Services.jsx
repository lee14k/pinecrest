import Servicesgrid from "./Servicesgrid"
import Footer from "./Footer"
export default function Services () {
    return (
        <div>
            <h1 className="text-4xl">Services</h1>
            <p>Click each item below to learn more</p>
        <Servicesgrid/>
        <Footer/>
        </div>
    )
}