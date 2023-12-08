import axios from 'axios';

const baseURL = 'http://localhost:3000/api';


const api = axios.create({
    baseURL,
});

export const createItem = async (formData)=>{

    const response = await api.post('/items',formData,
     
    );
    return response;
}

export const createMenu  = async (menu)=>{
    const response = await api.post('/menu',menu);
    return response;
}
export const fetchData = async () => {
    const response = await api.get('/');
    return response.data;

};

export const fetchAllItems = async ()=>{
    const response = await api.get('/items');
    return response.data;
}

export const fetchMenus = async()=>{
    const response = await api.get('/menu');
    return response.data;
}

export const fetchMenusWithItems = async()=>{
    const response = await api.get('/menu/withItems');
    return response.data;
}

export const fetchMenusWithItemsById = async(id)=>{
    const response = await api.get(`/menu/withItems/${id}`);
    return response.data;
}

export const fetchMenuItemById = async()=>{
    const response = await api.get('/menu');
    return response.data;
}

export const getItemById = async (id)=>{
    const response = await api.get(`/items/${id}`);
    return response.data;
}
export const getMenuById = async (id)=>{
    const response = await api.get(`/menu/${id}`);
    return response;
}

export const updateItemById = async (id,item)=>{
   
    const response = await api.put(`/items/${id}`,item);
    return response;
}

export const updateMenuById = async (id,menu)=>{
    const response = await api.put(`/menu/${id}`,menu);
    return response;
}

export const deleteItemById = async (id)=>{
    const response = await api.delete(`/items/${id}`);
    return response;
}

export const deleteMenuById = async (id,menu)=>{
    const response = await api.delete(`/menu/${id}`,menu);
    return response;
}