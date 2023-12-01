const TypeGuards = () => {
  // Type Guards are used to check the type of a variable at runtime
  // and to perform different actions based on the type of the variable.

  // * Type Guard using typeof
  type Admin = {
    name: string;
    privileges: string[];
  };
  type Employee = {
    name: string;
    startDate: number;
  };

  type UnknownEmployee = Employee | Admin;

  const Mano: UnknownEmployee = {
    name: "Mano",
    privileges: ["create-server"],
    startDate: new Date().getFullYear(),
  };

  const printEmployeeInfo = (emp: UnknownEmployee) => {
    console.log("Name: " + emp.name);
    // Type Guard
    if ("privileges" in emp) {
      console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("Start Date: " + emp.startDate);
    }
  };

  printEmployeeInfo(Mano);

  // * Type Guard using instanceof
  class Car {
    drive() {
      console.log("Driving a car...");
    }
  }

  class Truck {
    drive() {
      console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
      console.log("Loading cargo ..." + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    // Type Guard
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  };

  useVehicle(v1);
  useVehicle(v2);

  // * Type Guard using discriminated union
  interface Bird {
    type: "bird";
    flyingSpeed: number;
  }

  interface Horse {
    type: "horse";
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  const moveAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
      case "bird":
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.runningSpeed;
        break;
    }
    console.log("Moving at speed: " + speed);
  };

  moveAnimal({ type: "horse", runningSpeed: 10 });

  return <div>TypeGuards</div>;
};

export default TypeGuards;
