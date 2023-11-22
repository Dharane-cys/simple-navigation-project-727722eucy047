import React from 'react'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/Signup'

const func1 = ()=> {
  if(window.location.pathname === '/Home.js'){
    return <Home/>
  }
}
const func2 = ()=> {
  if(window.location.pathname === '/Login.js'){
    return <Login/>
  }
}
const func3 = ()=> {
  if(window.location.pathname === '/'){
    return <SignUp/>
  }
}
const App = () => {
  return (
    <div className='ui container'>
    {func1()}
    {func2()}
    {func3()}
    </div>
  )
}

export default App