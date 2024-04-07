// import './App.css'

import { useMediaQuery } from 'react-responsive';

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <>
      {isTabletOrMobile ? (
        <h1 className="text-3xl font-bold underline">Hello Mobile</h1>
      ) : (
        <h1 className="text-3xl font-bold underline">Hello Desktop</h1>
      )}
    </>
  );
}

export default App;
