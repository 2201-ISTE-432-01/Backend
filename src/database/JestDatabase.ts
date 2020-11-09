import Database from "./Database";
import Mock = jest.Mock;

export default class JestDatabase implements Database {

    _query = jest.fn()
    query(query: string): Mock {
        return this._query();
    }
}
