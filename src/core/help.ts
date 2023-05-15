import { program } from "commander";
const { version } = require('../../package.json')

export function helpOptions() {
    program
        .option('-V --version','output the version number')
        .option(`-d --dest <dest>`, 'a destination folder')
        .option('-p, --port <number>', 'port number')

        .action((name, options, command)=>{
            if(name.help){
                console.log('oppnys server cli')
            }
            if(name.version){
                console.log(version)
            }
        })
}
