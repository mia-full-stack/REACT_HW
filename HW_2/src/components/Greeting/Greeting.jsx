import "./Greeting.css"

function Greeting(props) {
  return <div className="greeting">Привет, {props.name}!</div>
}

export default Greeting;