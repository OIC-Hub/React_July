import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Data = () => {
const {id} = useParams();
const [user, setUser] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUser(data));
}, [id]);

const findUser = user.find((e) => e.id === Number(id));


    return(
        <div>
            Showing Data that belong to ID {id}

            <br />
            <br />


            {findUser?.name} <br />
            {findUser?.username}

        </div>
    )
}

export default Data;