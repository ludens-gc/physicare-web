function FormBox({ title, subtitle, children }) {
  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        {title && <h1 className="title is-1 has-text-centered">{title}</h1>}
        {subtitle && (
          <p className="subtitle is-6 has-text-centered">{subtitle}</p>
        )}
        <form className="box has-shadow">{children}</form>
      </div>
    </div>
  );
}

export default FormBox;
