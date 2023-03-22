import { useContext } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../components/button/Button";
import Div from "../../components/Div/Div";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import states from "../ProvideState/CreateContext";
import Form from '../../components/form/Form'
import AssignUser from "./AssignUser";
import AssignPriority from "./AssignPriority";
import AssignStatus from "./AssignStatus";
function TicketModal() {

    const { modalValues, setmodalValue, show, setShow, editTicket, seteditTicket} = useContext(states)
    const ModalHide = () => {
        setShow(false);
        seteditTicket("")
    }
    const defaultValue = () => {
        return (
            (editTicket !== '') ?
                { id: editTicket.id, Title: editTicket.title, Description: editTicket.description, Status: editTicket.status, AssignTo: editTicket.assignto, priority: editTicket.priority }
                : { Title: "", Description: "", Status: "", AssignTo: "", priority: "" }
        )
    }
    const TicketSubmit = (e) => {
        e.preventDefault()
        setShow(false)
        const { title, description, status, assignto, priority } = e.target.elements;

        // new Data
        const newTicketData = {
            id: "id" + Math.floor(Math.random() * 10000).toString(),
            title: title.value, description: description.value,
            status: status.value, assignto: assignto.value, priority: priority.value
        }
        const editTicketData = {
            id: editTicket.id,
            title: title.value, description: description.value,
            status: status.value, assignto: assignto.value, priority: priority.value
        }
        const CloneTickets = [...modalValues]

        if (editTicket === '') {
            CloneTickets.push(newTicketData)
            setmodalValue(CloneTickets)
        }
        else {
            const remainingEditData = CloneTickets.filter(value => value.id !== editTicket.id)
            const findEditData = CloneTickets.filter(value => value.id === editTicket.id)
            const editdata = findEditData.map((val) => val = editTicketData)
            const concatData = remainingEditData.concat(editdata)
            setmodalValue(concatData)
        }
        seteditTicket("")
    }


    // console.log("modal show");
    return (
        <Div >
            <Div>
                <Modal show={show}>
                    <Modal.Header>
                        {editTicket === '' ?
                            <h3>Add Ticket</h3>
                            : <h3>Edit Ticket</h3>
                        }
                    </Modal.Header>
                    <Form onSubmit={TicketSubmit}>
                        <Modal.Body>

                            <label>Title</label>
                            <Input type="text" name="title" className="col-12 p-1 m-1" defaultValue={defaultValue().Title} />

                            <label>description</label>
                            <Textarea type="text" name="description" className="col-12 p-1 m-1" defaultValue={defaultValue().Description} />

                            <AssignStatus defaultValue={defaultValue().Status} />
                            <br />

                            <AssignPriority defaultValue={defaultValue().priority} />
                            <br />

                            <AssignUser defaultValue={defaultValue().AssignTo} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="button" className="btn btn-secondary mx-2" onClick={ModalHide}>Close</Button>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

            </Div>
        </Div>
    )
}
export default TicketModal;








// editdata[editindex].title = title.value
// editdata[editindex].description = desvalue
// editdata[editindex].descriptions = description.value
// editdata[editindex].status = status.value
// editdata[editindex].assignto = assignto.value
// editdata[editindex].shortName = intials