import React from "react";

export default class DropDown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.closePopup = this.closePopup.bind(this);
  }
  
  componentDidMount(){
    document.addEventListener("click", (e) => this.closePopup(e));
  }

  comonentWillUnmount(){
    document.removeEventListener("click");
  }

  closePopup(e){
    var div = document.getElementsByClassName("c-dropdown-total")[0]
    if(!e.path.includes(div)){
      this.setState({isOpen: false});
    }
  }
  
  render(){
    const { userOptions, currentUser, changeUser } = this.props;
    const { isOpen } = this.state;
    return(
      <div 
        className="c-dropdown-total"
        onClick={() => this.setState({isOpen: !isOpen})}
      >
        <div className={"user-name" + (isOpen?" open":"")}>
          {currentUser.email}
        </div>
        <div 
          className={"tab-icon" + (isOpen?" rotate":"")}
        />
        {isOpen && 
          <div className="dropdown-container">
            {userOptions.map((user) => (
              <div 
                className="dropdown-option"
                onClick={() => changeUser(user)}
                key={user.email}
              >
                {user.email}
              </div>
            ))}
            <div className="break"/>
            <div className="dropdown-option">
              Settings
            </div>
            <div className="dropdown-option">
              Sign Out
            </div>
          </div>
        }
      </div>
    )
  }
}
