/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [residenceNumber, setResidenceNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [gender, setGender] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const fetchAddressByCep = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setStreet(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    if (cep.length === 8) {
      fetchAddressByCep(cep);
    }
  }, [cep]);

  const options = ["Masculino", "Feminino", "Outros"];

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password,
      );

      const userDocRef = doc(firestore, "users", userCredential.user.uid);
      const userRelationsRef = doc(
        firestore,
        "userConsults",
        userCredential.user.uid,
      );
      const userData = {
        uid: userCredential.user.uid,
        fullName,
        email,
        gender,
        birthdate: new Date(birthdate),
        address: {
          addressDetail,
          cep,
          city,
          neighborhood,
          residenceNumber,
          street,
          state,
        },
      };
      await setDoc(userDocRef, userData);
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
      await setDoc(userRelationsRef, {});
      navigate("/");
    } catch (error) {
      return;
    }
  }

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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Data de Nascimento</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Sua data de nascimento"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">CEP</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Endereço</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu endereço"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Número da residencia</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu número"
                value={residenceNumber}
                onChange={(e) => setResidenceNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Bairro</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu bairro"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Complemento</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seu complemento"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cidade</label>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled
                placeholder="Sua cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <input
                className="input"
                type="text"
                disabled
                placeholder="Seu estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
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
          <div className="field">
            <label className="label">Confirme sua senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gênero</label>
            <div className="control">
              <div className="select">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
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
              <button
                disabled={loading}
                type="submit"
                className="button is-primary"
              >
                Cadastrar
              </button>
            </div>
            <div className="control">
              <Link to="/log-in">
                <button type="button" className="button is-link">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
