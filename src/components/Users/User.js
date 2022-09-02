import axios from "axios";
import { TextInput, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { GET_EMPPLOYEE, GET_USERS } from "../../api/api";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [gender, setGender] = useState();
  const [department, setDepartment] = useState();

  useEffect(() => {
    axios
      .get(GET_EMPPLOYEE + id)
      .then((res) => {
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setEmail(res.data.email);
        setDepartment(res.data.department);
        setGender(res.data.gender);
        setSalary(res.data.salary);
      })
      .catch((err) => {});
  }, [id]);

  const updateForm = (e, name) => {
    switch (name) {
      case "firstname":
        setFirstName(e.target.value);
        break;
      case "lastname":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "salary":
        setSalary(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "department":
        setDepartment(e.target.value);
        break;

      default:
        break;
    }
  };
  const updateDetails = () => {
    console.log("object");
    const userInfo = {
      firstname,
      lastname,
      email,
      salary,
      gender,
      department,
    };

    axios
      .put(GET_EMPPLOYEE + id, userInfo)
      .then((response) => {})
      .catch((error) => {});

    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
    setGender("");
    setSalary("");
  };
  return (
    <div>
      {firstname === "o" ? (
        <h1> Loading</h1>
      ) : (
        <>
          <form>
            <TextInput
              label="First name"
              value={firstname}
              onChange={(e) => updateForm(e, "firstname")}
            />
            <TextInput
              label="last name"
              value={lastname}
              onChange={(e) => updateForm(e, "lastname")}
            />
            <TextInput
              label="Email"
              value={email}
              onChange={(e) => updateForm(e, "email")}
            />
            <TextInput
              label="Salary"
              value={salary}
              onChange={(e) => updateForm(e, "salary")}
            />
            <TextInput
              label="Gender"
              value={gender}
              onChange={(e) => updateForm(e, "gender")}
            />
            <TextInput
              label="Department"
              value={department}
              onChange={(e) => updateForm(e, "department")}
            />
            {/* <TextInput label="Age" value={age} onChange={(e) => e.target.value} /> */}
            <Button
              type="button"
              onClick={updateDetails}
              style={{ marginTop: "10px" }}
            >
              UPDATE LIST
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default User;
