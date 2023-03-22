import { Fragment} from "react"
import { Droppable } from "react-beautiful-dnd"
import LocalDiv from "../../components/Div/Div"
import "./DnD.css"
import DraggableTicket from "./DraggableTicket"
function DroppableTicket({ status, TicketValue }) {
    return (
        <LocalDiv className="dnd-group" >
           {/* To DO List Hearder */}
            <LocalDiv className="dnd-h-group">
                <h6>{status}</h6>
            </LocalDiv>
           {/* To Do LIst */}
            <LocalDiv className="dnd-item ">
                <Droppable droppableId={status}>
                    {(provided) => (
                        <ul className="list-group"
                            {...provided.droppableProps}
                            ref={provided.innerRef}>

                            {TicketValue.map((value, index) => {
                               
                                return (
                                    <Fragment key={value.id} >
                                        {

                                            <DraggableTicket value={value} index={index}  />
                                        }
                                    </Fragment>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </LocalDiv>
        </LocalDiv>
    )
}
export default DroppableTicket;