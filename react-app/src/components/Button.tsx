interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}
export const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <>
      <div className="d-grid gap-4 d-md-flex justify-content-md-start">
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>  
    </>
  );
};

export default Button;
