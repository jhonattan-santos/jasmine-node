describe('Atuador beforeEach', function () {
  let n = 0;

  beforeEach(function () {
    n++;
  });

  it('Deve verificar se n é igual 1', function () {
    expect(n).toBe(1);
  });

  it('Deve verificar se n não é igual 1', function () {
    expect(n).not.toBe(1);
  });

  it('Deve verificar se n é igual 3', function () {
    expect(n).toBe(3);
  });
});
