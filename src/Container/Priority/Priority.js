
    const Priority = ({val}) =>{
        return (
            
                val.priority === "1" ?
                    <p className="d-inline low m-2">Low</p>
                    : val.priority === "2" ?
                        <p className="d-inline medium m-2">Medium</p>

                        : <p className="d-inline m-2 high  bg-dengar">High</p>

            
        )
    }

    export default Priority;