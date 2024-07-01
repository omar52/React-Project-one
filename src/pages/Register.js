import { useState } from "react";
import { axiosInstance } from "../Api/Api";

const Register = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormError, setUserFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const handleFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });

    switch (e.target.name) {
      case "name":
        setUserFormError({
          ...userFormError,
          name:
            e.target.value.length === 0
              ? "This field is required"
              : e.target.value.length < 3
              ? "Min.length is 3"
              : null,
        });
        break;
      case "email":
        setUserFormError({
          ...userFormError,
          email:
            e.target.value.length === 0
              ? "This field is required"
              : e.target.value.length < 3
              ? "Min.length is 3"
              : !/.+@.+\.[A-Za-z]+$/.test(e.target.value)
              ? "Enter A valid Email"
              : null,
        });
        break;
      case "userName":
        setUserFormError({
          ...userFormError,
          userName:
            e.target.value.length === 0
              ? "This field is required"
              : e.target.value.length < 3
              ? "Min.length is 3"
              : null,
        });
        break;
      case "password":
        setUserFormError({
          ...userFormError,
          password:
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
              e.target.value
            )
              ? `Invalid,
        Make sure your password contains at least [ 8 characters long ,one uppercase letter , one lowercase letter , one number , one special character]`
              : null,
        });
        break;
      case "confirmPassword":
        setUserFormError({
          ...userFormError,
          confirmPassword: !userForm.password
            ? "Enter password first"
            : !(e.target.value === userForm.password)
            ? "password does not match"
            
            : null,
        });
        break;

      default:
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userForm);
    axiosInstance
      .post("/register", userForm)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ width: "30vw", margin: "0 auto" }}
      className="d-flex justify-content-center mt-5 border rounded-5 p-5 text-center"
    >
      <form
        onSubmit={handleSubmitForm}
        className="text-start"
        style={{ width: "30vw" }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            onChange={handleFormChange}
            name="name"
            value={userForm.name}
            type="text"
            className={`form-control border-3 ${
              userFormError.name ? "border-danger" : ""
            }`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {userFormError.name && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormError.name}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email Address
          </label>
          <input
            placeholder="user_1@ddd.cc"
            onChange={handleFormChange}
            name="email"
            value={userForm.email}
            type="email"
            className={`form-control border-3 ${
              userFormError.email ? "border-danger" : ""
            } `}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {userFormError.email && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormError.email}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            onChange={handleFormChange}
            name="userName"
            value={userForm.userName}
            type="text"
            className={`form-control border-3 ${
              userFormError.userName ? "border-danger" : ""
            } `}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {userFormError.userName && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormError.userName}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onChange={handleFormChange}
            name="password"
            value={userForm.password}
            type="password"
            className={`form-control border-3 ${
              userFormError.password ? "border-danger" : ""
            } `}
            id="exampleInputPassword1"
          />
          {userFormError.password && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormError.password}
            </div>
          )}
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            onChange={handleFormChange}
            name="confirmPassword"
            value={userForm.confirmPassword}
            type="password"
            className={`form-control border-3 ${
              userFormError.confirmPassword ? "border-danger" : ""
            } `}
            id="exampleInputPassword1"
          />
          {userFormError.confirmPassword && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormError.confirmPassword}
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <button type="submit" class="btn btn-secondary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
