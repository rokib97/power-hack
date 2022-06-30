import Swal from "sweetalert2";
const Rows = ({ bill, isLoading, refetch }) => {
  const { _id, email, fullName, paidAmount, phone } = bill;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/delete-billing/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <tr>
        <th>{_id}</th>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{paidAmount}</td>
        <td>
          <label
            htmlFor="bill-modal"
            className="btn btn-sm btn-info text-white font-bold mr-2"
          >
            Edit
          </label>
          <label
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error text-white font-bold"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default Rows;
