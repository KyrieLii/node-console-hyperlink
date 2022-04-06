import { exec } from 'child_process';

const consoleLink = (str, {text, url}) => {
    // shell.exec("echo -e '\e]8;;http://example.com\aThis is a link\e]8;;\a' ")
    // shell.echo('\e]8;;', 'http://example.com\aThis is a link\a', '\e]8;;', '\a')
    const res = exec('echo -e "\\\e]8;;http://example.com\\\aThis is a link\\\e]8;;\\\a" ' , (err, stdout, stdin) => {
        console.log('stdout', stdout)
    });

    exec('echo test', (err, stdout, stdin) => {
        console.log('stdout', stdout)
    })
}

export default consoleLink;