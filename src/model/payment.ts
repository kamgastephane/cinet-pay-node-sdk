
type Currency = 'XOF'| 'XAF' | 'CDF' | 'GNF' | 'USD';
type Channel = 'ALL'| 'MOBILE_MONEY' | 'CREDIT_CARD' | 'WALLET';

export const currencies = ['XOF', 'XAF' , 'CDF' , 'GNF' ,'USD'];

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace payment {

  export interface Request {
    transaction_id: string;
    amount: number // must be a multiple of 5,
    currency: Currency;
    description?: string;
    notify_url: string;
    return_url: string;
    channels: Channel,
    lang?: 'en' | 'fr',
    metadata?: string
  }

  export interface Check {
    transaction_id: string;

  }

  export interface RequestWithClientInfo extends Request {
    customer_name: string;
    customer_surname: string
    customer_id?: string
    // additional fields can be passed here.
  }


  export interface Response {
    code: string;
    message: string;
    description: string;
    data: {
      payment_token: string;
      payment_url: string;
    }
    api_response_id: string
  }

  export interface PaymentNotification {
    cpm_trans_id: string;
    cpm_site_id: string;
    cpm_trans_date: string;
    cpm_amount: string;
    cpm_currency: Currency;
    cel_phone_num: string;
    cpm_version: string;
    signature: string;

  }

  export interface Payment {
    code: string;
    message: string;
    "data": {
      "amount": string,
      "currency": Channel,
      "status": string,
      "payment_method": string,
      "description": string,
      "metadata": string | undefined,
      "operator_id": string,
      "payment_date": string
    }
  }
}

