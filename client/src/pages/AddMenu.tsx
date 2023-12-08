import React, { useEffect, useState } from 'react'
import {useNavigate } from "react-router-dom";
import {createMenu} from "../apis/api.js";

function AddMenu() {
    const navigate = useNavigate();
 
    const [menu,setMenu]= useState({
  
        name:'',
        items:[]
      });
  

  
  const handleSubmit = async (e:Event)=>{
   
    
    e.preventDefault();

    

  
    
    const response:Response = await createMenu(menu);
    if(response.status == 201){
      navigate('/admin/menus')
    }else{
      console.log("error");
    }
        
  }
    return (
    
        <div className=''>
        
            <h2 className='text-4xl text-center underline text-danger mb-8'>Add Menu</h2>
            <div className='flex justify-around'>
        
              <form className="max-w-sm border p-5" >
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" value={menu.name} onChange={e => setMenu({...menu,name:e.target.value})} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "  required/>
          </div>
          
            <div className='w-full'>
        
          <button onClick={(e:Event)=>handleSubmit(e)}   className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
            </div>
        </form>
   
        </div>
        </div>
        
          )
}

export default AddMenu