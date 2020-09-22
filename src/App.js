import React from 'react';

function App() {
  const [n, setN] = React.useState(0)
  return (
    <div className="App">
      {n}
      <button onClick={()=> {
        setN(n+1)
      }}>
        +1
      </button>
    </div>
  );
}

export default App;
