import axios, { AxiosInstance } from "axios";

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  protected constructor(baseURL: string, timeoutInMs: number) {
    this.instance = axios.create({
      baseURL,
      timeout: timeoutInMs,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(value => value.data, error => Promise.reject(error))
  };
}
export default HttpClient;
