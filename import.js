import {apiKey} from "./export.js";
// default can be imported by any name as it not value passed by other file
import apikey1 from "./export.js";

// multiple imports
import { apiKey2,apiKey3 } from "./export.js";

// import as object
import * as utils from "./export.js";

console.log(utils.apiKey3);
console.log(apiKey);
console.log(apikey1);