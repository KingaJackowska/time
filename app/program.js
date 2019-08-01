var getOSinfo = require('../modules/getOsInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    var instruction = input.toString().trim();

    switch (instruction) {
        case '/exit':
            process.exit();
            break
        case '/version':
            process.stdout.write("Current verision: " + process.versions.node);
            break
        case '/language':
            process.stdout.write("Language: " + process.env.LANG);
            break
        case '/getOSinfo':
            getOSinfo.print();
            break
        default:
            process.stderr.write('Wrong instruction!\n');
    }
});