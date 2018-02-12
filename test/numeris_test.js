import test from 'ava';

import Numeris from '../src/numeris';

test.beforeEach(t => {
  t.context = new Numeris().toNumeral;
});

const testNumber = (actual, expected) => {
  test(`${actual} should be ${expected}`, t => {
    t.is(t.context(actual), expected);
  });
}

testNumber(1, 'I');
testNumber(2, 'II');
testNumber(3, 'III');

testNumber(4, 'IV');
testNumber(5, 'V');
testNumber(6, 'VI');

testNumber(9, 'IX');
testNumber(10, 'X');
testNumber(15, 'XV');
testNumber(17, 'XVII');
testNumber(19, 'XIX');

testNumber(27, 'XXVII');
testNumber(29, 'XXIX');

testNumber(34, 'XXXIV');
