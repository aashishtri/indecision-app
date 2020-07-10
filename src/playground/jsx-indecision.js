console.log('App.js is running!');
const app = {
    options : []
}
// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
}
const clearOptions = ()=>{
    app.options = [];
    renderApp();
}
const randomOption = ()=>{
    const optionNumber = Math.random()*(app.options.length);
    alert(app.options[Math.floor(optionNumber)]);
}
const renderApp = ()=>{
    const template = (
        <div>
          <h1>Indecision App</h1>
          <p>This is some info</p>
          <p>{app.options.length}</p>
          <button onClick={clearOptions} >Remove all</button>
          <ol>
            {
                app.options.map((option,index)=>{
                    return <li key={index}>{option}</li>
                })
            }
          </ol>

          <form onSubmit={onFormSubmit}>
              <input type='text' name="option"/>
              <button>Add option</button>
          </form>
          <br/>
          <button disabled={app.options.length===0} onClick={randomOption}>Random</button>
        </div>
      );
      
      
      var appRoot = document.getElementById('app');
      
      ReactDOM.render(template, appRoot);
}
renderApp();