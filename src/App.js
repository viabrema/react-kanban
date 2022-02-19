import { store } from './store';
import { Provider } from 'react-redux';
import Kanban from './kanban/Kanban';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Kanban></Kanban>
      </div>
    </Provider>
  );

}

export default App;
