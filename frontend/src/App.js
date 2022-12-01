import GlobalProvider from './providers';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </>
  );
}

export default App;
