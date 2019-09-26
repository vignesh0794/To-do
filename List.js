import React from "react";



class List extends React.Component{
    complete =e=>{
        e.target.style.textDecoration="line-through"
    }
    render(){ return(
    <div>
    <ul className="list-group">
        {this.props.list.map(i=>{return(<li key={i.id}className="list-group-item">
            <span onClick={this.complete}>{i.title}</span>
            <button type="button" className="float-right" onClick={this.props.delete1.bind(this,i)}>Delete</button></li>
        )})}
    </ul>
    </div>
 )
}
}
export default List


