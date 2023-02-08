import LayoutOB from "@/components/Layout/LayoutOB";
import WithAuth from "@/components/Private/withAuth";

const OB = () => {
  return (
    <>
      <LayoutOB>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Task</p>
      </LayoutOB>
    </>
  );
}

export default WithAuth(OB);