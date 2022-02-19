import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./view/component/main/Main";

import Introduction from "./view/Introduction"
import About from "./view/about"

const App = () =>{
  return(
    <Router>
    <Switch>
  <Route exact path="/" component={Introduction}/>
  <Route exact path="/About" component={About}/>
 </Switch>
    
    </Router>
  );

}

export default App;

// export default function App() {
//   return (
//     <div className="App">
// <Routes>
//   <Route exact path="/" component={Introduction}/>
// </Routes>

//     </div>
//   );
// }

