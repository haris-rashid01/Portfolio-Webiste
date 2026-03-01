const fs = require('fs');
const pdfParse = require('pdf-parse');
pdfParse(fs.readFileSync('Haris Rashid Resume.pdf')).then(data => {
    fs.writeFileSync('out.json', JSON.stringify({ success: true, text: data.text }), "utf8");
}).catch(err => {
    fs.writeFileSync('out.json', JSON.stringify({ success: false, error: err.stack || err.message }), "utf8");
});
