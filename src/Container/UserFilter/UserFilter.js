import { useContext, useState } from "react";
import Div from "../../components/Div/Div";
import states from "../ProvideState/CreateContext";
import UserIcon from '../UserIcon/UserIcon'
import Button from '../../components/button/Button'

function UserFilter() {

    const { modalValues, setfilterTicket, filterTicket, setstateSearch } = useContext(states)
    const [ShowAll, setAllUser] = useState(false)
    const clonemodaldata = [...modalValues]
    const Assignuser = clonemodaldata.map((val) => val.assignto)
    
    var assignusername = Assignuser.filter((user, index) => Assignuser.indexOf(user) === index)
    const cloneticket = [...filterTicket]

    const handleClick = (e, val) => {
        if (!filterTicket.includes(val)) {
            cloneticket.push(val)
            setfilterTicket(cloneticket)
        } else {
            const removeFilter = cloneticket.filter(value => value !== val)
            // cloneticket.splice(cloneticket.indexOf(val), 1)
            setfilterTicket(removeFilter)

        }
        setstateSearch('')
    }

    const activeicon = (value) => {

        if (filterTicket.includes(value)) {
            return ("activeicon")
        } else {
            return ("initialicon")
        }
    }

    const filterIcon = assignusername.slice(0,5)
    
 
    
    const handleAll = () => {
        setAllUser(!ShowAll)
    }   
    return (
        <Div>
            { ShowAll ? assignusername.map((value)=>{
                    return (
                        <Div key={value}
                        className="icon"
                        onClick={(e) => handleClick(e, value)}
                    >
                        <UserIcon userName={value} className={activeicon(value)} />
                    </Div>
                    )
                }) 
            : filterIcon.map((value)=>{
                return(
                    <Div key={value}
                    className="icon"
                    onClick={(e) => handleClick(e, value)}
                >
                    <UserIcon userName={value} className={activeicon(value)} />
                </Div>
                )
            })
            }


           {filterIcon.length > 4 ?
            <Button  type="button" className="btn btn-circle btn-primary" onClick={handleAll}>{ ShowAll ?<> &#8656; </> : <>&#8658; </>}</Button>
            :null
        }
            </Div>
    )
}
export default UserFilter;