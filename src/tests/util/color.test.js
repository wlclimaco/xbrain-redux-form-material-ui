import { rgbToHex, hexToRgb } from '../../lib/util/color';

it('color rgb(255, 255, 255) should be #ffffff hexadecimal', () => {
  expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
});

it('color #ffffff should be rgb(255, 255, 255)', () => {
  expect(hexToRgb('#ffffff')).toBe('255, 255, 255');
});
