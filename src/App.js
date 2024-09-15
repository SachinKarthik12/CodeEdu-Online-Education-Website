import './App.css';
import Navbar from './components/Navbar';
import CardData from './components/CoursecardData';
import SubscriptionBanner from './components/Subscription';
import PromotionContent from './components/PromotionContent';
import Footer from './components/Contact';
function App() {

  return(
    <>
  <div>
  <Navbar/>

  <div className ="box">
    <div className="imgcontent">    
    <p>Build skills with courses, certificates, and degrees online from world-<br/>
    class universities and companies</p>
    </div>
   
  </div>
  <CardData/>
  <SubscriptionBanner/>
  <PromotionContent/>
  <Footer/>
  </div>
  </>
  
  );
}

export default App;
