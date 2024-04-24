import Child from "./Child";

export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      <Child>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          possimus eos praesentium eveniet, aut amet eum sunt asperiores
          consequatur sit saepe quos quae! Sequi, enim ullam ad voluptatem
          dolorum placeat?
        </p>
        <label htmlFor="hello">HEllo</label>
        <input type="text" placeholder="hello"/>
        <button>Valider</button>
      </Child>
    </div>
  );
}
