import logo from './logo.svg';
import './App.css';
import ColorBlack from './ColorBlock.js'

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red' ]
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlack color={color} />
    )
  }
  )
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
