const fs = require('fs');
const path = require('path');

fs.rmdir(path.resolve(__dirname, '..', 'node_modules', '.cache'), { recursive: true }, (err) => {
  if (err) throw err;
  console.log('CLEAR!');
});
