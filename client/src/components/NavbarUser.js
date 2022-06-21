
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../stylePages/Navbar.css";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../store/actions/user";

export default function NavbarUser() {

    let currentUser = useSelector(state => state.u.currentUser);
    let dispatch = useDispatch();

    const logOut = () => {
        dispatch(updateCurrentUser(null));
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" >הבית</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/home" id="outUser" className="nav-link" onClick={logOut}>יציאה</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/cart" className="nav-link"  ><IconButton color="secondary" aria-label="add to shopping cart"  >
                                <ShoppingCartIcon className="iconCartUser" />
                            </IconButton></Link>
                        </li>
                    </ul>
                </div>

            </nav>
            {/* <div>
        {currentUser.name && <h2 className="nav-item">
                            <label>{currentUser.name} שלום לך</label>
                        </h2>}
</div> */}
            <Outlet />
        </>
    )
}