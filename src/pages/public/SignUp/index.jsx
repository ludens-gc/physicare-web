import React, { useState } from "react";
import Button from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const options = ["Masculino", "Feminino", "Outros"];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`
    name = ${name};
    email = ${email};
    password = ${password};
    gender = ${gender};
    `);
    if (password !== confirmPassword) {
      setError("Senhas não conferem");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/auth/log-in");
    } catch (error) {
      setError(`Erro ao criar conta!
      Erro: ${error}`);
    }
    setLoading(false);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSelectChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <h1 className="title is-1 has-text-centered">Physicare</h1>
        <p className="subtitle is-6 has-text-centered">
          Faça o cadastro para começar a utilizar nossos serviços
        </p>
        <form className="box has-shadow" onSubmit={handleSubmit}>
          {error && <div className="notification is-danger">{error}</div>}
          <div className="field">
            <label className="label">Nome Completo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirme sua senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Sua senha"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gênero</label>
            <div className="control">
              <div className="select">
                <select value={gender} onChange={handleSelectChange}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <Button disabled={loading} type="submit" className="is-primary">
                Cadastrar
              </Button>
            </div>
            <div className="control">
              <Link to="/auth/log-in">
                <Button type="button" className="is-link">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
