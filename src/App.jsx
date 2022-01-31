import React from "react";
import './styles.scss';
import Header from './header';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  render(){
    return(
      <div className="c-app-total">
        <Header/>
      </div>
    )
  }

}

