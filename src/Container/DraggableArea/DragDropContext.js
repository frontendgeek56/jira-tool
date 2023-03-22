import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Div from "../../components/Div/Div";
import DroppableTicket from "./DroppableTicket";
import states from "../ProvideState/CreateContext";
import './DnD.css'
function DragDropList() {

    const { modalValues, setmodalValue, filterTicket, stateSearch } = useContext(states)

    const status = ["To Do", "Ready State", "In Development", "In Qa", "Done"]

    const ticket = [...modalValues]

    const handleOnDragEnd = (result) => {
        // console.log(result);
        const { destination, source } = result
        if (destination === null) {
            return;
        }
        const SourceIndex = source.index
        const DestinationIndex = destination.index
        const SourceId = source.droppableId
        const DestinationId = destination.droppableId

        const SourceStatus = ticket.filter((val) => val.status === SourceId)
        const RemainingTickets = ticket.filter((val) => val.status !== SourceId)
        const DestinationStatus = ticket.filter((val) => val.status === DestinationId)
        const RemainingSourceDestination = ticket.filter((val) => (val.status !== DestinationId) && (val.status !== SourceId))

        if (SourceId === "Done") {
            return;
        } else if (DestinationId !== SourceId) {
            SourceStatus[SourceIndex].status = DestinationId
            const [reorderedTicket] = SourceStatus.splice(SourceIndex, 1);
            DestinationStatus.splice(DestinationIndex, 0, reorderedTicket)
            const concat = RemainingSourceDestination.concat(DestinationStatus, SourceStatus)
            setmodalValue(concat)

        }
        else {

            const [reorderedTicket] = SourceStatus.splice(SourceIndex, 1);
            SourceStatus.splice(DestinationIndex, 0, reorderedTicket);
            const ConcatDragTicket = RemainingTickets.concat(SourceStatus)
            setmodalValue(ConcatDragTicket)

        }
        // setfilterTicket([])
    }

 

    return (
        <Div className="border border-dark">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Div className="drag-h-group">
                    {
                        status.map((statusvalue) => {
                            return (
                                <DroppableTicket key={statusvalue} status={statusvalue}
                                    TicketValue={modalValues.filter((value) => 
                   stateSearch === "" && filterTicket.length === 0 ? value.status === statusvalue
           : stateSearch !== "" || filterTicket.length !== 0 ? (value.status === statusvalue && filterTicket.includes(value.assignto)) ||(value.status === statusvalue && value.title.includes(stateSearch)) 
           : (value.status === statusvalue && filterTicket.includes(value.assignto ) && value.title.includes(stateSearch) )
                                        )} />
                            )
                        })
                    }
                </Div>
            </DragDropContext>
        </Div>
    )
}

export default DragDropList;





        //    stateSearch === "" && filterTicket.length === 0 ? value.status === statusvalue
        //    : stateSearch !== "" || filterTicket.length !== 0 ? (value.status === statusvalue && filterTicket.includes(value.assignto)) ||(value.status === statusvalue && value.title.includes(stateSearch)) 
        //    : (value.status === statusvalue && filterTicket.includes(value.assignto ) && value.title.includes(stateSearch) )