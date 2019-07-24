import React from 'react';
import logo from './logo.svg';
import ComingSoon from 'react-coming-soon';
import './App.css';

function App() {
  return (
     <div className="App">
      <ComingSoon
        title="Send Me Traveling"
        subtitle="Travel. Made. Simple."
        bgColor="#3f51b5"
        textColor="#fafafa"
        date="Mon Aug 12 2019 17:00:00 GMT-0600 (Mountain Daylight Time)"
        illustration="web-development"
      />
    </div>
  );
}

export default App;
