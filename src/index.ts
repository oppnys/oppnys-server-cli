#!/usr/bin/env ts-node

import {helpOptions} from './core/help'
import createCommands from './core/create'
import {program} from "commander";

// 帮助和可选参数
helpOptions()

createCommands()

program.parse(process.argv)