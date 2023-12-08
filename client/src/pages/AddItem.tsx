import React, { useEffect, useState } from 'react'
import image from "../assets/fajitas/fajitas-1.jpg"
import {useNavigate } from "react-router-dom";
import {createItem} from "../apis/api.js";
function AddItem() {
  const navigate = useNavigate();
 
  const [item,setItem]= useState({

      name:'',
      price:0,
      image:''
    });


    const handlePhoto = (e)=>{
      console.log(e.target.files[0]);
      
      setItem({...item,image:e.target.files[0]});
      console.log(item.image);
      
    }

const handleSubmit = async (e:Event)=>{
 
  
  e.preventDefault();
  console.log(item.image);
  
  const formData = new FormData();
  formData.append('name',item.name);
  formData.append('price',item.price);
  formData.append('image',item.image);


  
  const response:Response = await createItem(formData);
  if(response.status == 201){
    navigate('/admin/items')
  }else{
    console.log("error");
  }
      
}
  return (
  
      <div className=''>
      
          <h2 className='text-4xl text-center underline text-danger mb-8'>Add Item</h2>
          <div className='flex justify-around'>
      
            <form className="max-w-sm border p-5" encType='multipart/form-data'>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
          <input type="text" value={item.name} onChange={e => setItem({...item,name:e.target.value})} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "  required/>
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
          <input type="number" name="price" value={item.price} onChange={e => setItem({...item,price: Number(e.target.value)})} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required/>
        </div>
        <div className="mb-5">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
          <input type="file" name="image" id="image" accept='image/' onChange={handlePhoto} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
          <div className='w-full'>
      
        <button onClick={(e:Event)=>handleSubmit(e)}   className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
          </div>
      </form>
      <div>
          <h3 className='text-center text-xl mb-8'> Preview</h3>
          <div className="flex flex-col space-y-2 mb-12  border p-5 ">
                  <img src={image} alt="item" className=" mb-4" />
                  <h3 className="font-bold text-danger font-pt-sans text-3xl ">{item.name}</h3>
                  <p className="text-medium text-primary text-2xl">{item.price} DT</p>
              </div>
      </div>
      </div>
      </div>
      
        )
}

export default AddItem