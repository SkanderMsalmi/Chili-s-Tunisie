
import HeroBlock from '../components/HeroBlock'
import MenuPage from './MenuPage'
// import Menu from '../components/Menu'
import ContactUs from '../components/ContactUs'

function LandingPage() {
 
    return (
        <div>
            <HeroBlock />
            <MenuPage title={"Nos Menu"} />

            <ContactUs />
        </div>
    )
}

export default LandingPage