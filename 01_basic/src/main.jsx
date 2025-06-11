import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


/* const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} */

// above code gives error due to custom react



//below is the correct syntax to use

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)


// syntax explaination 

const reactElement = React.createElement(
    'a',                // 1st parameter  ( tags )
    {href:'https://google.com', target: '_blank'},              // 2nd parameter    ( objects )     // mandatory
    'click to visit google'                     // 3rd parameter       ( text )
)


// injecting variable


const anotherUser = "CHAI AUR REACT"
const reactElement1 = React.createElement(
    'a',                
    {href:'https://google.com', target: '_blank'},              
    'click to visit google',
    anotherUser                     // injected variable directly
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement1
  
)
