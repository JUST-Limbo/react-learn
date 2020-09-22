import React from 'react';
// import logo from './logo.svg'; // React脚手架中引入图片的方式
import './App.css'; // React脚手架中引入样式的方式

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <h1 className="demo">这是我第一次使用脚手架</h1>
    )
  }
}
