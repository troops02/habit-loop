function Button({ onClick, styles, children }) {
  return (
    <button onClick={onClick} className={`${styles} cursor-pointer `}>
      {children}
    </button>
  );
}

export default Button;
