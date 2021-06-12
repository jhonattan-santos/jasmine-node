describe('Comparador toContain', function () {
  it('Deve verificar se contem o valor dentro da string ou dentro do array', function () {
    const str = 'Dont panic and get your towel';
    const space = ['restaurant', 'towel', '42'];

    expect(str).toContain('towel');
    expect(str).not.toContain('Towel');
    expect(space).toContain('42');
  });
});
