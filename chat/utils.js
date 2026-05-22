function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatTime };
}
