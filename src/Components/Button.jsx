/* eslint-disable react/prop-types */
const Button = ({
  children,
  bg,
  color,
  size,
  hoverBg,
  hoverColor,
  handler,
  params,
  btnType,
  options,
}) => {
  return (
    <button
      type={btnType}
      onClick={params ? () => handler(params) : handler}
      className={`px-4 py-2 font-semibold rounded-md ${bg ? "" : "bg-zinc-800"} ${
        color ? color : "text-white"
      } ${size ? size : "text-xl"} ${hoverBg ? hoverBg : "hover:bg-blue-800"} ${
        hoverColor ? hoverColor : "hover:text-white"
      } ${options ? options : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
