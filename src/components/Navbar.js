import '../style/Navbar.css';

function Navbar(){
    
return (
    <div className="nav">
    <><h2>CodeEdu</h2></>
    <div className="subnav">
     <p onClick="Home">Home</p>
     <p onClick="Courses">Courses</p>
     <p onClick="About">About</p>
     <p onClick="Contact">Contact</p>
    </div>
    </div>
   );
}

export default Navbar;