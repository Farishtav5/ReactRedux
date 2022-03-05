REACT 

open source js lib user for creating dynamic & 
interactive User interfaces (both in mobile & web)

Easily used in the existing application

Created by Jordan Walke, soft eng at Facebook (2011)

Latest Version -> 17.0.2

React Benifits & features -> Virtual DOM, Components, JSX 
(js syntax extension), performance, Follow one way data binding,React native


Setup -> Install -> node js, npm will be insatlled with node js,
all other pacakges will be installed using npm. 

npm install -g create-react-app
create-react-app <project-name>
npm start

React Elements are the smallest building block of React apps. React.render(element, containerId)

Bable Compiler will convert JSX syntax to simple js code

React.creatElement -> create element without using jsx
No comiler is required when we are creating elements using creatElement

React comp are class/functions which accepts properties(props) & reteurn react element.

Component Name/ Function name should start with capital letters only (use PascalCase), otherwise react will not recognize it.

In class based component, this.props automatically contains all data which is passed to the comp while calling. 

Props are read only properities.


When to use class/functional comp : 
managing state of the comp, adding life cycle methods, writing logic -> use class comp