import { useForm } from "react-hook-form";
import logo from "../images/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container " style={{ fontFamily: "Prompt" }}>
        <div className="d-flex justify-content-center mb-3 ">
          <img src={logo} alt="Logo Openlandscape" />
        </div>
        <div
          className="d-flex flex-column justify-content-center"
          style={{
            width: "350px",
            height: "400px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 0 5px ",
            padding: "10px",
            margin: "10px",
          }}
        >
          <div className="d-flex justify-content-center flex-column">
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: "25px",
                color: "#24406D",
                marginBottom: "30px",
              }}
            >
              เข้าสู่ระบบ
            </div>
            <form action="">
              <div className="mb-3 ">
                <div className="input-group mb3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    className="form-control "
                    {...register("email")}
                    id="email"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group mb3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    className="form-control"
                    {...register("password")}
                    id="password"
                    type="text"
                  />

                  <div className="input-group-text">
                    <i className="fa-solid fa-eye-slash"></i>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <Link to={"/ToDo"}>
                  <button
                    style={{
                      width: "250px",
                      backgroundColor: "#71BC1E",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px",
                      color: "white",
                    }}
                    type="submit"
                  >
                    เข้าสู่ระบบ
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="d-flex justify-content-center flex-row ">
              <p style={{ margin: "0px", color: "gray" }}>ลืมรหัสผ่าน </p>
              <p style={{ margin: "0px", color: "blue" }}>คลิกที่นี่</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "gray",
              }}
            >
              หรือ
            </div>
            <button
              type="button"
              style={{
                padding: "5px 10px 5px 10px",
                border: "none",
                boxShadow: "0px 5px 5px -5px #333",
                background: "white",
              }}
            >
              สร้างบัญชีผู้ใช้งานโดย OPENLANDSCAPE
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-row ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            ติดต่อเจ้าหน้าที่
          </a>
        </div>
      </div>
    </>
  );
};

export default LogIn;
