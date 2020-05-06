function getMessage(){
    let hasMessage = true;
    
    if (hasMessage) {
        return <span>Some message</span>
    }
    return null;
}

function handleClick(event) {
    console.log("clicked");
}

function render() {
    let template = <div>Data: {new Date().toString()}</div>;
    ReactDOM.render(template, container);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.elements.email.value);
}

class Mesaj extends React.Component {
  render() {
    return <h1>Salut, {this.props.name}</h1>;
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
  componentDidMount() { console.log("Componetn mounted !"); }
  componentDidUpdate() { console.log("Componet updated !"); }
  handleClick(e) {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.label}{this.state.clicks}</button>
    );
  }
}


let template = (<div> <MyApp label="Click me please" /> </div>);





ReactDOM.render(template, container);
