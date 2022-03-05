import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// class ShowBioDataC extends React.Component {
//   newCount = 1;
//   state= {counter : 3};
//   incMe = () => {
//     this.setState({
//       counter: this.state.counter+1

//     })
//     this.newCount = this.newCount + 1
//   }
//   render() {
//     return <div>
//     <h1>Name: {this.props.name}</h1>
//     <h1>Age: {this.props.age}</h1>
//     <h1>Gender: {this.props.gender}</h1>
    
//     <h1>Counter: {this.state.counter} new {this.newCount}</h1>
//     <button onClick={this.incMe}>Inc me</button>
//     {/* <JobDesc job={data.job} /> */}
//     </div>
//   }
// }


// var ShowBioData = (data) => {
//   return <div>
//     <h1>Name: {data.name}</h1>
//     <h1>Age: {data.age}</h1>
//     <h1>Gender: {data.gender}</h1>
//     <JobDesc job={data.job} />
//     </div>
// }

// var JobDesc = (data) => {
//   return <div>
//     <h1>Job: {data.job}</h1>

  
//     </div>
// }


// passing 2 things to this render func, which comp to show & where to insert that
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <p>Hello</p>
  // <ShowBioData name="Farishta" age="24" gender="Female" job="Software Developer" />,
  // <ShowBioDataC name="Farishta" age="24" gender="Female" job="Software Developer" />,
  document.getElementById('root')
);

//ShowBioData is user defined comp

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
