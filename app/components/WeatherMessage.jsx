var React = require('react');

var WeatherMessage = (props) =>{
  var location = props.location;
  var temp = props.temp;
  return (
      <div>
        <p>It is {temp} in the {location} right now!</p>
      </div>
  );
}

module.exports = WeatherMessage;
