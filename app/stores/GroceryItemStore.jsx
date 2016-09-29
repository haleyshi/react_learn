var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function GroceryItemStore() {  
    var listeners = [];

    function updateView() {
        helper.get("api/items")
        .then(function(data) {
            triggerListeners(data);
        })
    }

    function addGroceryItem(item) {
        helper.post("api/items", item)
        .then(function() {
            updateView();
        }); 
    }

    function deleteGroceryItem(item) {
        helper.del("api/items/"+item._id)
        .then(function() {
            updateView();
        });
    }

    function setGroceryItemBought(item, isBought) {
        item.purchased = isBought;
        helper.patch("api/items", item)
        .then(function() {
            updateView();
        });
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners(items) {
        listeners.forEach(function(listener) {
            listener(items);
        });
    }

    dispatcher.register(function(event) {
        var split = event.type.split(':');

        if (split[0] === 'grocery-item') {
            switch(split[1]) {
                case "add":
                    addGroceryItem(event.payload);
                    break;
                case "delete":
                    deleteGroceryItem(event.payload);
                    break;
                case "buy":
                    setGroceryItemBought(event.payload, true);
                    break;
                case "unbuy":
                    setGroceryItemBought(event.payload, false);
                    break;
            }
        }
    });

    return {
        updateView: updateView,
        onChange: onChange
    }
}

module.exports = new GroceryItemStore();

