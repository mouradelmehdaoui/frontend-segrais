import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const API_URL = process.env.REACT_APP_API_URL + "/login";


  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(API_URL, {
        login,
        password
      });

      dispatch(loginSuccess(res.data.token));
    } catch (err) {
      setError("Login ou mot de passe incorrect");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Connexion</h3>

        {error && (
          <div className="alert alert-danger text-center py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Login</label>
            <input
              type="text"
              className="form-control"
              value={login}
              onChange={e => setLogin(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
