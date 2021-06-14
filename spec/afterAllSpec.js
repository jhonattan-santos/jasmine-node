describe('Atuador afterAll', function () {
  let n;

  afterAll(function () {
    n = 0;
  });

  beforeAll(function () {
    n = 10;
  });

  it('Deve garantir que o valor de n é 11', function () {
    expect(n).toEqual(10);
  });
});
