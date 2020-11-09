import User from '../../src/model/user'
import SpotifyApplication from "../../src/SpotifyApplication";
import JestDatabase from "../../src/database/JestDatabase";

describe('User', () => {

    const database = SpotifyApplication.getInstance().getDatabase() as JestDatabase

    it('Gets all users', async () => {
        await User.readAll()
        expect(database._query).toBeCalled()
    })

    it('Gets one user', async () => {
        await User.readOne('uri')
        expect(database._query).toBeCalled()
    })

})
