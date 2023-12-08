
import Menu from '../components/Menu';
import {fetchMenusWithItems} from '../apis/api.js';
import { useEffect, useState } from 'react';
import { Item } from '../interfaces/Item.js';

function MenuPage({ title }: { title: string }) {
   
    const [items,setItems] = useState<Item[]>([]);
    const [name,setName] = useState<string>();
    useEffect(()=>{
        fetchMenusWithItems().then((data:[{name:string,items:Item[]}])=>{
            console.log(data[0].items);
            
            setItems(data[0]?.items);
            setName(data[0].name);
      });
    },[]);
    return (
        <div className='my-24'>
            <h2 className="text-center text-4xl font-bold text-danger font-pt-sans-italic italic w-2/3 lg:w-1/3 mx-auto border-b-2 border-danger pb-3 flex items-center justify-center gap-5"><i className="fa-solid fa-pepper-hot text-[22px] "></i> <span> {title}</span> <i className="fa-solid fa-pepper-hot text-[22px]"></i></h2>
            {items.length >0 && <Menu subtitle={name} items={items} />}
            
            {/* <Menu subtitle={"Nos Fajitas"} items={[]} /> */}
        </div>
    )
}

export default MenuPage