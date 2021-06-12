describe('Comparador toEqual', function () {
  it('Deve validar o toEqual', function () {
    obj1 = { value: true };
    obj2 = { value: true };

    expect(true).toEqual(true);
    expect(obj1).toEqual(obj2);
  });
});
