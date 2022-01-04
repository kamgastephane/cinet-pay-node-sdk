import {Config} from "./model/config";
import {validateConfig} from "./validation";
import {CinetPayClient} from "./client/CinetPayClient";

const CinetPay = {
  init: (config: Config): CinetPayClient =>{
    validateConfig(config);
    const client = new CinetPayClient(config);
    return client;
  }
}
export {
  CinetPay
}
