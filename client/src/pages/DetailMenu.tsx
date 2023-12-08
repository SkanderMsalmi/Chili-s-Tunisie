import React, { useEffect, useState } from 'react'
import {useParams,useNavigate, NavLink } from "react-router-dom";
import {getMenuById} from "../apis/api.js";
import type {Item} from "../interfaces/Item.js"
function DetailMenu() {
  const { id } = useParams();
  const imageURL = "http://localhost:3000/";

  const navigate = useNavigate();
  const fetchMenus = async ()=>{
    const menusData = await getMenuById(id);
     
      
    setMenu({...menusData.data});
  };
  const [menu,setMenu]= useState({

    name:'',
    items:[]

  });

  useEffect(()=>{
    fetchMenus();
   
    
  },[]);
  return (
    <div>
      <h2 className='text-4xl mb-24'>Menu : {menu.name}</h2>
      <div>
        <h3 className='text-2xl underline mb-12'>Items</h3>
        {menu.items.length ==0 && <div className='text-4xl flex w-full justify-center'><h2>Cette Menu est vide, vous pouvez ajouter des items <NavLink className="font-medium text-primary" to="/admin/items/add">ici</NavLink></h2></div>}
        <div className="lg:flex items-center flex-wrap justify-center w-full">
        {menu && menu.items.map((m)=>(
                  <div aria-label="card 2" tabindex="0" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0  bg-white p-6 shadow rounded mt-8">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <div className="w-12 h-12  flex flex-shrink-0"><img className='rounded-full ' src={`${imageURL}${m.image}`} alt={m.name} /></div>
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p tabindex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">{m.name}</p>
                                <p tabindex="0" className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">{m.price} TND</p>
                            </div>
                            <div aria-label="bookmark" role="img" className='cursor-pointer'>
                            <i className="fa-solid fa-xmark text-danger text-2xl"></i >
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p tabindex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                       </div>
                    </div>
                  
                    
                  ))}
                  </div>

                  <div className='w-[20%] ml-auto'><NavLink className="font-medium bg-blue-600 py-2 px-6 text-white rounded-lg" to="/admin/items/add">Ajouter</NavLink></div>
        
      </div>
    </div>
  )
}

export default DetailMenu