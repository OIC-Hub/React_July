function Card({children}){
    return(
        <>
        <div style={{width: "100px", height: "100px", background: "teal"}}>

            {children}
        </div>
        </>
    )
}

export default Card;