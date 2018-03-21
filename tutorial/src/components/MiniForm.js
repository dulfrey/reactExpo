import React , {Component} from 'react'
import axios from 'axios'

class MiniForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        const target = event.target
        const value = event.value
        const name = target.id
        
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event){
        event.preventDefault()
        const question_id = this.props.question_id
        url = ''
        if (question_id) {
            var url = 'http://question-api.herokuapp.com/questions' + question_id + '/answers'
            axios.post(url, {
                author:  this.state.author,
                answer:  this.state.body
            }).then((res) => {
                res.json()
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            var url = 'http://question-api.herokuapp.com/questions'
            axios.post(url, {
                author: this.state.author,
                question: this.state.body
            }).then((res) => {
                res.json()
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="author"> Author: </label>
                <input id="author" type="text" onchange={this.handleChange} />
                <label htmlFor="body"> Body: </label>
                <input id="body" type="text" onchange={this.handleChange} />
                <input  type="submit" onchange={this.handleChange} />
            </form>
            )
        
    }
}

export default MiniForm