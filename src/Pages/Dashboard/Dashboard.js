const Dashboard = () => {
  return (
    <>
      <div className="mb-4 py-2 px-8 overflow-x-auto bg-base-100 mt-6">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex gap-2">
            <label className="text-xl">Billing</label>
            <input
              type="text"
              id="billing"
              placeholder="Search item"
              className="w-full rounded border  focus:bg-transparent text-base outline-none py-1 px-3"
            />
          </form>
          <div>
            <button className="flex text-white bg-success border-0 py-1 px-4 focus:outline-none hover:bg-info rounded">
              Add New Bill
            </button>
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
