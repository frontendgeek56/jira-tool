import { useState } from "react";
import states from "../CreateContext";

function GlobalState({ children }) {

    const Data = [
       {id:"id" + Math.floor(Math.random()*1000).toString(), title:"Title 1",status:"To Do",assignto:"Leanne Graham",description:"React can also render on the server using Node and power mobile apps using React Native.", priority:"1"},
       {id: "id" + Math.floor(Math.random()*1000).toString(), title:"While drag and drop can have some advanced use cases, we’ll stick to basic list functionality for our walkthrough.",status:"To Do",assignto:"Ervin Howell",description:"Description-2",priority:"2"},
       {id:"id" + Math.floor(Math.random() * 1000), title:"Title 3",status:"Ready State",assignto:"Clementine Bauch",description:"React can also render on the server using Node and power mobile apps using React Native.",priority:"2"},
       {id:"id" + Math.floor(Math.random() * 1000), title:"Title 4",status:"Ready State",assignto:"Kurtis Weissnat",description:"Description-4",priority:"1"},
       {id:"id" +  Math.floor(Math.random() * 1000), title:"Title 5",status:"In Development",assignto:"Kurtis Weissnat",description:"Description-5",priority:"3"},
       {id:"id" +  Math.floor(Math.random() * 1000), title:"Title 6",status:"In Development",assignto:"Clementine Bauch",description:"Description-6",priority:"2"},
       {id:"id" + Math.floor(Math.random() * 1000), title:"Title 7",status:"In Qa",assignto:"Ervin Howell",description:"Description-7",priority:"3"},
       {id:"id" + Math.floor(Math.random() * 1000), title:"Title 8",status:"Done",assignto:"Leanne Graham",description:"Description-8",priority:"3"}
       
    ]        
    const [modalValues, setmodalValue] = useState([...Data]);
    const [show, setShow] = useState(false);
    const [editTicket, seteditTicket] = useState("")
    const [filterTicket,setfilterTicket] = useState([])
    const [stateSearch,setstateSearch] = useState("")
    const [users, setusers] = useState([])
    const [removedTickets, setRemoveTickets] = useState([])
    const [colors, setcolor] = useState( ["navy" , "green" , "red" , "chocolate", "darkorange" , "maroon", "coral",  "gray", "brown" , "yellowgreen"])
    return (
        <states.Provider value={{
            modalValues, setmodalValue,
            show, setShow,
            editTicket, seteditTicket,
            filterTicket,setfilterTicket,
            stateSearch,setstateSearch,
            users, setusers,
            removedTickets, setRemoveTickets,
            colors, setcolor
        }}>
            {children}
        </states.Provider>
    )
}

export default GlobalState;