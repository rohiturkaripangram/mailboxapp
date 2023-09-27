import './aside.css'
import { NavLink } from 'react-router-dom'
export const Aside=()=>{
    return(
        <div className='aside'>
            <div className='aside-content'>
            <NavLink to="/" class="navlink">Inbox</NavLink>
            <NavLink to="/spam" class="navlink">Spam</NavLink>
            <NavLink to='/trash' class="navlink">Trash</NavLink>
            </div>
        </div>
    )
    }