import React from 'react';
import Rev from './Rev.jsx';

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ['asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf']
        }
        console.log(Rev)
    }


    render(){
        return(<div className="d">
            {this.state.reviews.map(review => 
                <Rev review={review} />
            )}
        </div>)
    }
}

export default Review;