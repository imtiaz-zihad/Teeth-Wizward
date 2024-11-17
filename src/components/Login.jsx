import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Login = () => {
  const { handleGoogleLogin,handleLogin } = useContext(authContext);

  const [error,setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    handleLogin(email, password);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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

        <button className="btn" type="submit">
          Login
        </button>
      </form>
      {
        error && <p className="text-red-600">{error.split('/')[1].split(0,18)}</p>
      }
      <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
    </div>
  );
};

export default Login;
