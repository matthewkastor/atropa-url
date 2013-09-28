var url = require('../src/atropa-url.js');

try {
    Object.keys(url).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = url[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-url.js');
}

Object.keys(url.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = url.data[prop];
    }
);
