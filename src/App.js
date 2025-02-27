import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const userList= users.map((user) => <li key= {user.id}>{user.name}</li>);



// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }
// /**
//   Challenge: Uncomment this code to complete quiz

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("This is child update")}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      {/* <h3>Update Parent State Challenge (Using Callback)</h3> */}
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue}/>
      </div>
    </>
  );
}


// Uncomment this to tackle quiz
// **/

// Comment out after completion
// function Parent({ children }) {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//       {children}
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [show, setShow] = React.useState(true);
  return (
    
    
    <div style={{display:'column',
    alignItems:'center',
    justifyContent:'center',
    height:'100vh',
    marginRight:'auto',
    marginLeft:'auto'}} >
      <helmet>
    <style>{'body{ background-color: orange; }'}</style>
    </helmet>
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{userList}</ul>
      <button onClick={() => setShow(!show)}>{show ? "Hide Element Below" : "Show Element Below"}</button>
      {show && <div>Toggle Done!</div>}
      <div>Toggle Challenge</div>
      <div style={{fontStyle:'bold'}}>JSX is cool!</div>
      <Parent>
      <Child />
    </Parent>
    </div>
  );
}



export default App;