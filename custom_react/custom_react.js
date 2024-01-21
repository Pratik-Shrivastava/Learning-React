function customRender(reactElement, root)
{
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // root.appendChild(domElement); 

    // We will optimize this code.
    
    const domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        //If the children is given inside props then we need to add some checks
        if(prop === 'children')
        continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    domElement.innerHTML = reactElement.children;
    root.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}



const root = document.getElementById('root');

customRender(reactElement, root);