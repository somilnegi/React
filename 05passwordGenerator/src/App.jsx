import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // State variables for password length, inclusion of numbers, special characters, and the generated password
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Reference to the password input field for copying functionality
  const passwordRef = useRef(null);

  // Function to generate a random password based on selected options
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+= "0123456789";  // Include numbers if checked
    if(charAllowed) str+="!@#$%^&*()-_=+{}[]~`";  // Include special characters if checked

    // Generate random password with specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);  
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  // Function to copy the generated password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  // Select the text in the input field
    window.navigator.clipboard.writeText(password);  // Copy text to clipboard
  }, [password])

  // Automatically generate a new password when dependencies change
  useEffect(() => {  passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-center text-white my-4'>Password Generator</h1>
        
        {/* Input field to display the generated password with a copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        {/* Controls for password length and character inclusion */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range" 
              min={8}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
      </div>
  )
}

export default App