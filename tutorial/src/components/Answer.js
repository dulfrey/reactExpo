import React , {Component} from 'react'


function Answer(props) {
    
        const item = props.item
        return(
            <div>
                <h4>{item.question}</h4>
                <h4>{item.author}</h4>    
            </div>
            )
     }


export default Answer