import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Modal = ({ refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    let bill = {
      fullName: data.fullname,
      email: data.email,
      phone: data.phone,
      paidAmount: data.amount,
    };
    // adding bill
    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bill),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Successfully Saved Data");
      });
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Fullname"
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "Fullname is required",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors?.fullname?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors?.fullname?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "please provide an valid email",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors?.email?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors?.email?.message}
                  </span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span class="label-text-alt text-error">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  minLength: {
                    value: 11,
                    message: "enter exact 11 digits",
                  },
                  maxLength: {
                    value: 11,
                    message: "enter exact 11 digits",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors?.phone?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors?.phone?.message}
                  </span>
                )}
                {errors?.phone?.type === "minLength" && (
                  <span class="label-text-alt text-error">
                    {errors?.phone?.message}
                  </span>
                )}
                {errors?.phone?.type === "maxLength" && (
                  <span class="label-text-alt text-error">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="number"
                placeholder="Amount"
                {...register("amount", {
                  required: {
                    value: true,
                    message: "Amount is required",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors?.amount?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors?.amount?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <input
                type="submit"
                value="submit"
                className="btn btn-success w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
