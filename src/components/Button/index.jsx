import s from './Button.module.css';

function Button({
  type,
  onClick,
  text = '',
  disabled = false,
  dataAction = null,
  icon = '',
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        data-action={dataAction}
      >
        {text}
        {icon && (
          <svg width="30" height="30">
            <use href={icon}></use>
          </svg>
        )}
      </button>
    </>
  );
}

export default Button;
