const assert = require('node:assert');
const test = require('node:test');
const { formatTime } = require('./utils');

test('formatTime', async (t) => {
    await t.test('formats a timestamp number correctly', () => {
        // Create a specific date. Note that toLocaleTimeString relies on the local timezone.
        // We will mock it or handle the result appropriately.
        // Let's use UTC string to parse, but since formatTime uses the current locale,
        // it might return a locale-dependent string.
        // A better approach is to mock Date.prototype.toLocaleTimeString or use specific regex matching.

        const timestamp = 1672531200000; // 2023-01-01T00:00:00.000Z
        const formatted = formatTime(timestamp);

        // Since we don't know the exact locale format (e.g. "00:00" or "12:00 AM" or "01:00"),
        // we can test if it matches the general expected structure HH:MM (possibly with AM/PM).
        const timePattern = /^\d{1,2}:\d{2}(?:\s?[AP]M)?$/i;
        assert.match(formatted, timePattern);
    });

    await t.test('formats an ISO date string correctly', () => {
        const dateString = '2023-05-15T14:30:00Z';
        const formatted = formatTime(dateString);

        const timePattern = /^\d{1,2}:\d{2}(?:\s?[AP]M)?$/i;
        assert.match(formatted, timePattern);
    });

    await t.test('handles invalid dates gracefully', () => {
        const formatted = formatTime('invalid-date');
        // 'Invalid Date' will produce a localized string, often "Invalid Date"
        // Let's check what a raw Invalid Date toLocaleTimeString returns:
        const rawInvalid = new Date('invalid').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        assert.strictEqual(formatted, rawInvalid);
    });
});
