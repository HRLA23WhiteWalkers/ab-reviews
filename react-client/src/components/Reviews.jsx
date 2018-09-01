import React from 'react';
import Ratings from 'react-ratings-declarative';


class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            rating: 5
        };
    }


    render(){
        return(
            <div>
                <h2 className="header">{311} Reviews</h2>{' '}
                <div className="header2">
                <Ratings
                rating={this.state.rating}
                 >
                <Ratings.Widget widgetRatedColor="#00A699" />
                <Ratings.Widget widgetRatedColor="#00A699" />
                <Ratings.Widget widgetRatedColor="#00A699" />
                <Ratings.Widget widgetRatedColor="#00A699" />
                <Ratings.Widget widgetRatedColor="#00A699" />
                </Ratings>
                </div>
            </div>    
        )
    }
}

export default Reviews;