import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const { handleRegister,manageProfile} = useContext(authContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if (password !== conPassword) {
      setError("Password did not match ");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("at least one lowercase");
      return;
    }
    console.log(name, image, email, password, conPassword);

    handleRegister(email, password)
    .then(res =>{
       manageProfile(name,image) 
    })
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Name
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          Image
          <input
            name="image"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          Email
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          Password
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
          Confirm Password
          <input
            name="conPassword"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
