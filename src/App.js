import './App.scss';
import {useState} from 'react'

function App() {
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(0)

  return (
    <div className="App">
      <div className='counter'>
        <h2 className='counter__header'>First Counter</h2>
        <p className='counter__value' style={{color: `${counter1 > 0 ? 'green' : counter1 < 0 ? 'red' : 'black'}`}}>{counter1}</p>
        <div className='btns'>
          <div className='btn' onClick={() => setCounter1(prev => prev - 1)}>DECREASE</div>
          <div className='btn' onClick={() => setCounter1(0)}>RESET</div>
          <div className='btn' onClick={() => setCounter1(prev => prev + 1)}>INCREASE</div>
        </div>
      </div>
      <div className='counter'>
        <h2 className='counter__header'>Second Counter</h2>
        <p className='counter__value' style={{color: `${counter2 > 0 ? 'green' : counter2 < 0 ? 'red' : 'black'}`}}>{counter2}</p>
        <div className='btns'>
          <div className='btn' onClick={() => setCounter2(prev => prev - 1)}>DECREASE</div>
          <div className='btn' onClick={() => setCounter2(0)}>RESET</div>
          <div className='btn' onClick={() => setCounter2(prev => prev + 1)}>INCREASE</div>
        </div>
      </div>
    </div>
  );
}

export default App;
