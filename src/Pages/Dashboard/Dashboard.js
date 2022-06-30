import { useState } from "react";
import { useQuery } from "react-query";
import Modal from "../Modal/Modal";
import UpdatedModal from "../Modal/UpdatedModal";
import Rows from "../Rows/Rows";
const Dashboard = () => {
  const [bill, setBill] = useState(null);
  const { data, isLoading, refetch } = useQuery("bills", () =>
    fetch("http://localhost:5000/billing-list").then((res) => res.json())
  );

  return (
    <>
      <div className="mb-4 py-2 px-8 overflow-x-auto bg-base-100 mt-6">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex gap-2">
            <label className="text-xl">Billing</label>
            <input
              type="text"
              placeholder="Search item"
              className="w-full rounded border  focus:bg-transparent text-base outline-none py-1 px-3"
            />
          </form>
          <div>
            <label
              htmlFor="bill-modal"
              className="btn btn-sm btn-success text-white font-bold mt-2"
            >
              Add New Bill
            </label>
            <Modal refetch={refetch} />
            <UpdatedModal bill={bill} setBill={setBill} refetch={refetch} />
          </div>
        </div>
      </div>
      <div className="">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Billing ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Paid Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((bill) => (
                <Rows
                  bill={bill}
                  key={bill._id}
                  isLoading={isLoading}
                  refetch={refetch}
                  setBill={setBill}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
