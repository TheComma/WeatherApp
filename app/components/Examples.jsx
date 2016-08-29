var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center"> Examples </h1>
      <p> Welcome to Examples page!</p>
      <p> Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Kaunas'>Kaunas, Lithuania</Link>
        </li>
        <li>
          <Link to='/?location=Vilnius'>Vilnius, Lithuania</Link>
        </li>
      </ol>
    </div>
  );
};


module.exports = Examples;
