import test from 'ava';

import Numeris from '../src/numeris';

test('1 should be I', t => {
  const numeris = new Numeris();
  t.is(numeris.toNumeral(1), 'I');
});

test('2 should be II', t => {
  const numeris = new Numeris();
  t.is(numeris.toNumeral(2), 'II');
});
