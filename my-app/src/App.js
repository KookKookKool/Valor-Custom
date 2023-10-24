import React, { useState } from "react";
import Home from './Home';
import Main from './Main';

export default function App() {
  const [isMainVisible, setIsMainVisible] = useState(false);

  return (
    <div>
      {isMainVisible ? (
        <Main />
      ) : (
        <Home />
      )}

      <button onClick={() => setIsMainVisible(!isMainVisible)}>
        {isMainVisible ? 'ปิด Home' : 'เปิด Home'}
      </button>
    </div>
  );
}
