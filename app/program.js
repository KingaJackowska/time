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
            getOSinfo();
            break
        default:
            process.stderr.write('Wrong instruction!\n');        
    }
});

function getOSinfo() {
    var os = require('os');

    var type = os.type();
    if(type ==='Darwin'){
        type ='OSX';
    } else if(type ==='Windows_NT'){
        type ='Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var secCalc = require('../modules/secCalc.js').secCalc;
    var userInfo = os.userInfo();

    console.log('CPU:', cpu);
    console.log('System:', type);
    console.log('Release:', release);
    console.log('Uptime:', secCalc(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);

};