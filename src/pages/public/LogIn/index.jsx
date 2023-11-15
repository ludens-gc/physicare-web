import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function LogIn() {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(error);

  async function handleSubmit(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <h1 className="title is-1 has-text-centered">Physicare</h1>
        <p className="subtitle is-6 has-text-centered">
          Faça o login para começar a utilizar nossos serviços
        </p>
        <form className="box has-shadow" onSubmit={handleSubmit}>
          {error && (
            <div className="notification is-danger">
              <p>{`${error}`}</p>
            </div>
          )}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                disabled={loading}
                type="submit"
                className="button is-primary"
              >
                Login
              </button>
            </div>
            <div className="control">
              <Link to="/sign-up">
                <button type="button" className="button is-link">
                  Cadastrar-se
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
