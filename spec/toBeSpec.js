describe('Comparador toBe', function () {
  it('Deve validar o toBe', function () {
    obj1 = { value: true };
    obj2 = { value: true };

    expect(true).toBe(true);
    expect('42').toBe('42');
    expect(obj1).not.toBe(obj2);
  });
});
