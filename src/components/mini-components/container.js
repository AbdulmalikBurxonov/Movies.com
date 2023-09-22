export const Container = ({children, className}) => {
return(
    <div style={{maxWidth:"1200px", margin:"auto"}} className={"px-3 md:px-16 " + className}>{children}</div>
)
}