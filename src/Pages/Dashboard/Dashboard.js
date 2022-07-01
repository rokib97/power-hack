import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { RequireContext } from "../../App";
import Loading from "../../components/Loading/Loading";
import Modal from "../Modal/Modal";
import UpdatedModal from "../Modal/UpdatedModal";
import Rows from "../Rows/Rows";

const Dashboard = () => {
  const { setTotal } = useContext(RequireContext);
  const [bill, setBill] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const { data, isLoading, refetch } = useQuery(["bills", page, size], () =>
    fetch(
      `https://conservative-marks-69957.herokuapp.com/billing-list?page=${page}&size=${size}`
    ).then((res) => res.json())
  );
  const { data: Allbills } = useQuery("allbills", () =>
    fetch(`https://conservative-marks-69957.herokuapp.com/all-bill`).then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    fetch(`https://conservative-marks-69957.herokuapp.com/billing-listCount`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
        refetch();
      });
  }, [refetch]);
  useEffect(() => {
    const TotalPaid = Allbills?.reduce(
      (acc, item) => acc + parseInt(item.paidAmount),
      0
    );
    setTotal(TotalPaid);
    refetch();
  }, [Allbills, setTotal, refetch]);

  if (isLoading) {
    return <Loading />;
  }
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
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
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
      <div className="text-end mr-28 my-4 pagination">
        {[...Array(pageCount).keys()].map((num, index) => (
          <button
            key={index}
            onClick={() => setPage(num)}
            className="btn btn-sm btn-warning text-white font-bold mr-1"
          >
            {num + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
