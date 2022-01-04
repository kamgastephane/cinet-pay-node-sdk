# CinetPay NODE.JS SDK

A simple SDK for calling the CinetPay APIS.
Currently, two APis calls are integrated

### Initialization

The SDK can be initialized by using the following method
```
const cinet = CinetPay.init(config);
```
The config is an object with the following properties:
- apikey: string;
- site_id: string;
- baseUrl: string

### Start a payment
```
const response = await cinet.initiate(request);
```
The request object have the properties described in the [documentation](https://docs.cinetpay.com/api/1.0-en/checkout/initialisation)

This method will expose a payment object as described in the [documentation](https://docs.cinetpay.com/api/1.0-en/checkout/initialisation)

### Get information about a payment

```
const response = await cinet.check(request);
```
The request is an object with the following properties:
- apikey: string;
- site_id: string;
- transaction_id: string
