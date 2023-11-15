import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

function Dashboard() {
  const { fullName, email, age, gender, address, roles } =
    useContext(AuthContext);

  return (
    <>
      <h1>Dashboard</h1>
      <p>This is the Dashboard page.</p>
      <p>User Info</p>
      <p>full name: {fullName}</p>
      <p>email: {email}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
      <p>address: {`City: ${address?.city}, State: ${address?.state}`}</p>
      <p>role: {roles}</p>
    </>
  );
}

export default Dashboard;
