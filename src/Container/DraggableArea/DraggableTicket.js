 import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd"
import states from "../ProvideState/CreateContext";
import Ticket from "./Ticket";

const DraggableTicket = ({value,index}) => {
    const  {setShow, seteditTicket} = useContext(states)
   
   
    const modalShow = (e, value) => {
        setShow(true);
        seteditTicket(value);
        // console.log(val);
    }
    
    return (
        <Draggable key={value.id} draggableId={value.id} index={index}>
            {(provided) => (
                <>
                    <li {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onDoubleClick={(e) => modalShow(e, value)}
                        className="list-group-item list-items"
                        >

                        <Ticket {...{value}} {...{index}} />

                    </li>
                </>
            )}
        </Draggable>

    )
}

export default DraggableTicket;