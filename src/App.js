import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Home }from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {News }from './News';
import {NoMatch}from './NoMatch';
import { Layout } from './components/Layout';
// import { NavigationBar } from './components/NavigationBar';
// import { Jumbotron } from './components/Jumbotron';
class App extends React.Component {
 render(){
 return (
 <React.Fragment>
   <Router>
   {/* <NavigationBar />
   <Jumbotron /> */}
    <Layout> 
       <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/news" component={News} />
        <Route component={NoMatch} />
      </Switch>
      </Layout> 
    </Router>
   </React.Fragment>
 );
}
}
export default App;