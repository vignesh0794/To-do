import React from "react";
import Nav from "./Nav"
import List from "./List"
import Form1 from"./Form1"
import axios from "axios"


class App extends React.Component{
    state={ items:[]}
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(result=>{this.setState({items:result.data})})
    }
    add=value=>{
        console.log("New Item",value)
        this.setState({
            items:[...this.state.items,value]
        })
    }
    delete1=items=>{
        this.setState({
            items:this.state.items.filter(i=>i!==items)
        })

    }
    render(){return(<div>
        <Nav />
        <Form1 add={this.add}/>
        <List list={this.state.items} delete1={this.delete1}/>
    </div>)}
}

export default App