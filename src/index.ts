#!/usr/bin/env node

import Logger from "./lib/Logger";
import boxen from 'boxen'


console.log(boxen('Elegant terminal spinner', {title: 'ora', titleAlignment: 'center'}))

console.log(boxen('A logger for just about everything.', {title: 'winston', titleAlignment: 'center'}))


console.log(boxen('Interactive command line user interfaces.', {title: 'inquirer', titleAlignment: 'center'}))

console.log(boxen('build interactive command line tools, by parsing arguments and generating an elegant user interface.', {title: 'yargs', titleAlignment: 'center'}))


Logger.error('error');
Logger.warn('warn');
Logger.info('info');
Logger.debug('debug');

