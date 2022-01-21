const uppercase = require('./ex7');

test('teste ex7 uppercase', (done) => {
  uppercase('testando som', (result) => {
    try {
      expect(result).toBe(result.toUpperCase())
      done(); // feito, acabou
    }catch(error){
      done(error); // feito recebe como param o error e fechou
    }
  });
});