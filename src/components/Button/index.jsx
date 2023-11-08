const Button = ({ type, children, onClick, className }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
