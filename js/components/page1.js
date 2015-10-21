var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <p className="red">Page 1 content. <a href="#" onClick={this.onClick}>Throw JS error.</a></p>;
  },
  onClick: function(e) {
    e.preventDefault();
    throw new Error();
  }
});