import {CinetPay} from "../src";
import {roundPrice} from "../src/helper";

test('Create Cinet', () => {
  const cinet = CinetPay.init({baseUrl: 'url', site_id: 'site_ir', apikey:'apikey'});
  expect(cinet).toBeDefined();
});


test('roundPrice', ()=> {
  expect(roundPrice(343)).toBe(345);
  expect(roundPrice(22)).toBe(25);
  expect(roundPrice(700)).toBe(700);
  expect(roundPrice(71)).toBe(75);

});
