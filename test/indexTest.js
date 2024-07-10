require ( './helpers.js' );

const { divide, square, add } = require('./index');

describe('index.js', () => {
  it('has a function expression called divide', () => {
    expect(divide).toBeDefined();
  });

  it('divide divides 2000 by 100', () => {
    expect(divide(2000, 100)).toBe(20);
  });

  it('has an arrow function called square', () => {
    expect(square).toBeDefined();
  });

  it('square arrow function takes one parameter and multiplies it times itself', () => {
    expect(square(4)).toBe(16);
  });

  it('has an arrow function called add', () => {
    expect(add).toBeDefined();
  });

  it('add arrow function takes two parameters and adds them together', () => {
    expect(add(2, 3)).toBe(5);
  });
});


/*describe("index.js", () => {
  it("has a function expression called divide", () => {
    expect(divide).to.exist
  })

  it("divide divides 2000 by 100", () => {
    let a = 2000
    let b = 100
    expect(divide(a,b)).to.equal(a/b)
  })

  it("has an arrow function called square", () => {
    expect(square).to.exist
  })

  it("square arrow function takes one parameter and multiplies it times itself", () => {
    let x = 2
    expect(square(x)).to.equal(4)
  })

  it("has an arrow function called add", () => {
    expect(add).to.exist
  })

  it("add arrow function takes two parameters and adds them together", () => {
    let a = 3
    let b = 4
    expect(add(a,b)).to.equal(a+b)
  })
})*/

