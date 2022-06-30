const Dashboard = () => {
  return (
    <>
      <div className="mt-12">
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
