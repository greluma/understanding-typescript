const EnumType = () => {
  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }

  const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
  };

  console.log(person.role);

  return <div>EnumType</div>;
};
export default EnumType;
