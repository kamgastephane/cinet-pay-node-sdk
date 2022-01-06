import HttpClient from "./HttpClient";
import {Config} from "../model/config";
import {validateCheck, validateRequest} from "../validation";
import {payment} from "../model/payment";

export class CinetPayClient extends HttpClient{
  constructor(private config: Config) {
    super(config.baseUrl, 60e3);

  }

  /**
   * initiate a payment request.
   * This will return mainly a URL that can be used to redirect the user to a payment page
   * @param request
   * @throws {@link IllegalArgumentError} if a parameter in the request is invalid
   */
  public async initiate(request:payment.Request): Promise<payment.Response> {
    validateRequest(request);
    const payload = {
      ...request,
      apikey: this.config.apikey,
      site_id: this.config.site_id
    };
    return await this.instance.post<payment.Response, payment.Response>(`${this.config.baseUrl}/v2/payment`, payload);
  }

  /**
   * get the status of a payment
   * @param request
   * @throws {@link IllegalArgumentError} if a parameter in the request is invalid
   */
  public async check(request:payment.Check): Promise<payment.Payment> {
    validateCheck(request);
    const payload = {
      ...request,
      apikey: this.config.apikey,
      site_id: this.config.site_id
    };
    return await this.instance.post<payment.Payment, payment.Payment>(`${this.config.baseUrl}/v2/payment/check`, payload);
  }






}
