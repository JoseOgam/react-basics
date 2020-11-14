import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <h2>Hello React</h2>
      <Child name=" I'm a child component " />
      <Checkbox />
    </div>
  );
}
const Child = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
     </div>
   )
}
 
const Checkbox = () => {
  let [checked, setChecked] = useState(false)
  useEffect(() => {
    alert(`you are about to change component state to ${checked}`)
  })
  return (
    <div>
      <input onChange={()=>setChecked(!checked)} type="checkbox" value={checked} />
      {checked ? "checkbox is marked" : "checkbox is unmarked"}
    </div>
  )
}
export default App;
