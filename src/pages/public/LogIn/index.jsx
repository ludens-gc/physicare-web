import { Link } from "react-router-dom";
import { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../components/Forms/InputField";
import FormBox from "../../../components/Forms/FormBox";
import Button from "../../../components/Button";
import ButtonBox from "../../../components/Forms/ButtonComponents/ButtonBox";
import ButtonDiv from "../../../components/Forms/ButtonComponents/ButtonDiv";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleLogin = () => {
    return;
  };

  return (
    <FormBox
      title="Physicare"
      subtitle="Faça o login para acessar a página principal"
    >
      <InputField
        label="Email"
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={handleEmailChange}
        icon={faEnvelope}
      />
      <InputField
        label="Senha"
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={handlePasswordChange}
        icon={faLock}
      />
      <ButtonBox>
        <ButtonDiv>
          <Button type="button" onClick={handleLogin} className="is-primary">
            Entrar
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Link to="/sign-up">
            <Button type="button" className="is-link">
              Cadastrar-se
            </Button>
          </Link>
        </ButtonDiv>
      </ButtonBox>
    </FormBox>
  );
}

export default LogIn;
