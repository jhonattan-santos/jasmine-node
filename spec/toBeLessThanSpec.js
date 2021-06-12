describe('Comparador toBeLessThan', function () {
  it('Deve demonstrar como funciona o toBeLessThan', function () {
    const PI = 3.1415;

    expect(3).toBeLessThan(PI);

    expect(3.5).not.toBeLessThan(PI);
  });
});
