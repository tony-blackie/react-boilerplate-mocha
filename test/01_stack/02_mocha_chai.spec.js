import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Mocha Chai Demo', () => {
    describe('Array operations', () => {
        describe('#indexOf', () => {
            it('should return -1 when value is not present', () => {
                expect([1, 2, 3].indexOf(5)).to.equal(-1);
                expect([1, 2, 3].indexOf(0)).to.equal(-1);
            });
        });

        describe('length', () => {
            it('should return 0 when array is empty', () => {
                expect([].length).to.equal(0);
            });

            it('should return number of elements in array', () => {
                //TODO
            });
        });

    })
});