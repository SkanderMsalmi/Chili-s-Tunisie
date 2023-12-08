import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import platHero from "../assets/platHero.jpg";
function HeroBlock() {
    return (
        <div className="min-h-screen bg-darkBackground">
            <div className="p-10 ">

                <div className="flex items-center justify-between"><img src={logo} alt="logo" className="w-16" /><NavLink to="/admin/menus" className="cursor-pointer">Admin</NavLink></div>

                <div className="flex flex-col lg:flex-row  justify-around items-center">
                    <div className="lg:w-1/2 w-full"><img src={platHero} alt="plat hero" className="rounded-[100%] w-9/12 mx-auto border-4 border-red-500" /></div>
                    <div className="flex flex-col w-full lg:w-1/2 p-2 lg:p-10 space-y-10  ">

                        <i className="fa-solid fa-ellipsis-vertical text-white self-end cursor-pointer text-4xl invisible lg:visible "></i>

                        <h3 className="text-3xl text-white">Chili's Tunisie</h3>
                        <h2 className="text-primary text-5xl lg:text-8xl pb-4">Découvrez les meilleures recettes syriennes</h2>
                        <button className="bg-danger text-white py-6  text-3xl rounded-xl lg:w-[40%] hover:bg-red-800 duration-200">Voir notre menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock