import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import './Styles.css';
import Review from './components/Review.jsx';
console.log(Review)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
              <div className="revlist" >
        <Reviews />
        <div className="d">
        <Review />
        </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));