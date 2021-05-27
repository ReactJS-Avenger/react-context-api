import React from 'react';
import ComponentF from './ComponentF'
import UserContext from './UserContext';

class ComponentE extends React.Component{
    render(){
        return(
            <div>
                Component E context {this.context}
            <ComponentF/>
            </div>
           
        )
    }
}

// we can use the value in the E component as well
ComponentE.contextType =UserContext
export default ComponentE;