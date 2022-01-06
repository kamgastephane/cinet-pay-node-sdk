import {currencies, payment} from "./model/payment";
import {IllegalArgumentError} from "./error/IllegalArgumentError";
import {Config} from "./model/config";

export const validateRequest = (request: payment.Request): void=> {
  if (!request.transaction_id) {
    throw new IllegalArgumentError('transaction_id', request.transaction_id)
  }
  if (!request.amount) {
    throw new IllegalArgumentError('amount', request.amount?request.amount.toString():"undefined")
  }
  if (request.amount<100) {
    throw new IllegalArgumentError('amount', "< 100")
  }
  if (!request.currency || currencies.indexOf(request.currency) == -1) {
    throw new IllegalArgumentError('currency', request.currency?request.currency.toString():"undefined")
  }
  if (!request.description) {
    throw new IllegalArgumentError('description', request.description?request.description.toString():"undefined")
  }
  if (!request.notify_url) {
    throw new IllegalArgumentError('notify_url', request.notify_url?request.notify_url.toString():"undefined")
  }
  if (!request.return_url) {
    throw new IllegalArgumentError('return_url', request.return_url?request.return_url.toString():"undefined")
  }
};

export const validateConfig = (config: Config):void => {
  if (!config.baseUrl) {
    throw new IllegalArgumentError('baseUrl', config.baseUrl?config.baseUrl.toString():"undefined")
  }
  if (!config.site_id) {
    throw new IllegalArgumentError('site_id', config.site_id?config.site_id.toString():"undefined")
  }
  if (!config.apikey) {
    throw new IllegalArgumentError('apikey', config.apikey?config.apikey.toString():"undefined")
  }
};

export const validateCheck = (request: payment.Check): void => {
  if (!request.transaction_id) {
    throw new IllegalArgumentError('transaction_id', request.transaction_id?request.transaction_id.toString():"undefined")
  }
};
