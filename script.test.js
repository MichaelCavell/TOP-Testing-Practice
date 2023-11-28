import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from "./script";

describe('capitalize function takes a string and returns it with the first character capitalized', () => {
    test('capitalize function exists', () => {
        expect(capitalize);
    });
    test('capitalize function exists twice', () => {
        expect(capitalize);
    });
    test('capitalize function returns a string', () => {
        const result = typeof capitalize('testing');
        expect(result).toBe('string');
    });
    test('capitalize returns string with the first character capitalized', () => {
        const result = capitalize('testing');
        expect(result).toBe('Testing');
    })
})

describe('reverseString takes a string and returns it reversed', () => {
    test('reverseString reverses', () => {
        const result = reverse('reverse');
        expect(result).toBe('esrever');
    })
})

describe('Test calculator object--add, subtract, divide, multiply', () => {
    test('add', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
    })
    test('subtract', () => {
        const result = calculator.subtract(2, 2);
        expect(result).toBe(0);
    })
    test('divide', () => {
        const result = calculator.divide(2, 2);
        expect(result).toBe(1);
    })
    test('multiply', () => {
        const result = calculator.multiply(2, 3);
        expect(result).toBe(6);
    })
})

describe('caesarCipher', () => {
    it('shifts characters in a string based on the shift factor', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  
    it('wraps from z to a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });
  
    it('keeps the same case', () => {
      expect(caesarCipher('AbC', 2)).toBe('CdE');
    });
  
    it('handles punctuation', () => {
      expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    });
  
    it('handles negative shift factor', () => {
      expect(caesarCipher('abc', -1)).toBe('zab');
    });
  
    it('handles large shift factor', () => {
      expect(caesarCipher('abc', 26)).toBe('abc');
    });
  });


test('analyzeArray should return correct values for array [1, 8, 3, 4, 2, 6]', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
});
  
test('analyzeArray should return correct values for array [10, 5, 7, 2]', () => {
    const result = analyzeArray([10, 5, 7, 2]);
    expect(result).toEqual({
      average: 6,
      min: 2,
      max: 10,
      length: 4
    });
});
  