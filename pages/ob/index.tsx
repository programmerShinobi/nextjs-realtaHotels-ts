import LayoutOB from "@/components/Layout/LayoutOB";
import WithAuth from "@/components/Private/withAuth";
import Custom401 from "../401";
import { useRouter } from "next/router";

const OB = () => {
  const router = useRouter();
  const roleId: any = localStorage.getItem("roleId");
  console.info(roleId);   
  if (roleId == 1) {
  } else {
    router.back();
    return Custom401();
  }
  return (
    <>
      <LayoutOB>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Task</p>
      </LayoutOB>
    </>
  );
}

export default WithAuth(OB);