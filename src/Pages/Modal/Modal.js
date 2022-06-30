const Modal = () => {
  const handlePurchase = (event) => {
    event.preventDefault();
    let bill = {
      fullName: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      paidAmount: event.target.amount.value,
    };
    console.log(bill);
  };
  return (
    <div>
      <input type="checkbox" id="bill-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="bill-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handlePurchase}
            className="grid grid-cols-1 gap-4 justify-items-center my-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="amount"
              placeholder="Paid Ammount"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit Data"
              className="btn btn-success w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
