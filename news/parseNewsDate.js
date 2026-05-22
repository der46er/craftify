// Hilfsfunktion: Wandelt "28-01-2024 19:36.txt" in ein Datum um
function parseNewsDate(filename) {
    if (typeof filename !== 'string') {
        return new Date(0);
    }
    const rawName = filename.replace('.txt', '');
    const parts = rawName.split(' ');
    const datePart = parts[0] || '';
    const timePart = parts[1] ? parts[1].replace('-', ':') : '00:00';

    const dParts = datePart.split('-');
    if(dParts.length === 3) {
        return new Date(`${dParts[2]}-${dParts[1]}-${dParts[0]}T${timePart}:00`);
    }
    return new Date(0);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseNewsDate };
}
