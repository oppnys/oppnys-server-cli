import {program} from "commander";
import {createProjectAction} from "./actions";

export default function createCommands(){
    program.command('create <peoject> <templateRepo> [others...]')
        .description('clone repository into folder')
        .action(createProjectAction);
}