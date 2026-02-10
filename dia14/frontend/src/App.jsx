import {useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from '../components/resgiter';
import Login from '../components/login';

function App() {
 const token = localStorage.getItem('token');
  const [mensaje, setMensaje] = useState('');
  
  useEffect(() => {
    if(token) {
      fetch('http://localhost:5000/api/protected', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => setMensaje(data.message))
      .catch(err => console.error('Error fetching protected data:', err));
    }
  }, [token]);

  return (
    <>
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
    <div>
      {mensaje ? <p>{mensaje}</p> : <p>No estás autenticado</p>}
    </div>
    </>
  )
}

export default App
