import React from "react";

class Form1 extends React.Component{
    state={input:""}
    myfunction =event=>{
        console.log(event.target.value)
        this.setState({input:event.target.value})
    }
    handleSubmit= e=>{
        this.props.add(this.state.input)
        this.setState({input:""})
    }
    render(){return (<div>
    <input type="Text" className="form-control" onChange={this.myfunction} value={this.state.input}></input>
    <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Add Todo</button>
    </div>)}
}

export default Form1