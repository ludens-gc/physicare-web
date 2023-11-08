/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormBox from "../../../components/Forms/FormBox";
import InputField from "../../../components/Forms/InputField";
import SelectField from "../../../components/Forms/SelectField";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "default", label: "Selecione" },
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outros", label: "Outros" },
  ];

  return (
    <FormBox
      title="Physicare"
      subtitle="Faça o cadastro para começar a utilizar nossos serviços"
    >
      <InputField
        label="Nome Completo"
        type="text"
        placeholder="Seu nome"
        value={name}
        // onChange={}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Seu email"
        value={email}
        // onChange={}
      />
      <InputField
        label="Senha"
        type="password"
        placeholder="Sua senha"
        value={password}
        // onChange={}
      />
      <InputField
        label="Confirme sua senha"
        type="password"
        placeholder="Seu email"
        value={confirmPassword}
        // onChange={}
      />
      <SelectField
        label="Gênero"
        value={selectedOption}
        // onChange={handleSelectChange}
        options={options}
      />
    </FormBox>
  );
}

export default SignUp;
