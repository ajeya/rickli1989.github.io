import test from 'ava';
import * as app from '../built';

test('Is leap year', t => {
    t.same(app.isLeapYear(2000), true);
});
