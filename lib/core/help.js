"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpOptions = void 0;
const commander_1 = require("commander");
const { version } = require('../../package.json');
function helpOptions() {
    commander_1.program
        .option('-V --version', 'output the version number')
        .option(`-d --dest <dest>`, 'a destination folder')
        .option('-p, --port <number>', 'port number')
        .action((name, options, command) => {
        if (name.help) {
            console.log('oppnys server cli');
        }
        if (name.version) {
            console.log(version);
        }
    });
}
exports.helpOptions = helpOptions;
