'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAction = _this.handleAction.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(localStorage.getItem('options'));
            var optionsJSON = localStorage.getItem('options');
            var options = JSON.parse(optionsJSON);
            if (options) {
                this.setState(function () {
                    return { options: options };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var optionsJSON = JSON.stringify(this.state.options);
                localStorage.setItem('options', optionsJSON);
            }
        }
    }, {
        key: 'handleAction',
        value: function handleAction() {
            console.log('optionNum: ');
            var optionNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[optionNum]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            this.setState(function (prevState) {
                if (option.length > 0 && !prevState.options.find(function (eachOption) {
                    return option === eachOption;
                })) {
                    prevState.options.push(option);
                    return {
                        options: prevState.options
                    };
                }
            });
        }
    }, {
        key: 'handleRemoveOne',
        value: function handleRemoveOne(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function (prevState) {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    options: this.state.options,
                    disabled: this.state.options.length === 0,
                    handleAction: this.handleAction
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll,
                    handleRemoveOne: this.handleRemoveOne
                }),
                React.createElement(AddOption, { options: this.state.options, handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header() {
    return React.createElement(
        'p',
        null,
        'this is header'
    );
};

var Action = function Action(props) {
    return React.createElement(
        'button',
        { onClick: props.handleAction },
        'what should i do?'
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            options: _this2.props.options
        };

        return _this2;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;

            e.target.elements.option.value = '';
            this.props.handleAddOption(option.trim());
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'form',
                { onSubmit: this.addOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add option'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        props.options.map(function (option, index) {
            return React.createElement(Option, { key: index, option: option, handleRemoveOne: props.handleRemoveOne });
        })
    );
};
var Option = function Option(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            { key: props.index },
            props.option,
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return props.handleRemoveOne(props.option);
                    } },
                'remove'
            )
        )
    );
};
ReactDOM.render(React.createElement(IndecisionApp, { options: [] }), document.getElementById('app'));
