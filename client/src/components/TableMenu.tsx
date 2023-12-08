import { Menu } from "../interfaces/Menu";
import imageLogo from "../assets/menu.png";
import {fetchMenus,deleteMenuById} from "../apis/api.js";
import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
const TableMenu = () => {
  
    const [menus,setMenus] = useState<Menu[]>([]);
    const fetchAllMenu = async ()=>{
        const menusData = await fetchMenus();
        
        setMenus(menusData);
    }

        const handleDeleteMenu = async (id:string)=>{
          await deleteMenuById(id);
          fetchAllMenu();
     }
    useEffect(() => {
        fetchAllMenu();
    
      
    }, []);
    // const openMenuModal = () => {
    //     setIsMenuModalOpen(true);
    //   };
    return (

<div>
<h1 className=" text-4xl font-extrabold leading-none tracking-tight text-danger md:text-5xl lg:text-6xl mb-28 text-center">Gestion Menus</h1>
<div className='mb-4'><NavLink to="add" className="bg-blue-500 text-white py-2 px-5 rounded-2xl">Ajouter Menu</NavLink></div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                <div>


                </div>
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mr-4">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for menus" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Items
                        </th>

                        <th scope="col" className="px-6 py-3 flex justify-center items-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu)=>(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={menu.name}>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-10 h-10 rounded-full" src={imageLogo} alt="Skander" />
                            <div className="ps-3">
                                <div className="text-base font-semibold">{menu.name}</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <NavLink to={`detail/${menu._id}`} className="bg-orange-600 py-2 px-6 text-white rounded-lg cursor-pointer ">

                         Voir Items
                            </NavLink>
                        </td>

                        <td className="px-6 py-4 flex justify-center space-x-5">

                            <NavLink to={`edit/${menu._id}`}  data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium bg-green-600 dark:text-white hover:underline px-4 py-2 rounded-lg">Edit</NavLink>
                            <button onClick={()=>handleDeleteMenu(menu._id)}  className="font-medium bg-red-600 dark:text-white hover:underline px-4 py-2 rounded-lg">Supprimer</button>
                        </td>
                    </tr>
                    ))}
                
                </tbody>
            </table>
</div>
         
        </div>

    );
};

export default TableMenu;