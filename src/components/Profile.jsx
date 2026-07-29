function Profile({name, role, image}){
    return(
        <>
        <h1>{name} - {role}</h1>
        <img width={"100px"} src={image} alt="" />
        </>
    )
}

export default Profile;