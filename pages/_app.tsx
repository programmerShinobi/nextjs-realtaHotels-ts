import React, { useEffect, useState } from "react";
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/LayoutAdmin';
import LayoutAuth from "@/components/Layout/LayoutAuth";
import LayoutManager from "@/components/Layout/LayoutManager";
import LayoutOB from "@/components/Layout/LayoutOB";
import LayoutUsers from "@/components/Layout/LayoutUsers";
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { useRouter } from "next/router";
import Index from ".";
import EditUserPhoto from "./admin/editProfile";
import User from "./users";
import DashboardManager from "./manager";
import OB from "./ob";
import HotelOB from "./ob/hotel";
import PrivateRoute from "../utils/privateRoute";
import LayoutSignIn from "@/components/Layout/LayoutSignIn";
import LayoutSignUp from "@/components/Layout/LayoutSignUp";
import SignIn from "./auth/signIn";
import SignUp from "./auth/signUp";
import DashboardAll from "./admin/dashboard";
import MasterMembers from "./admin/master/index";
import BookingOrder from "./admin/booking/index";
import UsersUsers from "./admin/users/index";
import HotelsHotel from "./admin/hotels/index";
import HREmployee from "./admin/hr/index";
import PaymentTransaction from "./admin/payment/index";
import PurchasingPurchaseOrder from "./admin/purchasing/index";
import RestoMenus from "./admin/resto/index";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </SessionProvider>
  )

    // const router = useRouter();
    // return (
    //   <SessionProvider session={pageProps.session}>
    //     <Provider store={store}>
    //       {router.pathname === '/' && (
    //         <LayoutAuth>
    //           <Index {...pageProps}/>       
    //         </LayoutAuth>
    //       )}
    //       {router.pathname === '/auth/login' && (
    //         <LayoutSignIn>
    //             <SignIn {...pageProps}/>
    //         </LayoutSignIn>
    //       )}
    //       {router.pathname === '/auth/register' && (
    //         <LayoutSignUp>
    //             <SignUp {...pageProps}/>
    //         </LayoutSignUp>
    //       )}
    //       {router.pathname === '/manager' && (
    //         <PrivateRoute>
    //           <LayoutManager>
    //             <DashboardManager {...pageProps}/>       
    //           </LayoutManager>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/ob' && (
    //         <PrivateRoute>
    //           <LayoutOB>
    //             <OB {...pageProps}/>       
    //           </LayoutOB>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/ob/hotel' && (
    //         <PrivateRoute>
    //           <LayoutOB>
    //             <HotelOB {...pageProps}/>
    //           </LayoutOB>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <DashboardAll {...pageProps}/>       
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/master' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <MasterMembers {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/booking' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <BookingOrder {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/users' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <UsersUsers/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/hotel' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <HotelsHotel {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/humanResources' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <HREmployee {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/payment' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <PaymentTransaction {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/purchasing' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <PurchasingPurchaseOrder {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/resto' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <RestoMenus {...pageProps}/>
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/admin/editUserPhoto' && (
    //         <PrivateRoute>
    //           <Layout>
    //             <EditUserPhoto {...pageProps} />
    //           </Layout>
    //         </PrivateRoute>
    //       )}
    //       {router.pathname === '/users' && (
    //         <PrivateRoute>
    //           <LayoutUsers>
    //             <User {...pageProps}/>       
    //           </LayoutUsers>
    //         </PrivateRoute>
    //       )}
    //     </Provider>
    //   </SessionProvider>
    // )
  

};

export default App;
