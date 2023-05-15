#!/usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const help_1 = require("./core/help");
const create_1 = __importDefault(require("./core/create"));
const commander_1 = require("commander");
// 帮助和可选参数
(0, help_1.helpOptions)();
(0, create_1.default)();
commander_1.program.parse(process.argv);
