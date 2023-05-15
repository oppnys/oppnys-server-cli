"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRepo = void 0;
const download_git_repo_1 = __importDefault(require("download-git-repo"));
function downloadRepo(url, project) {
    return new Promise((resolve, reject) => {
        (0, download_git_repo_1.default)(url, project, { clone: true }, (err) => {
            if (!!err) {
                reject(false);
            }
            resolve(true);
        });
    });
}
exports.downloadRepo = downloadRepo;
