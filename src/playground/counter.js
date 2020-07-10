// console.log('App.js is running!');

// // JSX - JavaScript XML
// let value = 0;

// const addOne = () => {
//     value++;
//     renderApp();
// }
// const minusOne = () => {
//     value--;
//     renderApp();
// }
// const setupReset = () => {
//     value = 0;
//     renderApp();
// }
// const renderApp = () => {


//     const template = (
//         <div>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={setupReset}>reset</button>
//             <h1>{value}</h1>
//         </div>
//     );

//     const appRoot = document.getElementById('app');



//     ReactDOM.render(template, appRoot);
// }
// renderApp();
//states
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount() {
        const count = localStorage.getItem('counter');
        console.log(count);
        this.setState(()=>({count}));
        
    }
    componentDidUpdate(prevProp,prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('counter',this.state.count);
        }
    }
    handleAddOne() {
        console.log('add one');
        this.setState((prevState,props)=>{
            return {
                count:prevState.count+1
            }
        })
    }
    handleMinusOne() {
        console.log('minus one');
        this.setState((prevState,props)=>{
            return {
                count:prevState.count-1
            }
        })
    }
    handleReset() {
        console.log('reset');
        this.setState((prevState,props)=>{
            return {
                count:0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<Counter/>, appRoot);
