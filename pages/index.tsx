type HomeProps = {
  title: string;
};

const Home = ({ title = 'react nextjs with typescript' }: HomeProps) => {
  return <h1>{title}</h1>;
};

export default Home;
