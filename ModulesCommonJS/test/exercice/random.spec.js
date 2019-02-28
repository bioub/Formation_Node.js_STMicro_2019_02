const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;

chai.use(sinonChai);

const random = require('../../exercice/random');

describe('#random', () => {
  // describe('#getRandomFloat()', () => {
  //   it('should return a random float', () => {
  //     const originalRandom = Math.random;
  //     let called = false;
  //     Math.random = () => {
  //       called = true;
  //       return 0.123;
  //     };
  //     expect(random.getRandomFloat(0, 100)).to.equal(12.3);
  //     expect(called).to.be.true;
  //     Math.random = originalRandom;
  //   });
  // });

  // describe('#getRandomFloat()', () => {
  //   it('should return a random float', () => {
  //     const spy = sinon.spy(Math, 'random');
  //     random.getRandomFloat(0, 100)
  //     // expect(random.getRandomFloat(0, 100)).to.equal(12.3);
  //     expect(spy.called).to.be.true;
  //     expect(spy.calledWith()).to.be.true;
  //   });
  // });

  describe('#getRandomFloat()', () => {
    it('should return a random float', () => {
      const stub = sinon.stub(Math, 'random');
      stub.returns(0.123);

      expect(random.getRandomFloat(0, 100)).to.equal(12.3);
      expect(stub).to.be.called;
      expect(stub).to.be.calledWith();

      stub.restore();
    });
  });

  // describe('#getRandomFloat()', () => {
  //   it('should return a random float', () => {
  //     const mock = sinon.mock(Math);
  //     mock.expects('random').withArgs().returns(0.123);

  //     expect(random.getRandomFloat(0, 100)).to.equal(12.3);

  //     mock.verify();
  //   });
  // });

  describe('#getRandomInt()', () => {
    it('should return a random int', () => {
      expect(random.getRandomInt(0, 100)).to.equal(12);
    });
  });
});
