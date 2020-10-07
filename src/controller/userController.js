const User = require ('../model/user')

exports.getAll = function(req, res) {
    User.getAll()
        .then(({rows}) => {
            res.send(rows)
        })
        .catch((err) => {
            console.log(err)
            res.send({err: 'Error handling request'})
        })
}
