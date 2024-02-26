import React from "react";
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
        }
        this.inputRef= React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    render(){

        return (
            <>
            <label>
                Name:
                <input
                ref={this.inputRef}
                value={this.state.name}
                onChange={e=> this.setState({name: e.target.value})}>
                </input>
            </label>
            </>
        )
    }

}

export default App;