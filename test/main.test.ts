import {CinetPay} from "../src";

test('Create Cinet', () => {
  const cinet = CinetPay.init({baseUrl: '', site_id: '', apikey:''});
  expect(cinet).toBeDefined();
});

