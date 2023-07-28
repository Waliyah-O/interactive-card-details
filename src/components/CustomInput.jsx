const CustomInput = (props) => {
  const { isLabel, labelText } = props;
  return (
    <div className="inputMain">
      {isLabel && <label htmlFor={labelText}>{labelText}</label>}
      <div className="inputField">
        <input className="inputArea" type="text" {...props} />
      </div>
    </div>
  );
};

export default CustomInput;
