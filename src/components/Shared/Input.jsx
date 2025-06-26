const Input = (props) => {
  const { type, name, label, placeholder,defaultValue } = props || {};
  return (
    <div className="">
      <label className="text-sm text-blue-900">{label}{label ? "*" : "" }</label>
      <br />
      <input
        className="w-full border-gray-300 p-2 placeholder:text-[13px] placeholder:pl-2 my-2 rounded"
        type={type}
        name={name}
        placeholder={placeholder}
        required
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
