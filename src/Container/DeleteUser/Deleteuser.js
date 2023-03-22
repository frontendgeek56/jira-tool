import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from '../../components/form/Form';
import Button from '..//../components/button/Button'
import states from '../ProvideState/CreateContext';
import UsersName from '../UsersName/usersname';
const DeleteUser = () => {
    const {users, setusers,modalValues, setmodalValue ,removedTickets, setRemoveTickets} = useContext(states)
    const [deleteusermodal, setdeletemodal] = useState(false)
    const modalshow = () => { setdeletemodal(true) }
    const modalHide = () => { setdeletemodal(false) }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectName = e.target.name.value
        setdeletemodal(false)
        const removeuser = users.filter((value)=> value.name !== selectName)
        const removeModal = modalValues.filter((value)=> value.assignto !== selectName)
        const remove = removedTickets.filter((value)=> value.assignto !== selectName)
        setusers(removeuser)
        setmodalValue(removeModal)
        setRemoveTickets(remove)
    }
    return (
        <>
            <Button className="btn btn-primary m-1 p-2" onClick={modalshow}>Delete User</Button>
            <Modal show={deleteusermodal}>
                <Modal.Header>Delete User</Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <select className="form-select mt-2 border border-dark" name="name">
                            <UsersName />
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={modalHide}>Close</Button>
                        <Button type="submit" className="btn btn-danger" >Delete</Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default DeleteUser;