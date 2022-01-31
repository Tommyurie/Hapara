import React from "react";
import './styles.scss';
import NavMenu from "./navigation";
import DropDown from "./drop-down";

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      teacherTabs: ["Classes", "Lessons", "Libraries"],
      studentTabs: ["Classes", "Assignments"],
      userEmails: [{userClass:'teacher', email:"teacher@school.org"}, {userClass:'student', email:"student@school.org"}],
      isTeacher: true,
      currentUser: null,
    }
  }
  
  componentDidMount(){
    this.setState({
      currentUser: this.state.userEmails.find((user) => user.userClass === 'teacher')
    })
  }
 
  render(){
    const {
      teacherTabs,
      studentTabs,
      isTeacher,
      userEmails,
      currentUser} = this.state;

    if(currentUser === null){
      return(null)
    }
    return(
      <div className="c-header-total">
        <NavMenu
          tabs={isTeacher?teacherTabs:studentTabs} 
        />
        <DropDown
          userOptions={userEmails.filter((user) => user.email !== currentUser.email)}
          changeUser={(currentUser) => this.setState({currentUser, isTeacher: currentUser.userClass === 'teacher'})}
          currentUser={currentUser}
        />
      </div>
    )
  }

}

