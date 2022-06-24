import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import FullPageSpinner from "../../components/common/FullPageSpinner";
import { axiosPost } from "../../utils/AxiosApi";
import { loginUrl } from "../../utils/Constants";
import { displayErrorAlert } from "../../utils/DisplayMessage";

function LoginPage(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [capsOn, setCapsOn] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      if (email === "" || password === "") {
        swal("Error", "Email or Password missing");
      } else {
        handleLogin();
      }
    }
    if (e.getModifierState("CapsLock")) {
      setCapsOn(true);
    } else {
      setCapsOn(false);
    }
  };

  const handleInputTypeChange = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      let param = {
        email: email,
        password: password,
      };
      setLoader(true);
      axiosPost(
        loginUrl,
        param,
        (response) => {
          if (response.status === 200) {
            let datum = response.data.data;
            localStorage.setItem("token", datum.token);
            navigate(`${process.env.PUBLIC_URL}/dashboard`);
          }
        },
        (err) => {
          displayErrorAlert(err);
          setLoader(false);
        }
      );
    } else {
      swal("Error", "Please enter Email and Password both", "error");
    }
  };

  return (
    <div className="container">
      {loader ? <FullPageSpinner text="Logging In ..." /> : null}
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="mt-2">
            <strong>Email</strong>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeydown}
            />
          </div>
          <div className="mt-2">
            <strong>Password</strong>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeydown}
            />
            {capsOn ? (
              <div>
                <strong>Caps Lock is On</strong>
              </div>
            ) : null}
          </div>
          <div className="row mt-3">
            <div className="col text-end">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
              <button
                className="btn btn-danger"
                onClick={handleCancel}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
