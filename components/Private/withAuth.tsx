import { FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";

const WithAuth = <P extends object>(WrappedComponent: NextPage<P>) => {
  return (props: P) => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const [isToken, setIsToken] = useState(null);
    useEffect(() => {
      const token:any = localStorage.getItem("token");
      if (!token) {
        setTimeout(() => {
          setIsToken(null)
          router.push("/auth/signin");
          router.isFallback;
        },3000);
      } else {
        setIsToken(token);
      }
    }, []);
    if (isToken) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <Box className="h-screen w-full flex flex-col justify-center items-center bg-black">
          <FormLabel className="text-2xl font-bold text-white">401 | {"Unauthorized"}</FormLabel>
          <FormLabel className="font-normal text-white mt-2">Private page</FormLabel>
        </Box>
      );
    }
  }
}

export default WithAuth;