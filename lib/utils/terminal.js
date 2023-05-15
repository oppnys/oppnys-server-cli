"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandSpawn = void 0;
// @ts-nocheck
const child_process_1 = require("child_process");
function commandSpawn(...args) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const childProcess = (0, child_process_1.spawn)(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stdout);
        childProcess.on('close', () => {
            resolve();
        });
        childProcess.on('error', (error) => {
            reject(error);
        });
    });
}
exports.commandSpawn = commandSpawn;
