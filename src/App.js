import ClientView from './containers/ClientView/ClientView';
import Management from './containers/Management/Management';
import { Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<div>hola</div>} />
          <Route path="management/:businessId" element={<Management />} />
          <Route path="menu/:businessId" element={<ClientView />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Routes>


    </div>

  );
}

export default App;
