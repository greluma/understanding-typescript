const IndexProperties = () => {
  // * Index Properties (Propiedades de índice)
  // Las propiedades de índice nos permiten definir un tipo que puede tener tantas propiedades como queramos,
  // siempre y cuando estas cumplan con un patrón determinado.

  // Ejemplo 1

  interface ErrorContainer {
    [prop: string]: string;
  }

  const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a capital character",
  };

  console.log(errorBag);

  // Ejemplo 2
  interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
  }

  interface UserContainer {
    [prop: string]: User;
  }

  const users: UserContainer = {
    user1: {
      id: 1,
      name: "John",
      surname: "Doe",
      email: "gre@gre.com ",
    },
    user2: {
      id: 2,
      name: "Mano",
      surname: "Ro",
      email: "ro@ro.com",
    },

    user3: {
      id: 3,
      name: "Mari",
      surname: "Santa",
      email: "mar@amr.com",
    },
  };

  console.log(users);

  return <div>IndexProperties</div>;
};
export default IndexProperties;
