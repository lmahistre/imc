const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.resolve(__dirname);

if (!fs.existsSync(baseDir+'/addon/img')) {
	fs.mkdirSync(baseDir+'/addon/img');
}

const formats = [32, 48, 64, 96, 128, 512];

formats.reduce(function(seq, format) {
	return seq.then(function() {
		return sharp(baseDir + '/src/icon.png')
		.resize(format)
		.toFile(baseDir+'/addon/img/logo-'+format+'.png');
	});
}, Promise.resolve()).then(function() {
	process.stdout.write('Images for addon generated\n');
}).then(function() {
	fs.copyFileSync(baseDir+'/src/manifest.json', baseDir+'/addon/manifest.json');
	process.stdout.write('Copied manifest\n');
});
