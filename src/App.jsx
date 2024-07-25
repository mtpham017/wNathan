import React from 'react';
import Navbar from './components/Navbar.jsx';
import './components/Scrollbar.css';
import Header from './components/Header.jsx';
import Trip from './components/Trip_section.jsx';
import './App.css';


function App() {

  // Trip sections
  const tripSections = [
    { title: <h1 className='trip1'>Trip 1</h1>, date: <h1 className='date1'>20XX</h1>, isReversed: true },
    { title: <h1 className='trip2'>Trip 2</h1>, date: <h1 className='date2'>20XX</h1>, isReversed: false },
    
  ];

  return (
    <div className="App">
      <Navbar />
      
      <div className='main-box'> {/* First main box of the webpage. Just having a little info box and the title of the webpage and a little quote */}
        <div className="info-box">
          <p>
              Hello, I'm Nathan Pham, a passionate enthusiast of visual arts and media. My interests span photography, music appreciation, and the world of film and television.
          </p>
          <p>
              This website showcases my journey through these creative realms, capturing moments, exploring soundscapes, and diving into compelling narratives.
          </p>
        </div>

        <div className='name-box'>
            <h1 className='name'>
              w/Nathan
            </h1>
            <p className='sub-text'>
              Ikigai <br></br>
              A reason for being; the thing that gets you up in the<br></br>
              morning. 
            </p>
        </div>
      </div>

      <Header
        title={<h1 className='title-name'>Photos</h1>}
        pattern={<div className='pattern-box'>Pattern here</div>}
      />

      

      <div className='main-box2'>
        {tripSections.map((section, index) => (
          <Trip 
            key={index}
            title={section.title}
            date={section.date}
            isReversed={section.isReversed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


