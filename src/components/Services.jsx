import Servicesgrid from "./Servicesgrid"
import Footer from "./Footer"
export default function Services () {
    return (
        <div>
            <h1 className=" mt-20 text-4xl rounded-md bg-emerald-600 px-6 py-3  font-semibold text-white shadow-sm text-4xl">Services <br/>             Click each item below to learn more</h1>

        <Servicesgrid/>
        <Footer/>
        </div>
    )
}