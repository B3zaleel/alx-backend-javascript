const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  })
});
