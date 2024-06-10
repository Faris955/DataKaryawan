"use client";

import { useFormState } from "react-dom";
import { saveEmployee } from "@/lib/action";

const CreateEmployeePage = () => {
  const [state, formAction] = useFormState(saveEmployee, null);
  return (
    <div className="max-w-md mx-auto flex flex-wrap py-20 justify-center min-h-screen">
      <h1 className="text-3xl text-gray-900 font-bold text-center mb-2">
        Tambah Data Baru
      </h1>
      <div>
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered bg-[#eeeeee] text-gray-900 input-primary w-full max-w-xs"
              placeholder="Nama Lengkap..."
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered  bg-[#eeeeee] text-gray-900 input-primary w-full max-w-xs"
              placeholder="Email..."
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="input input-bordered  bg-[#eeeeee] text-gray-900 input-primary w-full max-w-xs"
              placeholder="Nomor Telepon..."
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
