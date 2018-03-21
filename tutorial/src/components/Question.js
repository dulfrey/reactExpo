import React , {Component} from 'react'
import List from './List.js'

class Question extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    
    handleClick(e){
        this.setState({show: !this.state.show})
    }
    render(){
        const item = this.props.item
        const show = this.state.show
        var list 
        
        if (show) {
            list = (
                    <div >
                        <List question_id={item.id} />
                        <button onClick={(e)=> this.handleClick(e)} > Hide answer </button>
                    
                    </div>
                )
            
        } else {
            list = <button onClick={(e)=> this.handleClick(e)} > show answer </button>
            
        }
        return(
            <div>
                <h4>{item.question}</h4>
                <h4>{item.author}</h4>    
            </div>
            )
        
    }
}

export default Question