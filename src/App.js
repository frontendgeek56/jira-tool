import { useContext, useEffect } from 'react';
import './App.css';
import Div from './components/Div/Div';
import AddTicket from './Container/AddTicket/AddTicket';
import DragDropList from './Container/DraggableArea/DragDropContext';
import HearderTodo from './Container/HeaderTodo/HeaderTodo';
import TicketModal from './Container/ModalShow/modalShow';
import states from './Container/ProvideState/CreateContext';

function App() {
  const {users, setusers} = useContext(states)
  useEffect(() => {
    if (users.length === 0) {
        const userApi = `https://jsonplaceholder.typicode.com/users`
        fetch(userApi, {
            method: 'GET'
        })
            .then((Response) => Response.json())
            .then(usersdata => setusers(usersdata))
    }
    
}, [users,setusers])
  return (
      <Div className="App">
        <HearderTodo />
        <AddTicket />
        <TicketModal />
        <DragDropList/>
      </Div >

  );
}

export default App;
