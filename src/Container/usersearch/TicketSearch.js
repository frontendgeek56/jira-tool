import { useContext } from "react";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import states from "../ProvideState/CreateContext";
import './Ticketsearch.css'

function TicketSearch() {
    const { setstateSearch } = useContext(states)

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value
        setstateSearch(search)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input type="search" name="search" placeholder="search" className="p-1" />
            <Button type="submit" className="button" >&#128269;</Button>
        </Form>
    )
}

export default TicketSearch;