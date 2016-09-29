var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./stores/GroceryItemStore.jsx');

function render(items) {
    ReactDOM.render(<GroceryItemList items={items} />, app);
}

GroceryItemStore.onChange(function(items) {
    render(items);
});

GroceryItemStore.updateView();