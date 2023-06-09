import SearchBar from '../SearchBar/SearchBar';
import {Navbar} from './Nav.js';
import logoRM from '../../assets/imagenes/RM.png'
import {Link,NavLink} from 'react-router-dom'
//import Random from '../SearchBar/Random_button/Random.jsx'

export default function Nav({onSearch, random}){
    return(
        <Navbar>
            <img className='title' src={logoRM} alt="logo" />   
            <NavLink to='/about'><button >About</button></NavLink>
            <NavLink to='/'><button >Home</button></NavLink>
            <SearchBar onSearch={onSearch} random={random}/>

        </Navbar>
    )
}
