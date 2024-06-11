import React from 'react'

const Header = () => {


    // const Navebar = () => {
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
            {link:"TypeOf",path:"/typeof"},
            {link:"Shop",path:"/shop"},
            {link:"Sell Book",path:"/admin/dashboard"},
            {link:"Blog",path:"/blog"}
        ]
  return (
    <>
    <div className='w-100'>
        <div>
            <h3 className='bi bi-book font-bold'>Book</h3>
            <div>
                <span onClick={() => handleClick("/")}>Home</span>
                <span onClick={() => handleClick("/about")}>About</span>
                <span onClick={() => handleClick("/typeof")}>TypeOf</span>
                <span onClick={() => handleClick("/shop")}>Shop</span>
                <span onClick={() => handleClick("/admin/dashboard")}>Sell Book</span>
                <span onClick={() => handleClick("/blog")}>Blog</span>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header