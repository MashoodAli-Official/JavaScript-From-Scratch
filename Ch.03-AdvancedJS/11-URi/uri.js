'use strict';

let uri = "https://www.google.com/search?q=URI+Encoding+and+Decoding+in+Javascript";
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);

console.log("Given URI", uri);
console.log("Encoded URI",encoded);
console.log("Decoded URI", decoded);