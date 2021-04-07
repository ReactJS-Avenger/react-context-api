import React from 'react';
import {UserConsumer} from './UserContext'


class HomePage extends React.Component{
    render(){
        return(
     <UserConsumer>
        {(props) => {
          return <div>{props.name}</div>
        }}
      </UserConsumer>
        )
    }
}
export default HomePage