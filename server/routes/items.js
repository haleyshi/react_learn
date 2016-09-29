module.exports = function(app) {
    var GroceryItem = require('./../models/GroceryItem.js');

    app.route('/api/items')
        .get(function(req, res) {
            console.info("GET");
            GroceryItem.find(function(err, doc) {
                console.info(doc);
                res.send(doc);
            });
        })
        .post(function(req, res) {
            var item = req.body;
            var groceryItem = new GroceryItem(item);
            console.info("POST", item);
            groceryItem.save(function(err, data) {
                console.info(data);
                res.status(200).send();
            });
        })
        .patch(function(req, res) {
            console.info("PATCH", req.body);
            GroceryItem.findOne({
                _id: req.body._id
            }, function(err, doc) {
                for (var key in req.body) {
                    doc[key] = req.body[key];
                }
                doc.save();
                res.status(200).send();
            });
        });

    app.route('/api/items/:id')
        .delete(function(req, res) {
            console.info("DELETE", req.params.id);
            GroceryItem.findOne({
                _id: req.params.id
            }, function(err, doc) {
                console.info(doc);
                doc.remove();
                res.status(200).send();
            });
        });
}