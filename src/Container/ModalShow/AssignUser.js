import UsersName from "../UsersName/usersname";

const AssignUser = ({ defaultValue}) => {
    // const handleAddNewUser =(event) =>{
    //        return( event.target.value === "Add New User" ? setNewUser(false)
    //         :null)
    // }
    return (
        <>
            <label>Assign To</label>
            <select className="form-select mt-2 border border-dark" name="assignto"
                // onClick={(event) => handleAddNewUser(event)}
                defaultValue={defaultValue}>
                <UsersName />
            </select>

        </>
    )
}

export default AssignUser;