import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCatalogueApp from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import PhoneDetail from './phoneDetail';

 var App = React.createClass({
      render : function() {
        return (
		
          <div>
		  <img src='./src/Capture.JPG' width='1650' height='400'/>
		  <h2>Hello, And welcome to SDMotors. SDMotor's was set up in 2014 by Steven Delaney. This company was set up with the aim of providing some of the most exclusive cars in the world at affordable prices to the people of Ireland. You can use the search function to search for a particular car, or scroll to view our full catalogue. </h2>
		  <h2>I run the company myself, so if you have any queries about any cars in the catalogue or if you would like to make a special order please do not hesitate to contact me! Contact details are at the bottom of the page! </h2>
            <h2>Happy Car Hunting!!</h2>
			<h1>Car Catalogue</h1>
            {this.props.children}
			<h3>Contact Details:</h3>
			<h3>Mobile:085119277</h3>
			<h3>Email: StevenMotors@spoof.com</h3>
			<h3>Location: Waterford Institute of Technology, Waterford City, Waterford, Ireland</h3>
          </div>
		  )
 }
 }
 )
 
 
 
	  
 ReactDOM.render( (
      <Router history={browserHistory} >
        <Route path="/" component={App}>
           <IndexRoute component={PhoneCatalogueApp}/>
           <Route path="phones/:id" component={PhoneDetail} />
        </Route>
      </Router>
    ),
      document.getElementById('root')
    );