import { useContext, useState } from "react";
import Button from "../../components/button/Button";
import Div from "../../components/Div/Div";
import Priority from "../Priority/Priority";
import states from "../ProvideState/CreateContext";
import UserIcon from "../UserIcon/UserIcon";

const Ticket = ({ value }) => {
    const {modalValues, setmodalValue,removedTickets, setRemoveTickets} = useContext(states)
    const [showTilte, setshowTitle] = useState(false)
    const [showdescription, setshowdescription] = useState(false)

    const handleRemove = () => {
        const removedticket = modalValues.filter((user) => user.id !== value.id)
        setmodalValue(removedticket)
        const cloneremove = [...removedTickets]
        // const [remove] = modalValues.splice(index, 1, 0)
        const remove = modalValues.find((user) => user.id === value.id)
        cloneremove.push(remove)
        setRemoveTickets(cloneremove)
    }
    const shorttitle = value.title.slice(0, 20)
    const shortdescription = value.description.slice(0, 30)

    const handleTitleClick = () => {
        setshowTitle(!showTilte)
    }

    const tooltipTitle = (val) => (
        showTilte ? val.title
            : shorttitle.length > 19 ? shorttitle + "..."
                : shorttitle
    )

    const handleDescriptionClick = () => {
        setshowdescription(!showdescription)
    }

    const tooltipDescription = (val) => {
        return (
            showdescription ? val.description
                : shortdescription.length > 19 ? shortdescription + "...."
                    : shortdescription
        )
    }

    return (
        <Div className="ticket text-break" >
            <Div className="title" >
                {/* title / id */}
                <p>
                    <span id="id">{value.id}</span><br />
                    
                    {tooltipTitle(value)}
                    {value.title.length > 20 ?
                        <Button className="btn btn-dark p-1 mx-2" onClick={handleTitleClick}>{showTilte ? <span><b>&#10224;</b></span> : <span><b>&#10225;</b></span>} </Button>
                        : null
                    }
                </p>
                <p  onClick={ handleRemove} title="Remove">&#x2716;</p><br />
            </Div>
            
            {/* description */}

            <p>{tooltipDescription(value)}
                {value.description.length > 20 ?
                    <Button className="btn btn-secondary p-1 mx-2" onClick={handleDescriptionClick}>{showdescription ? <span><b>&#10224;</b></span> : <span><b>&#10225;</b></span>} </Button>
                    : null
                }
            </p>

            <UserIcon userName={value.assignto}/>
            
            <Priority val={value} />
        </Div>
    )
}

export default Ticket;