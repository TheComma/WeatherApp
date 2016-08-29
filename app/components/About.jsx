var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center"> About </h1>
      <p> This is a weather application. You can use this application
        for checking weather in various cities around the world.</p>
      <p> Simply type a city name in the search bar and click 'Get Weather'</p>
      <p> Tools that are beeing used in this app: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API for information about weather
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
