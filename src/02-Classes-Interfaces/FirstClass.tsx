const FirstClass = () => {
  class Department {
    private employees: string[] = [];

    constructor(private name: string, private readonly id: number) {}

    showInfo() {
      console.log(this.name, this.id);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    employeesInfo() {
      console.log(this.employees.length, this.employees);
    }
  }

  const apartment1 = new Department("Apartment 1", 222555);
  apartment1.showInfo();
  apartment1.addEmployee("John Doe");
  apartment1.employeesInfo();

  return <div>FirstClass</div>;
};
export default FirstClass;
