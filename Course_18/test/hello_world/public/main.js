function getMessage() {
  let hasMessage = true;

  if (hasMessage) {
    return /*#__PURE__*/React.createElement("span", null, "Some message");
  }

  return null;
}

function handleClick(event) {
  console.log("clicked");
}

function render() {
  let template = /*#__PURE__*/React.createElement("div", null, "Data: ", new Date().toString());
  ReactDOM.render(template, container);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.elements.email.value);
}

class Mesaj extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Salut, ", this.props.name);
  }

}

var container = document.querySelector('#app');

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Componetn mounted !");
  }

  componentDidUpdate() {
    console.log("Componet updated !");
  }

  handleClick(e) {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.handleClick
    }, this.props.label, this.state.clicks);
  }

}

let template = /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement(MyApp, {
  label: "Click me please"
}), " ");
ReactDOM.render(template, container);