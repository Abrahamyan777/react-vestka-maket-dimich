import css from './Navbar.module.css'
import {NavLink}  from 'react-router-dom'
 
function Navbar() {
  return (
    <nav className={css.nav}>
      <div>
        <NavLink to='/' >Home</NavLink>
      </div>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/messiges'>Messiges</NavLink>
      </div>
      <div>
        <NavLink to='/users'>Users</NavLink>
      </div>
      <div>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink to='/setings'>Setings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;