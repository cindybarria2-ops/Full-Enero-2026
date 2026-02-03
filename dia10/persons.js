const fs = require('fs');


const writeCSV = (path, data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[headers]).join(','));

    const csvContent = [headers.join(','), ...rows].join('\n');
    fs.writeFileSync(path, csvContent, 'utf8');
};

const readCSV = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    const [headers, ...rows] = data.split('\n').map(row => row.split(','));

    return rows.map(row => {
        row.reduce((obj, value, index) => {
            obj[headers[index]] = value;
            return obj;
        }, {});
    });
}

modeule.exports = { writeCSV, readCSV };