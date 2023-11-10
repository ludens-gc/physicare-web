import { useAuth } from "../../../contexts/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <p>This is the Dashboard page.</p>
      <p>
        <strong>Email: </strong>
        {currentUser?.email}
      </p>
    </>
  );
}

export default Dashboard;
