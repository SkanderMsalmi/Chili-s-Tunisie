import React, { useEffect, useState } from 'react'
import image from "../assets/fajitas/fajitas-1.jpg"
import {useParams,useNavigate } from "react-router-dom";
import {getItemById,updateItemById} from "../apis/api.js";

function EditItem() {
    const navigate = useNavigate();
    const { id } = useParams();
    const imageURL = "http://localhost:3000/";
    const [selectedImage,setSelectedImage]= useState(null);
    const [item,setItem]= useState({
        name:'',
        price:0,
        image:''
      });

      useEffect(()=>{
        (async ()=>{
          const menusData = await getItemById(id);
          setItem({...menusData});
          
        })()
      },[]);
      const handlePhoto = (e)=>{
        const file = e.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.onload = ()=>{
            setSelectedImage(reader.result);
          }
          reader.readAsDataURL(file);
        }else{
          setSelectedImage(null);
        }
        setItem({...item,image:e.target.files[0]});
        console.log(item.image);
        
      }
  
  const handleSubmit = async (e)=>{
    
    e.preventDefault();

    const formData = new FormData();
    formData.append('name',item.name);
    formData.append('price',item.price);
    formData.append('image',item.image);
    
      
    const response:Response = await updateItemById(id,formData);
    if(response.status == 200){
      navigate('/admin/items')
    }else{
      console.log("error");
    }
        
  }
    return (
    
        <div className=''>
        
            <h2 className='text-4xl text-center underline text-danger mb-8'>Edit Item</h2>
            <div className='flex justify-around'>
        
              <form className="max-w-sm border p-5" onSubmit={handleSubmit} encType='multipart/form-data'>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" value={item.name} name='name' onChange={e => setItem({...item,name:e.target.value})} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "  required/>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
            <input type="number" value={item.price} name='price' onChange={e => setItem({...item,price: Number(e.target.value)})} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required/>
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
            <input type="file" id="image" name='image' accept='image/' onChange={handlePhoto} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
            <div className='w-full'>
        
          <button type='submit'  className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
            </div>
        </form>
        <div>
            <h3 className='text-center text-xl mb-8'> Preview</h3>
            <div className="flex flex-col space-y-2 mb-12  border p-5 rounded-lg">
                    <img src={selectedImage ? selectedImage : `${imageURL}${item.image}`} alt="item" className="rounded-lg max-h-[300px] mb-4" />
                    <h3 className="font-bold text-danger font-pt-sans text-3xl ">{item.name}</h3>
                    <p className="text-medium text-primary text-2xl">{item.price} DT</p>
                </div>
        </div>
        </div>
        </div>
        
          )
}

export default EditItem