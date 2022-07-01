import { toast } from "react-toastify";
import Form from "../../components/Form/Form";

const Modal = ({ refetch }) => {
  const handleModal = (data) => {
    let bill = {
      fullName: data.fullname,
      email: data.email,
      phone: data.phone,
      paidAmount: data.amount,
    };
    // adding bill
    fetch("https://conservative-marks-69957.herokuapp.com/add-billing", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(bill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success(data.message);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="bill-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-2xl font-folder text-center my-4 text-info">
            Add Billing Info
          </h1>
          <label
            htmlFor="bill-modal"
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

export default Modal;
