import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StartUp from './StartUp';


function App() {
  return (
    <div className="yep-wrapper">
      <Header />
      <div className="yep-main container">
        <StartUp />
      </div>
      <Footer />
    </div>
  )
}

export default App
