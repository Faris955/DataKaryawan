import Link from "next/link";
import TableData from "./components/tabledata";
import { Suspense } from "react";
import { Spinner } from "./components/spinner";

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  return (
    <div className="w-screen h-screen py-20 flex  flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold text-gray-900">
          Project Latian CRUD Data Karyawan
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/create" className="btn btn-primary">
            Create
          </Link>
        </div>

        <Suspense key={query} fallback={<Spinner />}>
          <TableData query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
