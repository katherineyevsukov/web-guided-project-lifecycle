import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Setsup State")
  const [name, setName] = useState("Warren");

  useEffect(() => {
    console.log("AppFunc: Component Has Mounted")
  }, [])

  useEffect(() => {
    console.log("AppFunc: Component Has Updated")
  }, [name])
  
  const handleClick = () => {
    setName("Allison");
  };

  console.log("AppFunc: Renders DOM")
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
