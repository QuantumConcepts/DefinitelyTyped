/// <reference path="rmdir.d.ts"/>

import rmdir = require("rmdir");

rmdir("test", { }, (err: any, dirs: Array<string>, files: Array<string>) => { });