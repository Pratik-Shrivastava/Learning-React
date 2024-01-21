import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pratik from './Pratik.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>        
        </div>
    )
}
// const ReactElement = {
//     // But we have written this reactElement according to us.

//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

// const element = createElement(type, props, ...children)

const anotherUser = "Pratik"
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to go to google',
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    // Since it is a function then we can also write it as
    // MyApp()
    // <ReactElement/>  //We cannot write it as.
    // anotherElement  //It works fine
    // reactElement

    
)
