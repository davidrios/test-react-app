'strict mode';
const ADMINLTE_BASE = '../public/components/AdminLTE';

var jQuery = require('jquery');
var $ = jQuery;
window.jQuery = jQuery;
// var Bootstrap = require(ADMINLTE_BASE + '/bootstrap/js/bootstrap.js');
// var AdminLTE = require(ADMINLTE_BASE + '/dist/js/app.js');
var insertCss = require('insert-css');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Page1 = require('./components/page1.js');
var Page2 = require('./components/page2.js');

// require(ADMINLTE_BASE + '/bootstrap/css/bootstrap.css');
var appCss = require('../css/app.styl');

if (process.env.NODE_ENV === "production")
  insertCss(appCss);
else
  $('head').append($('<link rel="stylesheet" href="data:text/css;base64,' + window.btoa(appCss) + '"/>'));

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 },
  ]
}

ReactDOM.render(<Router routes={routes} />, document.getElementById('content'))

$('#loading').fadeOut(400, function() {
  window.loadingSpinner.stop();
  $(this).remove();
});