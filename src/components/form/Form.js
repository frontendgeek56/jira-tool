function Form({children,onSubmit},props) {
    // const {onSubmit}=props

return(
    <form onSubmit={onSubmit}>

    {children} 

    </form>
)
}
export default Form;