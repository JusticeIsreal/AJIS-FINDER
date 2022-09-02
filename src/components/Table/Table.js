import { useState, useEffect } from "react";
import axios from "axios";
import { GET_USERS } from "../../api/api";
import { Link } from "react-router-dom";
import { Button, Modal } from "@mantine/core";

function Table() {
  const [employees, setEmployees] = useState([]);
  // const [displayModal, setDisplayModal] = useState([]);
  useEffect(() => {
    return () => {
      axios
        .get(GET_USERS)
        .then((response) => {
          setEmployees(response.data);
        })
        .catch((err) => {});
    };
  }, []);

  return (
    <>
      <Link to={"/add-user"}>
        <Button>Add user</Button>
      </Link>
      <Modal></Modal>
      {employees.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <table>
          <thead>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
          </thead>
          <tbody>
            {employees.length !== 0 &&
              employees.map((employee) => (
                <tr key={employee.id} onClick={() => {}}>
                  <td>
                    <Link to={`/user/${employee.id}`}>
                      {employee.firstname}
                    </Link>
                  </td>
                  <td>{employee.lastname}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.email}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.department}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Table;
