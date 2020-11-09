import { ensureAuthenticated } from "../../src/middleware/authentication";

const notAuthenticated = { isAuthenticated: jest.fn(() => false) }
const authenticated = { isAuthenticated: jest.fn(() => true) }
const mockRes = { redirect: jest.fn()}
const mockNext = jest.fn()

describe('Authentication Middleware', () => {

    it('Denies us access if we are not authed', () => {
        ensureAuthenticated(notAuthenticated, mockRes, mockNext)
        expect(mockNext).not.toBeCalled()
    })

    it('Allows us access if we are authed', () => {
        ensureAuthenticated(authenticated, mockRes, mockNext)
        expect(mockNext).toBeCalled()
    })
})
