import * as _ from ".";

Object.assign(global, _);

declare global {
  var __filename: typeof _.__filename;
  var __dirname: typeof _.__dirname;
  var $: typeof _.$;
  var glob: typeof _.glob;
  var fs: typeof _.fs;
  var parallel: typeof _.parallel;
  var sleep: typeof _.sleep;
}
