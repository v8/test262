// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    IteratorClose throws a TypeError when `return` returns a non-Object value
info: |
    ArrayAssignmentPattern :
        [ AssignmentElementList , Elisionopt AssignmentRestElementopt ]

    [...]
    3. Let iteratorRecord be Record {[[iterator]]: iterator, [[done]]: false}.
    4. Let status be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentElementList using
       iteratorRecord as the argument.
    5. If status is an abrupt completion, then
       a. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
          status).
       b. Return Completion(status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    6. Let innerResult be Call(return, iterator, « »).
    7. If completion.[[type]] is throw, return Completion(completion).
    8. If innerResult.[[type]] is throw, return Completion(innerResult).
    9. If Type(innerResult.[[value]]) is not Object, throw a TypeError
       exception.
features: [Symbol.iterator]
es6id: 12.14.5.2
esid: sec-runtime-semantics-destructuringassignmentevaluation
---*/

var iterable = {};
var x;
var nextCount = 0;
var iterator = {
  next: function() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return: function() {
    return null;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};

assert.throws(TypeError, function() {
  [ x , ] = iterable;
});
