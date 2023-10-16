import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [SpCharAllowed, setSpCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (SpCharAllowed) str += "!@#%^&*-_+=[]{}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, SpCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, SpCharAllowed, passwordGenerator]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 py-4 my-8 text-orange-500
      bg-gray-700 "
      >
        <h1 className="text-white text-cente my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3 "
            type="text"
            value={Password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none text-white px-3 py-0.5 shrink-0  bg-blue-600 hover:scale-95"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={SpCharAllowed}
              id="characterInput"
              onChange={() => {
                setSpCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">SpCharacters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
