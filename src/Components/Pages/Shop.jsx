import Popular from "../../Popular/Popular"
import Hero from "../Hero/Hero"
import NewCollection from "../NewColleaction/NewCollection"
import Newsletter from "../Newsletter/Newsletter"
import Offer from "../Offers/Offer"

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular/>
        <Offer/>
        <NewCollection/>
        <Newsletter/>
        
    </div>
  )
}

export default Shop