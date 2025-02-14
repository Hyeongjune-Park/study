/************************************ */
/*   잘못된 useCallBack 이용 예제      */
/************************************ */


import React, { useState, useCallback } from "react";

const WrongCallbackExample = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("현재 count:", count);
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Count</button>
    </div>
  );
};

export default WrongCallbackExample;