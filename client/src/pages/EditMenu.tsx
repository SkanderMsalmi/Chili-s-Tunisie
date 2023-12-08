import React, { useEffect, useState } from 'react'
import image from "../assets/fajitas/fajitas-1.jpg"
import {useParams,useNavigate } from "react-router-dom";
import {getMenuById,updateMenuById} from "../apis/api.js";

function EditMenu() {
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchMenus = async ()=>{
      const menusData = await getMenuById(id);
        
      setMenu({...menusData.data});
    };
    const [menu,setMenu]= useState({

      name:''

    });

    useEffect(()=>{
      fetchMenus();
    },[]);
    const handleSubmit = async (e:Event)=>{
   
    
      e.preventDefault();
      const response:Response = await updateMenuById(id,menu);
      if(response.status == 200){
        navigate('/admin/menus');
      }else{
        console.log("error");
      }
          
    }
  return (
    
<div>

    <h2 className='text-4xl text-center underline text-danger mb-8'>Edit Menu</h2>

      <form className="max-w-lg border p-5 mx-auto">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
    <input value={menu.name} onChange={e => setMenu({...menu,name:e.target.value})} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "  required/>
  </div>


    <div className='w-full'>

  <button onClick={(e:Event)=>handleSubmit(e)}   className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
    </div>
</form>

</div>

  )
}

export default EditMenu