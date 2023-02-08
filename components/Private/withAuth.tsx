import { FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {useEffect} from 'react'

const WithAuth = <P extends object>(WrappedComponent: NextPage<P>) => {
  return (props: P) => {
    const router = useRouter();
    const [isToken, setIsToken] = useState(null);
    useEffect(() => {
      const token:any = localStorage.getItem("token");
      if (!token) {
        setTimeout(() => {
          setIsToken(null)
          router.push("/auth/signin");
        },3000);
      } else {
        setIsToken(token);
      }
    }, []);
    if (isToken) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <Box className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
          <FormLabel className="text-9xl font-extrabold text-orange-500 tracking-widest ">404</FormLabel>
          <FormLabel className="whitespace-normal" />
          <FormLabel className="bg-[#FF6A3D] text-sm rounded rotate-12 text-white mt-5">
            -- Private Page --
          </FormLabel>
        </Box>
      );
    }
  }
}

export default WithAuth;