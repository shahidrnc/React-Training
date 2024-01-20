 const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to Visit Google"
 }
 function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendchild(domElement)

 }
const maincontainer=document.querySelector('#root')
 customRender(reactElement,maincontainer)