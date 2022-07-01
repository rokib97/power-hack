import { toast } from "react-toastify";
import Form from "../../components/Form/Form";
const UpdatedModal = ({ bill, refetch, setBill }) => {
  const { _id } = bill || {};
  const handleModal = (data) => {
    let updatedBill = {
      fullName: data.fullname,
      email: data.email,
      phone: data.phone,
      paidAmount: data.amount,
    };
    fetch(
      `https://conservative-marks-69957.herokuapp.com/update-billing/${_id}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedBill),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setBill(null);
        toast.success("Successfully Updated Data");
      });
  };

  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-2xl font-folder text-center my-4 text-info">
            Update Billing Info
          </h1>
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Form handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
};

export default UpdatedModal;
