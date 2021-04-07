import React from 'react'
import {UserProvider} from './UserContext'
import HomePage from './HomePage'

const App =()=>{
    const user={name:"shubham", loggedIn: true}
    return(
        <UserProvider value={user}>
            <HomePage/>
        </UserProvider>
    )
}
export default App