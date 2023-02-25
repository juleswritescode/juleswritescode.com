export interface IHttpClient {
  post<T>(
    url: string,
    body: any,
    options: {
      headers?: HeadersInit;
      type?: DataType;
    }
  ): Promise<T>;
}

export enum DataType {
  JSON = 'json',
}
