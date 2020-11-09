import User from '../../src/model/user'
import SpotifyApplication from "../../src/SpotifyApplication";
import JestDatabase from "../../src/database/JestDatabase";

describe('User', () => {

    const database = SpotifyApplication.getInstance().getDatabase() as JestDatabase

    it('Gets all users', async (done) => {
        await User.readAll()
        expect(database._query).toBeCalled()
        done()
    })

    it('Gets one user', async (done) => {
        await User.readOne('uri')
        expect(database._query).toBeCalled()
        done()
    })

})
