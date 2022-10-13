"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const dirent_1 = require("./dirent");
describe('Dirent', () => {
    it('should create a fake instance without options', () => {
        const dirent = new dirent_1.default();
        assert.strictEqual(dirent.name, 'unknown.txt');
        assert.ok(dirent.isFile());
        assert.ok(!dirent.isDirectory());
        assert.ok(!dirent.isSymbolicLink());
        assert.ok(!dirent.isBlockDevice());
        assert.ok(!dirent.isCharacterDevice());
        assert.ok(!dirent.isFIFO());
        assert.ok(!dirent.isSocket());
    });
    it('should create a fake instance with empty options', () => {
        const dirent = new dirent_1.default({});
        assert.strictEqual(dirent.name, 'unknown.txt');
        assert.ok(dirent.isFile());
        assert.ok(!dirent.isDirectory());
        assert.ok(!dirent.isSymbolicLink());
        assert.ok(!dirent.isBlockDevice());
        assert.ok(!dirent.isCharacterDevice());
        assert.ok(!dirent.isFIFO());
        assert.ok(!dirent.isSocket());
    });
    it('should create a fake instance with options', () => {
        const dirent = new dirent_1.default({
            name: 'known.txt',
            isDirectory: true,
            isFile: false,
            isSymbolicLink: true,
            isBlockDevice: true,
            isCharacterDevice: true,
            isFIFO: true,
            isSocket: true
        });
        assert.strictEqual(dirent.name, 'known.txt');
        assert.ok(!dirent.isFile());
        assert.ok(dirent.isDirectory());
        assert.ok(dirent.isSymbolicLink());
        assert.ok(dirent.isBlockDevice());
        assert.ok(dirent.isCharacterDevice());
        assert.ok(dirent.isFIFO());
        assert.ok(dirent.isSocket());
    });
});
