type GreetingProps = {
  name: string;
};

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}</div>;
};
