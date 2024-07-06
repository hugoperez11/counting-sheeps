import { describe, it, expect } from 'vitest';
import { countSheeps } from './src/sheepsCount'; 

describe('countSheeps', () => {
  it('shoud count correctly the amount of sheeps on the list', () => {
    const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
    expect(countSheeps(list1)).toBe('There are 17 sheep in total');
  });
  it('shoud return: UPS!!! Wolfs eaten Sheeps', () => {
    const list2 = [ false, false, false ]
    expect(countSheeps(list2)).toBe('UPS!!! Wolfs eaten Sheeps')
  })  
});
