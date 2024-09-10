import React from 'react';
import CourseCard from '../components/CourseCard';
import Javaimg from '../assets/img (1).jpg';
import Htmlimg from '../assets/img (2).jpg';
import Reactimg from '../assets/img (3).jpg';

function App() {
    const handleEnroll = () => {
      alert('You have enrolled in the course!');
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', flexWrap: 'wrap' }}>
        <CourseCard
          courseName="React for Beginners"
          price={99}
          imageUrl={Javaimg}
          onEnroll={handleEnroll}
        />
  
        <CourseCard
          courseName="Advanced React"
          price={199}
          imageUrl={Htmlimg}
          onEnroll={handleEnroll}
        />
  
        <CourseCard
          courseName="React with TypeScript"
          price={149}
          imageUrl={Reactimg}
          onEnroll={handleEnroll}
        />
      </div>
    );
  }
  
  export default App;