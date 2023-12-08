
import image from "../assets/fajitas/fajitas-1.jpg";
function ItemCard({item}) {
    const imageURL = "http://localhost:3000/";

    
    return (
        <div className="flex flex-col space-y-2 mb-12 px-4 w-full sm:w-1/2 md:w-[40%] lg:w-[28%] xl:w-[30%] ">
            <img src={`${imageURL}${item.image}`} alt="item" className="rounded-lg mb-4 h-[307px]" />
            <h3 className="font-bold text-danger font-pt-sans text-3xl ">{item.name}</h3>
            <p className="text-medium text-primary text-2xl">{item.price} DT</p>
        </div>
    )
}

export default ItemCard