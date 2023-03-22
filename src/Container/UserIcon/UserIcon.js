import { useContext } from "react";
import states from "../ProvideState/CreateContext";

function UserIcon({ userName, className }) {
    const { users, colors } = useContext(states)
    const short = userName.split(' ').map(name => name[0]).join('').toUpperCase()
    const usersname = users.map((value) => value.name)
    // console.log(usersname[10]);
    const BgColor = () => {
            // var  i = usersname.findIndex(val=> val=== userName)
            const i = usersname.indexOf(userName)
            var bg;
            switch (usersname[i]) {
                case usersname[i]: bg = colors[i]
                    break;
                default: bg = "black"
            }
            return bg;
        
    }

    const style = {
        "backgroundColor": BgColor(),
      
        "padding": "9px",
        "borderRadius": "50%",
        "color": "white",

    }
    // console.log(val);
    return (
        <span className={className} title={userName} style={style}>
            {short}
        </span>)
}

export default UserIcon




    // var BgColor ;
    // switch(userName){
    //     case 'Leanne Graham' : BgColor = "navy";
    //     break;
    //     case 'Ervin Howell' : BgColor = "Red";
    //     break;
    //     case  'Clementine Bauch' : BgColor = "green";
    //     break;
    //     case  'Patricia Lebsack' : BgColor = "chocolate";
    //     break;
    //     case 'Chelsey Dietrich' : BgColor = "blue";
    //     break;
    //     case 'Mrs. Dennis Schulist' : BgColor = "coral";
    //     break;
    //     case  'Kurtis Weissnat' : BgColor = "darkorange";
    //     break;
    //     case  'Nicholas Runolfsdottir V' : BgColor = "midnightblue";
    //     break;
    //     case 'Glenna Reichert' : BgColor = "orangered";
    //     break;
    //     case  'Clementina DuBuque' : BgColor = "gray";
    //     break;

    //     default: BgColor = "black"
    //    }

      // const colors = ["navy" , "green" , "red" , "chocolate", "darkorange" , "maroon", "coral",  "gray", "brown" , "yellowgreen",]
    // console.log(color);
    // console.log(assignusername);
    // // console.log(usersname.length);
    // const randomcolor = () =>{
    //     const clone = [...color]

    //     for(let i=0; i < usersname.length ; i++){
    //        clone.push('#' + Math.floor(Math.random()*16777215).toString(16) )
    //     }
    //     // setcolor(clone)
    //     return(clone )
    // } 
    // console.log(randomcolor());
    // console.log(color);
    // const BGCOLOR = () => {
    //     const clone = [...color]
    //     clone.push('#' + Math.floor(Math.random()*16777215).toString(16))
    //     console.log(clone);
    // }
