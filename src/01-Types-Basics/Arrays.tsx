const Arrays = () => {
  // * Arrays
  const hobbies = ["Sports", "Cooking"];
  const random = [];
  random.push("Sports");
  random.push(1);
  random.push(true);

  for (const i of hobbies) {
    console.log(i.toUpperCase());
  }

  // * Tuples: fixed length and type
  const mixt: [string, number] = ["Sports", 1];

  console.log(mixt);

  return <div>Arrays</div>;
};
export default Arrays;
