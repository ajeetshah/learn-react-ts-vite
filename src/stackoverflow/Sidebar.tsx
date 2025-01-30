import { useProductsStore } from "./store";

export function Sidebar() {
  const { searchTerm, setSearchTerm } = useProductsStore();

  function handleItemSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  console.log("Rendering Sidebar", searchTerm);

  return (
    <>
      <input
        className={"w-full p-1 rounded-md text-xl"}
        placeholder={"Search for product..."}
        value={searchTerm}
        onChange={handleItemSearchTerm}
      />
    </>
  );
}
