

// const toggle = ()=>{
   
//     app.showDetails^=1;
//     renderApp();
// }
// const app = {
//     showDetails : true,
//     details : 'this is message'
// }
// const showButton = <button onClick={toggle}>show details</button>;
// const hideButton = <button onClick={toggle}>hide details</button>
// const renderApp  = ()=> {
//     const template = (
//         <div>
//             <h2>Visibility Toggle</h2>
//             <div>{app.showDetails?hideButton:showButton}</div>
//             <p>{app.showDetails?app.details:'no'}</p>
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template,appRoot);
// }
// renderApp();
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state = {
            showDetails : false,
            displayButton : (<button onClick={this.toggle}>hide details</button>),
            details : (<p>details</p>)
        }
    }
    toggle() {
        this.setState ((prevState)=>{
           if(prevState.showDetails){
                return {
                    showDetails : false,
                    displayButton : (<button onClick={this.toggle}>hide details</button>),
                    details : (<p>details</p>)
                }
           }else{
                return {
                    showDetails : true,
                    displayButton : (<button onClick={this.toggle}>show details</button>),
                    details : undefined
                }
           }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                {this.state.displayButton}
                {this.state.details}
            </div>
        );
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle/>,appRoot);
