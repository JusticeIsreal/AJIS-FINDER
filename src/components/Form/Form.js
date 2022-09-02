import { TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_USERS, GET_EMPPLOYEE } from "../../api/api";
import { Button, Modal } from "@mantine/core";

function Form() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  // const [age, setAge] = useState("");

  const changeName = (e, name) => {
    // console.log(name);
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

  const postDetails = () => {
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
      .put(GET_EMPPLOYEE + 83, userInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div>
        <TextInput
          label="First name"
          value={firstname}
          onChange={(e) => changeName(e, "firstname")}
        />
        <TextInput
          label="last name"
          value={lastname}
          onChange={(e) => changeName(e, "lastname")}
        />
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => changeName(e, "email")}
        />
        <TextInput
          label="Salary"
          value={salary}
          onChange={(e) => changeName(e, "salary")}
        />
        <TextInput
          label="Gender"
          value={gender}
          onChange={(e) => changeName(e, "gender")}
        />
        <TextInput
          label="Department"
          value={department}
          onChange={(e) => changeName(e, "department")}
        />
        {/* <TextInput label="Age" value={age} onChange={(e) => e.target.value} /> */}
      </div>
      <Button type="button" onClick={postDetails} style={{ marginTop: "10px" }}>
        ADD NEW INPUT
      </Button>
    </div>
  );
}

export default Form;
