import Sidebar from "../components/SideBar"



import {Outlet} from 'react-router-dom';
function Dashboard() {
  
  
    
    return (
        <>
            <Sidebar />
            <div className="ml-80 mr-16 pt-16 ">
                
                <Outlet/>
                {/* <Table items={items}/> */}
                {/* <Table menus={menus}/> */}
            </div>
        </>
    )
}

export default Dashboard