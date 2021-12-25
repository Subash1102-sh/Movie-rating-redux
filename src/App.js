import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
   <div className="app">
     <Router>
       <Header></Header>
       <div className="container">
       <Switch>
       <Route path ="/"exact component={Home}/>
       <Route path ="/movie/:imdbID" component ={MovieDetail}/>
       <Route component ={PageNotFound}/>
       </Switch>
       </div>
       <Footer/>
     </Router>
   </div>
  );
}

export default App;
