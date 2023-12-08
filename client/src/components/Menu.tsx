import { Item } from "../interfaces/Item";
import ItemCard from "./ItemCard"
function Menu({ subtitle,items }: { subtitle: string, items: Item[] }) {
    
    
    return (
        <div className="container mx-auto my-16">

            <div className="flex flex-col ">
                <div className="" >

                    <h3 className="mb-8 mt-12 text-4xl font-bold font-pt-sans text-primary text-left px-4 lg:px-12">
                        {subtitle}
                    </h3>
                </div>
                <div className="flex flex-wrap justify-evenly  ">
                    {items.map((item)=> (<ItemCard item={item} key={item.name}/>))}
                </div>
                <div className="w-fit mx-auto py-2">
                    <p className="text-danger text-xl underline cursor-pointer hover:text-2xl">Voir Plus</p>
                </div>
            </div>
        </div>
    )
}

export default Menu