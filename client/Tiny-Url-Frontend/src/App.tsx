// import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/container';
import Footer from './components/Footer/Footer';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
