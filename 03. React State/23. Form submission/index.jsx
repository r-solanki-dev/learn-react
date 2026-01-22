import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData.get("text"))
    event.currentTarget.reset()
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Email:</label>
        <input id="text" type="text" name="text" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password"/>
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);