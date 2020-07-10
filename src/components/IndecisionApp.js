import React from 'react';
import Action from './Action';
import Header from './Header';
import AddOption from './addOption';
import Options from './Options'
import OptionModal from './OptionModal';
import {Card} from 'reactstrap'
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleClearModal = this.handleClearModal.bind(this);
        this.state = {
            options: props.options,
            selectedOption : undefined
        };
    }
    componentDidMount() {
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
        
        this.setState((prevState)=>{
            return {
                selectedOption : this.state.options[optionNum]
            }
        })
    }
    handleAddOption(option) {
        this.setState((prevState) => {
            if (option.length>0&&!prevState.options.find(eachOption=>option===eachOption)) {
                return {
                    options: prevState.options.concat(option)
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
    handleClearModal() {
        console.log('button');
        this.setState({
            selectedOption : undefined
        })
    }
    render() {
        return (
            <div style={{backgroundColor:"#283080"}}>
                <Header />
                <div style={{backgroundColor:"#283080"}}>
                
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
                <OptionModal selectedOption={this.state.selectedOption} handleClearModal={this.handleClearModal}/>
            
                
                </div>
                
            </div>
        );
    }
}
export default IndecisionApp;