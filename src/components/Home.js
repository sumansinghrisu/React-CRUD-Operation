import "../styles.scss";
import { useEffect, useState } from "react";
import Data from "../Data.json";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const addEmployee = () => {
    navigate("/addEmployee");
  };

  useEffect(() => {
    // Fetching data from the imported JSON
    setUsers(Data);
  }, []); // Empty dependency array

  return (
    <>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Dob</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                {/* It's good to have a 'key' prop for elements in a list */}
                <td>{index + 1}.</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contactNumber}</td>
                <td>{user.dob}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add__employee" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
    </>
  );
}
