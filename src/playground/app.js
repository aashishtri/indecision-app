class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        console.log(localStorage.getItem('options'));
        const optionsJSON = localStorage.getItem('options');
        const options = JSON.parse(optionsJSON);
        if(options){
            this.setState(() => ({ options }));
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const optionsJSON = JSON.stringify(this.state.options);
            localStorage.setItem('options', optionsJSON);
        }
    }
    handleAction() {
        console.log('optionNum: ');
        const optionNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[optionNum]);
    }
    handleAddOption(option) {
        this.setState((prevState) => {
            if (option.length>0&&!prevState.options.find(eachOption=>option===eachOption)) {
                prevState.options.push(option)
                return {
                    options: prevState.options
                };
            }
        });
    }
    handleRemoveOne(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }
        })
    }
    handleRemoveAll() {
        this.setState((prevState) => {
            return {
                options: []
            };
        });
    }
    render() {
        return (
            <div>
                <Header />
                <Action
                    options={this.state.options}
                    disabled={this.state.options.length === 0}
                    handleAction={this.handleAction}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOne={this.handleRemoveOne}
                />
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
const Header = () => {
    return <p>this is header</p>;
}

const Action = (props) => {
    return (<button onClick={props.handleAction}>what should i do?</button>);
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: this.props.options,
        }

    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;

        e.target.elements.option.value = '';
        this.props.handleAddOption(option.trim());
    }
    render() {

        return (
            <form onSubmit={this.addOption}>
                <input type='text' name='option' />
                <button>Add option</button>
            </form>
        );
    }
}
const Options = (props) => {
    return (
        <div>
            {props.options.length===0&&<p>Please add an option to get started</p>}
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.options.map((option, index) => {
                return <Option key={index} option={option} handleRemoveOne={props.handleRemoveOne} />
            })}

        </div>
    );

}
const Option = (props) => {

    return (
        <div>
            <p key={props.index}>
                {props.option}
                <button onClick={() => props.handleRemoveOne(props.option)}>remove</button></p>

        </div>

    );
}
ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));
