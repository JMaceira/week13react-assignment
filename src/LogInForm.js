import React from "react";

class App extends React.Component {
    render() {
      return (
    <div className="display:flex justify-content:center">
      <form>
        <h3 className="h3">Log In</h3>
        <br></br>
        <div className="input-container">
          <label htmlFor="userName">Username </label>
          <input type="text" name="userName" id="userName"/>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password"/>
        </div>
        <div className="button-container">
            <br></br>
          <button className="btn btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
    )
}
}
 export default App;