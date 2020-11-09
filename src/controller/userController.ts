import User from '../model/user'

// Example route, probably not going to be used for anything?
// TODO: Remove before publishing since we don't want to give a list of all users of course

export function getAll(req: any, res: any) {
    User.readAll()
        .then(({rows}) => {
            res.send(rows)
        })
        .catch((err) => {
            console.log(err)
            res.send({err: 'Error handling request'})
        })
}
