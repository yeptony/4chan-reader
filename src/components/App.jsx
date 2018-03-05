import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StartUp from './StartUp';


class App extends React.Component {
  render() {
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
}

export default App
