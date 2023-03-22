import { useContext} from "react";
import states from "../ProvideState/CreateContext";

function UsersName() {
    const {users} = useContext(states)
  
    return (
        <>
            {
                users.map((name, index) => {
                    return <option key={index}>{name.name}</option>
                })
            }
        </>
    )
}

export default UsersName;