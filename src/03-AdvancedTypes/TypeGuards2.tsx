import { useEffect } from "react";

const TypeGuards2 = () => {
  useEffect(() => {
    const userInput = document.getElementById("ejemplo") as HTMLInputElement;
    if (userInput) {
      console.log(userInput);
      userInput.value = "Hi there!";
    }
  }, []);

  return <div id="ejemplo">TypeGuards2</div>;
};

export default TypeGuards2;
