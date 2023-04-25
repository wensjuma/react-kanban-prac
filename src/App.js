
import './App.css';
import MainBoard from './pages/main.board';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <MainBoard />
      </div>
    </DndProvider>

  );
}

export default App;
