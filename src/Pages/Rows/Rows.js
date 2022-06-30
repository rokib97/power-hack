const Rows = ({ bill }) => {
  const { _id, email, fullName, paidAmount, phone } = bill;
  return (
    <>
      <tr>
        <th>{bill ? _id : "“Generating Id"}</th>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{paidAmount}</td>
        <td>Blue</td>
      </tr>
    </>
  );
};

export default Rows;
