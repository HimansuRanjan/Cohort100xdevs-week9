import { useEffect, useState } from 'react';

function useInterval(callback, time){
  useEffect(()=>{
    const interval = setInterval(callback,time);

    return ()=>{
      clearInterval(interval);
    }
  },[callback,time])

}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App