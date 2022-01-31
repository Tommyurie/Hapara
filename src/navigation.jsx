import React from "react";

export default class NavMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  render(){
    const { tabs } = this.props;
    return(
      <div className="c-nav-total">
        <div className="tab-icon"/> 
        {tabs.map((tab) => (
          <div key={tab} className={"tab-value" + (tab === "Classes"?" active":"")}>
            {tab}
          </div>
        ))}
      </div>
    )
  }
}

