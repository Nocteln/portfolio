type Props = {
  children: React.ReactNode;
  id: string;
};

const Title = ({ children, id }: Props) => {
  return (
    <h1
      id={id}
      className="text-4xl font-mono text-white decoration-green-400 m-44 font-extrabold underline"
    >
      {children}
    </h1>
  );
};

export default Title;
