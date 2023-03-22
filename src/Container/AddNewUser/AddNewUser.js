import { Modal } from "react-bootstrap"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import Button from '../../components/button/Button'
import { useContext, useState } from "react"
import states from "../ProvideState/CreateContext"
const AddNewUser = () => {
    const { users, setusers ,colors, setcolor} = useContext(states)
    
    const [show, setShow] = useState(false)
    const [alertUser, setMsg] = useState(false)
    
    const modalShow = () => {
        setShow(true)
    }
    
    const modalHide = () => {
        setShow(false)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, username } = e.target.elements;
        const usersEmail = users.map(value => value.email)
        const usersUsername = users.map(value => value.username)
        const usersname = users.map(value => value.name)
        if (usersEmail.includes(email.value) || usersUsername.includes(username.value) || usersname.includes(name.value)) {
            setMsg(true)
        } else {
            const newuser = {
                id: Math.floor(Math.random() * 10000).toString(), name: name.value, email: email.value, username: username.value
            }

            const cloneuser = [...users]
            const clonecolors = [...colors]
            const color = '#' + Math.random().toString(15).slice(2, 8)
           
            clonecolors.push(color)
           
            setcolor(clonecolors)
            cloneuser.push(newuser)
           
            setusers(cloneuser)
            setShow(false)
            setMsg(false)
        }
    }
    return (
        <>
            <Button className="btn btn-primary p-2" onClick={modalShow}>Add User</Button>
            <Modal show={show}>
                <Modal.Header>
                    Add New User
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <label>Name</label>
                        <Input type="text" name="name" className="col-12" />
                        <label>username</label>
                        <Input type="text" name="username" className="col-12" />
                      
                        <br />
                        <label>Email</label>
                        <Input type="email" name="email" className="col-12" />
                        {
                            alertUser ? <span style={{ color: "red" }}>Please Enter New User</span>
                                : null
                        }
                    </Modal.Body>
                    <Modal.Footer>

                        <Button type="button" className="btn btn-secondary mx-2" onClick={modalHide}>Close</Button>

                        <Button type="submit" className="btn btn-primary ">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddNewUser;