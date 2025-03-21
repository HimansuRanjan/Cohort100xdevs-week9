import React, { useEffect, useState } from 'react';


function useDebounce(inputValue, delay){
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(()=>{
    const time = setTimeout(()=>{
     setDebouncedValue(inputValue);
    
    }, delay)
    
    return ()=>{
      clearTimeout(time);
    }

  },[inputValue, delay]);

  return data;
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;