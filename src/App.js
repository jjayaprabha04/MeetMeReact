
import './App.css';
import AboutComp from './Components/AboutComp';
import Educomp from './Components/EduComp';
import FooterComp from './Components/FooterComp';
import MeetmeComp from './Components/MeetmeComp';
import WorksComp from './Components/WorksComp';

function App() {
  return (
    
      <div id="layout">        
           <MeetmeComp/>
           <AboutComp />
            <Educomp />
            <WorksComp />
            <FooterComp />
            
        </div>
    
  );
}

export default App;
