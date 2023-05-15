"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const actions_1 = require("./actions");
function createCommands() {
    commander_1.program.command('create <peoject> <templateRepo> [others...]')
        .description('clone repository into folder')
        .action(actions_1.createProjectAction);
}
exports.default = createCommands;
