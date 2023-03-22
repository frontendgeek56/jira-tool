import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../components/button/Button";
import Div from "../../components/Div/Div";
import states from "../ProvideState/CreateContext";

const BackUpData = () => {
    const { removedTickets, setRemoveTickets, modalValues, setmodalValue } = useContext(states)

    const [removemodal, setremovemodal] = useState(false)

    const handleRecycle = () => {
        setremovemodal(true)
    }

    const RemoveTicket = () => {
        if (removedTickets.length !== 0) {
            return removedTickets.length;
        }
    }

    const modalclone = [...modalValues]
    const cloneremoveTicket = [...removedTickets]

    const handleSetRemoveTicket = (val) => {


        const getremovedTicket = cloneremoveTicket.find((user) => user.id === val.id)
        const removeTicket = cloneremoveTicket.filter((user) => user.id !== val.id)

        modalclone.push(getremovedTicket);

        setmodalValue(modalclone)
        setremovemodal(false)
        setRemoveTickets(removeTicket)

    }
    const handleTitleRemove = (val) => {
        const removeTicket = cloneremoveTicket.filter((user) => user.id !== val.id)
        setRemoveTickets(removeTicket)
    }
    return (
        <>
            <Button type="button" className="btn btn-primary fw-bold fs-4 p-1 pt-0 m-1" onClick={handleRecycle} title="undo">&#9842;<span className="badge">{RemoveTicket()}</span></Button>
            <Modal show={removemodal}>
                <Modal.Header>
                    <h4>Removed Data</h4>
                </Modal.Header>
                <Modal.Body>
                    {
                        removedTickets.map((val, ind) => {
                            return (
                                <Div key={ind} className="border border-dark p-2 card m-1">
                                    <Button className="btn btn-dark p-1 m-2 col-1 position-absolute top-0 end-0" onClick={() => handleTitleRemove(val)}>&#x2716;</Button>
                                    <p><b>Id : </b>{val.id}</p>
                                    <p ><b> Title : </b>{val.title}</p>
                                    <p><b> Description : </b>{val.description}</p>
                                    <p><b> Assign To : </b>{val.assignto}</p>
                                    <p><b> Status :</b> {val.status}</p>

                                    <Button onClick={() => handleSetRemoveTicket(val)} className="btn btn-primary">&#9851;</Button>
                                </Div>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" onClick={() => setremovemodal(false)}>close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BackUpData;