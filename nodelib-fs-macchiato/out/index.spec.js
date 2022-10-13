"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const _1 = require(".");
describe('Package', () => {
    it('should create a fake instance of fs.Stats', () => {
        const actual = new _1.Stats();
        assert.ok(actual instanceof _1.Stats);
    });
    it('should create a fake instance of fs.Dirent', () => {
        const actual = new _1.Dirent();
        assert.ok(actual instanceof _1.Dirent);
    });
});
