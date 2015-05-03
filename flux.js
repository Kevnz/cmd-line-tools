'use strict';
require('babel/register');
let to = require('to-case');
let path = require('path');
let pluralize = require('pluralize');
let fs = require('fs');
let argv = require('minimist')(process.argv.slice(2));

fs.mkdirSync('./app');
fs.mkdirSync('./app/component');
fs.mkdirSync('./app/actions');
fs.mkdirSync('./app/stores');
fs.mkdirSync('./app/containers');
fs.mkdirSync('./app/utils');