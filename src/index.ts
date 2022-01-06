import {Config} from "./model/config";
import {validateConfig} from "./validation";
import {CinetPayClient} from "./client/CinetPayClient";
import {roundPrice} from "./helper";

const CinetPay = {
  init: (config: Config): CinetPayClient =>{
    validateConfig(config);
    const client = new CinetPayClient(config);
    return client;
  },

  roundAmount: roundPrice
}
export {
  CinetPay,
  CinetPayClient
}
