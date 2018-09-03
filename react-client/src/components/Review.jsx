import React from 'react';
import Rev from './Rev.jsx';
import style from '../Styles.css'

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ['asdf','asdf','asdf','asdf','asdf','asdf','asdf'],
            reviewNum: 0
            
        }
    }
     componentDidMount(){
         let totalReviews = this.state.reviews.length / 7;
         totalReviews = Math.round(totalReviews);
         this.setState({reviewNum:totalReviews});
     }

    render(){
        return(<div className="d">
            {this.state.reviews.map(review => 
                <Rev review={review} />
            )}
                <ul>
                <li style={{ color: 'white', backgroundColor: '#00A699', border: "solid 10px #00A699", borderWidth: '6px 13px 6px 13px', borderRadius: '100%'  }} className="num">1</li>
                <li style={{ color: '#00A699' }} className="num">2</li>
                <li style={{ color: '#00A699' }} className="num">3</li>
                <li>...</li>
                <li style={{ color: '#00A699' }} className="num">{this.state.reviewNum}</li>
                <li style={{ color: '#00A699', border: "solid 1px #00A699", borderRadius: '100%', padding: '5px 10px 5px 10px' }} >></li>
                </ul>
        </div>)
    }
}

export default Review;