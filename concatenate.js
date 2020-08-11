const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files_es5 = [
        './dist/widget-app/main-es5.js',
        './dist/widget-app/polyfills-es5.js',
        './dist/widget-app/runtime-es5.js',
        './dist/widget-app/styles-es5.js',
        './dist/widget-app/vendor-es5.js'
      ];
      
      const files_es2015 = [
        './dist/widget-app/main-es2015.js',
        './dist/widget-app/polyfills-es2015.js',
        './dist/widget-app/runtime-es2015.js',
        './dist/widget-app/styles-es2015.js',
        './dist/widget-app/vendor-es2015.js'
      ];
      await fs.ensureDir('output');
      await concat(files_es5, 'output/widget_es5.js');
      await concat(files_es2015, 'output/widget_es2015.js');
}
concatenate();