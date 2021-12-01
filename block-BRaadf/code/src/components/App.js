// import React from "react";
// import SwitchButton from "./Button";
// import Header from "./Header";
// import Main from "./Main";

// class App extends React.Component {
//   state = {
//     isDarkMode: false,
//   };
//   changeMode = () => {
//     this.setState((state) => {
//       return { isDarkMode: !state.isDarkMode };
//     });
//   };
//   render() {
//     let { isDarkMode } = this.state;
//     return (
//       <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
//         <Header isDarkMode={isDarkMode} />
//         <Main isDarkMode={isDarkMode} />
//         <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} />
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import UserContext from '../Context'

class App extends React.Component
{
  state = {
    isDarkMode: false,
  };
  changeMode = () =>
  {
    this.setState((state) =>
    {
      return { isDarkMode: !state.isDarkMode };
    });
    // console.log("hello state")
  };
  render()
  {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <UserContext.Provider value={{ data: this.state, changeMode: this.changeMode }}>
          <Header />
          <Main />
          <SwitchButton />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
