interface Props {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: string;
  onClick: () => void;
}

const Button = ({ type = "primary", children, onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
