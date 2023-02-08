import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import WithAuth from "@/components/Private/withAuth";
import Custom401 from "@/pages/401";
import { Box } from "@mui/material";
import Head from "next/head";

const DashboardAll = () => {
  const roleId: any = localStorage.getItem("roleId");
  console.info(roleId);   
  if (roleId == 4) {
    
  } else {
    return Custom401();
  }
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard / All</p>
        <Box className="grid lg:grid-cols-3 gap-5 mb-16">
          <Box className="rounded bg-white h-40 shadow-sm"></Box>
          <Box className="rounded bg-white h-40 shadow-sm"></Box>
          <Box className="rounded bg-white h-40 shadow-sm"></Box>
        </Box>
        <Box className="grid col-1 bg-white h-96 shadow-sm"></Box>
      </LayoutAdmin>
    </Box>
  );
}

export default WithAuth(DashboardAll);