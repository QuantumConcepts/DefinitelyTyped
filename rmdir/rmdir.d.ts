// Type definitions for Node.JS package rmdir v1.1.0
// Project: https://github.com/dreamerslab/node.rmdir
// Definitions by: Josh McCullough <https://github.com/JoshMcCullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "rmdir" {
	interface IRmDirCallback {
		(err: any, dirs: Array<string>, files: Array<string>): any;
	}
	
	function rmdir(dir: string, options: any, callback: IRmDirCallback): void;

	export = rmdir;
}