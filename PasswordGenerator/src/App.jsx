import { useCallback, useEffect, useState,useRef, useMemo } from "react";

function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [charAllowed,setCharAllowed]=useState(false);
  const [numAllowed,setNumAllowed]=useState(false);

  const passwordRef=useRef(null);
  const passwrodGenerator = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*/-+~|_"
    }
    for(let i=1;i<=length;i++){
      let passChar=Math.floor(Math.random()*str.length+1);
      pass=pass+str.charAt(passChar);
    }
    setPassword(pass);
  },[length,charAllowed,numAllowed,setPassword]);

  useEffect(()=>passwrodGenerator(),[passwrodGenerator]);
  // console.log(password);

  const copyToClipboard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordStrength=useMemo(()=>{
    if(length>=15 && numAllowed && charAllowed){
      return`Strong Password`;
    }
    if(length>=10 && numAllowed || charAllowed){
      return `Medium Password`;
    }
    return `Weak Password`;
  },[length,numAllowed,charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-6 my-12 text-orange-500 bg-gray-700">
      <h1 className="text-white text-4xl text-center mb-4">
        Password Generator
      </h1>

      {/* Password Input + Copy Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 p-2">
        <input
          type="text"
          className="outline-none w-full px-2 py-2"
          placeholder="password"
          value={password}
          ref={passwordRef}
          readOnly
        />

        <button onClick={copyToClipboard} className="outline-none bg-blue-600 text-white px-4" >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex text-sm gap-x-2">
        {/* Length */}
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />

          <label>Length:{length} </label>

          {/* Numbers */}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" defaultChecked={numAllowed} onChange={()=>setNumAllowed((prev)=>!prev)} id="numberInput" />

            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)} id="charInput" />

            <label htmlFor="characterInput">Characters</label>
          </div>

           <p className="text-white mt-3">Password Strength :{passwordStrength}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

