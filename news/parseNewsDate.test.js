const test = require('node:test');
const assert = require('node:assert');
const { parseNewsDate } = require('./parseNewsDate.js');

test('parseNewsDate', async (t) => {
    await t.test('parses valid date with time', () => {
        const date = parseNewsDate('28-01-2024 19-36.txt');
        assert.strictEqual(date.toISOString(), new Date('2024-01-28T19:36:00').toISOString());
    });

    await t.test('parses valid date with time (colon format)', () => {
        const date = parseNewsDate('28-01-2024 19:36.txt');
        assert.strictEqual(date.toISOString(), new Date('2024-01-28T19:36:00').toISOString());
    });

    await t.test('parses valid date without time', () => {
        const date = parseNewsDate('28-01-2024.txt');
        assert.strictEqual(date.toISOString(), new Date('2024-01-28T00:00:00').toISOString());
    });

    await t.test('returns epoch for invalid string format', () => {
        const date = parseNewsDate('invalid-date.txt');
        assert.strictEqual(date.getTime(), 0);
    });

    await t.test('returns epoch for empty string', () => {
        const date = parseNewsDate('');
        assert.strictEqual(date.getTime(), 0);
    });

    await t.test('returns epoch for null input', () => {
        const date = parseNewsDate(null);
        assert.strictEqual(date.getTime(), 0);
    });

    await t.test('returns epoch for undefined input', () => {
        const date = parseNewsDate(undefined);
        assert.strictEqual(date.getTime(), 0);
    });

    await t.test('returns epoch for number input', () => {
        const date = parseNewsDate(12345);
        assert.strictEqual(date.getTime(), 0);
    });

    await t.test('returns epoch for object input', () => {
        const date = parseNewsDate({});
        assert.strictEqual(date.getTime(), 0);
    });
});
