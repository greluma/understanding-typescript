const GenericClasses = () => {
  class DataStorage<T> {
    private data: T[] = [];
    addItem(item: T) {
      this.data.push(item);
    }
    removeItem(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem("Max");
  textStorage.addItem("Manu");
  console.log(textStorage.getItems());

  const mixStorage = new DataStorage<number | string>();
  mixStorage.addItem(1);
  mixStorage.addItem("manolo");
  console.log(mixStorage.getItems());

  return <div>GenericClasses</div>;
};
export default GenericClasses;
