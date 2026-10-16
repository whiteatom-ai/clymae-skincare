// Run: npm test
import assert from 'node:assert/strict';
import { calculatePrescription, type Zone, type SkinFeel } from './engine';

const none = { highAc: false, hardWater: false, commute: false };
const ac = { ...none, highAc: true };
const run = (zone: Zone, skinFeel: SkinFeel, modifiers = none) =>
  calculatePrescription({ zone, skinFeel, modifiers }).skuId;

for (const s of ['oily', 'normal', 'dry'] as SkinFeel[]) {
  assert.equal(run('C', s), 'SKU-04');
  assert.equal(run('C', s, ac), 'SKU-04'); // Gate 1 overrides AC
  assert.equal(run('B', s), 'SKU-02');
  assert.equal(run('D', s), 'SKU-03');
  assert.equal(run('D', s, ac), 'SKU-02');
}
assert.equal(run('A', 'oily'), 'SKU-01');
assert.equal(run('A', 'normal'), 'SKU-01');
assert.equal(run('A', 'oily', ac), 'SKU-01'); // Gate 2 precedes AC
assert.equal(run('A', 'dry'), 'SKU-02');

console.log('engine: all gate paths pass');
