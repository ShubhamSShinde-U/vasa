import './input.scss';
function Input(props: any) {
  const { type='text', placeholder, value, label, onChange, ...others } = props;
  return (
    <div className="input-wrapper">
      <div className="input-label">{label}</div>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        value={value}
        {...others}
      />
    </div>
  );
}

export default Input;
