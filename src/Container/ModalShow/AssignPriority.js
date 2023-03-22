import Div from "../../components/Div/Div";
import Input from "../../components/input/Input";

const AssignPriority = ({defaultValue}) => {
    return (
        <>
        <label>Priority</label>
                            <Input type="range" name="priority" min="1" max="3" className="col-12" defaultValue={defaultValue} />
                            <Div className="priority" >
                                <span>Low</span>
                                <span>Medium</span>
                                <span>High</span>
                            </Div>
        </>
    )
}
export default AssignPriority;