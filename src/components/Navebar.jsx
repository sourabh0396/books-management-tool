import React, { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom';
 import '../../src/components/Navbar.css'

//  react  icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";


const Navebar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu=()=>{setIsMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
            window.addEventListener("scroll",handleScroll);
            
            return()=>{
                window.addEventListener("scroll",handleScroll);
            }
        }
    },[])

    // naveitems
    const navItems =[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"All Books",path:"/shop"},
        {link:"Add New/Edit Book ",path:"/admin/dashboard"},
        {link:"Type Of Book",path:"/typeofbook"},
        {link:"Genre of Book",path:"/genreofbook"}
    ]

  return (
    <>
    <header id='header' >
        <nav className={`${ isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
            <div id='maindiv' className='flex justify-between items-center text-base gap-8'>
                                            {/* logo */}
                <Link to="/" className='link'><FaBlog className='inline-block'/><h3 className='books'>Books</h3></Link>
                                {/* <Link to="/" className='bi bi-book-half text-2xl font-bold text-blue'><FaBlog className='inline-block'/>Books</Link> */}
                                {/* Navitems for large device */}
                <ul id='ulnav'>
                    {
                        navItems.map(({link,path})=><Link key={path} to={path}
                        className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </ul>
                                                    {/* btn for large device */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button className='d-none'><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>
                                                    {/* menu for mobile */}
                {/* <div className='md:hidden sm:flex'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none' height="5" width="5">
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-black'/> : <FaBarsStaggered className='w-5 h-5 text-black'/>
                        }
                    </button>  
                </div> */}
            </div>

            {/* navitems for sm device  */}
            {/* <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 ":"hidden"}`}>
                {
                    navItems.map(({link,path})=><Link key={path} to={path} id='navlink' className='text-base texr-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)   
                }
            </div> */}
        </nav>
    </header>




    
    </>
  )
}

export default Navebar