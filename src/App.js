import { useState } from 'react';
import './App.css';
function App() {
  const [value, setvalue] = useState(0);

  function Prime (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  return (
    <div className='card' style={{marginLeft:"40%"}}>
      <button style={{marginLeft:"10%"}} disabled={value === 0} onClick={() => setvalue(value - 1)}>-1</button>
      <button onClick={() => setvalue(value + 1)}>+1</button><br></br><br></br>
      <button style={{marginLeft:"8%"}} onClick={() => setvalue(0)}>Reset Count</button>
      <h2 style={{marginLeft:"12%"}}>{value}</h2>
      <h3 style={{ color: 'black' }}>Prime num is: {Prime(value) ? 'True' : 'False'}</h3>
      <h3 style={{ color: 'black' }}>Composite num is:</h3>
    </div>
  );
}
export default App;
