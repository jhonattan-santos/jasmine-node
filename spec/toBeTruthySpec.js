describe('Comparador toBeTruthy', function () {
  it('Deve demonstrar a utilização do toBeTruthy', function () {
    const n1 = 42;
    const n2 = undefined;
    const n3 = NaN;
    const n4 = null;
    const n5 = '';
    const n6 = false;
    let n7;

    expect(n1).toBeTruthy();
    expect('Dont Panic!').toBeTruthy();
    expect(n2).not.toBeTruthy();
    expect(n3).not.toBeTruthy();
    expect(n4).not.toBeTruthy();
    expect(n5).not.toBeTruthy();
    expect(n6).not.toBeTruthy();
    expect(n7).not.toBeTruthy();
  });
});
