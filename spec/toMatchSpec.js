describe('Comparador toMatch', function () {
  it('Deve validar o texto com toMatch', function () {
    const str = 'Curso de test com Jasmine';

    expect(str).toMatch('Jasmine');
    expect(str).toMatch(/Jasmine/);
    expect('06020-145').toMatch(/^\d{5}-\d{3}$/);
  });
});
