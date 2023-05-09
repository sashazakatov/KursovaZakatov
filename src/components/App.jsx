import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template
      </div>
      } />
    </Routes>
  );
};
