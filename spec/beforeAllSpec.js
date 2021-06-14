describe('Atuador beforeAll', function () {
  let n;

  beforeAll(function () {
    n = 10;
  });

  beforeEach(function () {
    n++;
  });

  it('Deve garantir que n é igual a 11', function () {
    expect(n).toEqual(11);
  });

  it('Deve garantir que n é igual a 12', function () {
    expect(n).toEqual(12);
  });
});
