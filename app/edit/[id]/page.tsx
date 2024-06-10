import UpdateForm from "@/app/components/editform";
import { getEmployeeById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateEmployeePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const employee = await getEmployeeById(id);
  //console.log(employee);

  if (!employee) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto flex flex-wrap py-20 justify-center min-h-screen">
      <h1 className="text-3xl text-center mb-2 text-gray-900 font-bold">
        Ubah Data Karyawan
      </h1>
      <UpdateForm employee={employee} />
    </div>
  );
};

export default UpdateEmployeePage;
