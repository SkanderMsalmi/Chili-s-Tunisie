import LandingPage from '../pages/LandingPage';




const coreRoutes = [
    {
        path: '/',
        title: 'Calender',
        component: LandingPage,
    },
    //   {
    //     path: '/admin',
    //     title: 'Profile',
    //     component: ,
    //   },
    //   {
    //     path: '/forms/form-elements',
    //     title: 'Forms Elements',
    //     component: FormElements,
    //   },
    //   {
    //     path: '/forms/form-layout',
    //     title: 'Form Layouts',
    //     component: FormLayout,
    //   },


];

const routes = [...coreRoutes];
export default routes;