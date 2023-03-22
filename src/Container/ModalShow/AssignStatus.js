import { useContext } from "react";
import states from "../ProvideState/CreateContext";

const AssignStatus = ({defaultValue}) =>{
    const {editTicket} = useContext(states)
    return (
       <>
        <label>Status</label>
        <select className="form-select mt-1 border border-dark" name="status" defaultValue={defaultValue}>
            {editTicket === '' ?
                <option>To Do</option>
                : editTicket.status === "Done" ?
                    <option>Done</option>
                    : <>
                        <option >To Do</option>
                        <option>Ready State</option>
                        <option >In Development</option>
                        <option >In Qa</option>
                        <option >Done</option>
                    </>
            }
        </select>
     </>   
    )
}
export default AssignStatus;