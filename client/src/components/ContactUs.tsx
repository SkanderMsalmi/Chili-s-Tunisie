import imageLogo from "../assets/logo.webp";
function ContactUs() {
    return (
        <div className="w-full">
            <div className="bg-contact-us bg-cover h-[600px] p-16 container mx-auto m-5 rounded-3xl">
                <h3 className="text-center text-white font-extrabold text-4xl  ">Prendre Contact</h3>
                <div className="flex justify-around items-start w-10/12 mx-auto mt-16">
                    <div className="w-1/2 ">
                        <form action="" className="flex flex-col space-y-4 w-7/12 mx-auto">
                            <input type="text" id="fullname" className="bg-white border border-gray-300 text-black text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4  placeholder:text-black" placeholder="Nom et Prénom" required />
                            <input type="email" autoComplete="test" name="email" id="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder:text-black" placeholder="Adresse Email" required />
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-black bg-white rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black  " placeholder="Votre message ici..."></textarea>
                            <button className="bg-white hover:bg-gray-200 text-black py-3 border rounded-lg">Envoyer</button>
                        </form>
                    </div>
                    <div className="w-1/2 mt-2"><img src={imageLogo} alt="logo" className="bg-white  rounded-[100%] h-[250px] w-[250px] p-6 mx-auto" /></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs