import { useContext } from "react";
import Div from "../../components/Div/Div";
import Button from '../../components/button/Button'
import states from "../ProvideState/CreateContext";
import UserFilter from "../UserFilter/UserFilter";
import TicketSearch from "../usersearch/TicketSearch";
import BackUpData from "../BeackupData/BackupData";

import './AddTicket.css'
import AddNewUser from "../AddNewUser/AddNewUser";
import DeleteUser from "../DeleteUser/Deleteuser";
function AddTicket() {
    const { setShow, setfilterTicket, setstateSearch } = useContext(states)


    const modalShow = () => setShow(true)

    const initialData = () => {
        setstateSearch('')
        setfilterTicket([])

    }




    return (
        <Div className="container-fluid">
            <Div className="row m-1 verticle-center">
                <Div className="col-lg p-2" >
                    <TicketSearch />
                </Div>
                <Div className="col-lg m-1">

                    <UserFilter />

                </Div>
                <Div className="col-lg-5">

                    <BackUpData />
                    <AddNewUser />
                    <DeleteUser />
                    <Button className="btn btn-primary  m-1 p-2" onClick={initialData}>All Ticket</Button>
                    <Button className="btn btn-primary m-1 p-2 " onClick={modalShow} >Add Ticket</Button>
                </Div>
            </Div>
        </Div>

    )
}

export default AddTicket;