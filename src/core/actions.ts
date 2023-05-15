import {downloadRepo} from "../utils";
import { commandSpawn } from "../utils/terminal";

export async function createProjectAction(projectName: string, templateRepo: string) {
    try {
        // 下载模板
        await downloadRepo(`direct:${templateRepo}`, projectName);
    } catch {}
    // 执行 npm
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['install'], {cwd: `./${projectName}`})
    // 执行 npm run serve
    await commandSpawn(command, ['run', 'dev'], {cwd: `./${projectName}`})
}