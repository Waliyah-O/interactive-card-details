const CustomInput = (props) => {
  const { isLabel, labelText } = props;
  return (
    <div className="inputMain">
      <div className="inputField">
        {isLabel && <label htmlFor={labelText}>{labelText}</label>}
        <input className="inputArea" type="text" {...props} />
      </div>
    </div>
  );
};

export default CustomInput;
