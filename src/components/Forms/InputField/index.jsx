import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputField = ({ label, type, placeholder, value, onChange, icon }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className={icon ? "control has-icons-left" : "control"}>
        {icon && (
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
