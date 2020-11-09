// @ts-ignore
import supertest from 'supertest'
import SpotifyApplication from "../../src/SpotifyApplication";

describe('Index Controller', () => {

    it('Index redirects to login', async (done) => {
        supertest(SpotifyApplication.getInstance().getApp())
            .get("/")
            .expect(302, done)
    })
})
