import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './header.module.css'
import profile from '../../../assets/images/profile.png'
import searchBtn from '../../../assets/images/search-btn.svg'
const Header = () => {
    const [open, setOpen] = useState(false)
  

    return (
        <>
            <header>
                <div className={classes.main}>
                    <p>
                        netflix
                    </p>
                    <div className={classes.navBox}>
                        <nav>
                            <Link>Home</Link>
                            <Link>Tv shows</Link>
                            <Link>Movies</Link>
                            <Link>New & popular</Link>
                            <Link>My list</Link>
                            <Link>Browse by language</Link>
                        </nav>
                        <div className={classes.search}>
                            <div className={`${open ? classes.searchTerm && classes.general : classes.active} `} onClick={() => setOpen(!open)}>
                                <img src={searchBtn} alt="" srcset="" onClick={() => setOpen(open)} />
                                <input type="text" placeholder='titles, peoples, genres' />
                            </div>
                            <p className={classes.general}> 🔔 </p>
                            <img className={classes.general} src={profile} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
// ${ classes.searchTerm } && ${ classes.general }

export default Header