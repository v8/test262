// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "getUTCMinutes"
es5id: 15.9.5_A21_T1
description: The Date.prototype has the property "getUTCMinutes"
---*/

if(Date.prototype.hasOwnProperty("getUTCMinutes") !== true){
  $ERROR('#1: The Date.prototype has the property "getUTCMinutes"');
}
