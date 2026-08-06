import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <h1>LOGO</h1>



            <div>
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}

                <NavLink to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "black",
                        fontWeight: isActive ? "bold" : "normal"

                    })}
                >Home</NavLink>

                <NavLink to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "black",
                        fontWeight: isActive ? "bold" : "normal"

                    })}
                >About</NavLink>

                <NavLink to="/contact"
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "black",
                        fontWeight: isActive ? "bold" : "normal"

                    })}
                >Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar;