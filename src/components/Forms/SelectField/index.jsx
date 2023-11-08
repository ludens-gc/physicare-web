const SelectField = ({ label, value, onChange, options }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
