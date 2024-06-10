import Link from "next/link";
//import { getEmployeelist } from "@/lib/action";
import { getData } from "@/lib/action";
import { formatDate } from "@/lib/util";
import { DeleteButton } from "./delete";

const Employee = async ({ query }: { query: string }) => {
  const employees = await getData(query);
  //const employees = await getEmployeelist(query);
  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Nama</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Nomor Telepon</th>
          <th className="py-3 px-6">Dibuat pada</th>
          <th className="py-3 px-6 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((rs, index) => (
          <tr key={rs.id} className="bg-white border-b text-gray-800">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.email}</td>
            <td className="py-3 px-6">{rs.phone}</td>
            <td className="py-3 px-6">{formatDate(rs.createdAt.toString())}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/edit/${rs.id}`} className="btn btn-info">
                Edit
              </Link>
              <DeleteButton id={rs.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employee;
