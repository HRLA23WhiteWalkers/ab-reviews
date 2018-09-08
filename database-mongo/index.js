var mongoose = require('mongoose');
mongoose.connect('mongodb://root:@ds149742.mlab.com:49742/heroku_1wbgqsjk' ||'mongodb://localhost/airbnbClone');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const reviewsSchema = mongoose.Schema({
  totalReview: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  username: String,
  date: Date,
  img: String,
  text: String
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

var selectAll = function(callback) {
  Reviews.find({}, function(err, reviews) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, reviews);
    }
  });
};
const saveFunc = (obj) => {
  console.log('obj', obj)
  new Reviews(obj).save(function(err){
    if(err){
      console.log('err', err);
    } else {
      console.log('saved successfully')
    }
  })
}

module.exports = {
  db,
  Reviews,
  saveFunc, 
  selectAll
};