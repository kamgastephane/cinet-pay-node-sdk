import {CinetPay} from "../src";

test('Create Cinet', () => {
  const cinet = CinetPay.init({baseUrl: 'url', site_id: 'site_ir', apikey:'apikey'});
  expect(cinet).toBeDefined();
});

