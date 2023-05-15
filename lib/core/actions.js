"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectAction = void 0;
const utils_1 = require("../utils");
const terminal_1 = require("../utils/terminal");
function createProjectAction(projectName, templateRepo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 下载模板
            yield (0, utils_1.downloadRepo)(`direct:${templateRepo}`, projectName);
        }
        catch (_a) { }
        // 执行 npm
        const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        yield (0, terminal_1.commandSpawn)(command, ['install'], { cwd: `./${projectName}` });
        // 执行 npm run serve
        yield (0, terminal_1.commandSpawn)(command, ['run', 'dev'], { cwd: `./${projectName}` });
    });
}
exports.createProjectAction = createProjectAction;
