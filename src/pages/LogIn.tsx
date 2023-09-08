import { useForm } from "react-hook-form";
import logo from "../images/image.png";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="container "style={{fontFamily:'Prompt'}}>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center mb-3 ">
            <img src={logo} alt="Logo Openlandscape" />
          </div>
          <div className="d-flex justify-content-center">
            <form action="">
              <div className="d-flex justify-content-center" style={{fontSize:'25px',color:'#24406D'}}>เข้าสู่ระบบ</div>
              <div className="mb-3 ">
                <div className="input-group mb3" style={{ width: "350px" }}>
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
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button style={{width:'250px',backgroundColor:'#71BC1E',border:'none',}} type="submit">เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center flex-column">
            <div><p>ลืมรหัสผ่าน</p> <p>คลิกที่นี่</p></div>
            <button type="button">สร้างบัญชีผู้ใช้งานโดย OPENLANDSCAPE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
