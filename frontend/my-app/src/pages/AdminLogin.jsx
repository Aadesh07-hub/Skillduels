import { useState } from "react";
import "./AdminLogin.css";


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login:", email, password);
    alert("Login clicked (API next step)");
  };
return (
  <div className="admin-login-container">
    <div className="admin-login-card">
      <h2>Login</h2>
      <p className="login-subtitle">(Login to start 1v1 quiz battle)</p>


      <form onSubmit={handleSubmit}>
        <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);
}

export default AdminLogin;
