import { useForm } from "react-hook-form";
const Form = ({ handleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    handleModal(data);
    reset();
  };

  return (
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
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
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
  );
};

export default Form;
