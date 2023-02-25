import { DataType, IHttpClient } from './httpClient.interface';

export class HttpClient implements IHttpClient {
  constructor(private url = '', private getConfig = () => ({})) {}

  async post<T>(
    path: string,
    body?: any,
    opts: {
      headers?: HeadersInit;
      type?: DataType.JSON;
    } = {}
  ): Promise<T> {
    const config: RequestInit = {
      ...this.getConfig(),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    if (opts.headers) {
      Object.assign(config.headers, { ...opts.headers });
    }

    const resp = await fetch(this.url + path, config).then(r =>
      this.handleDataType(r, opts.type)
    );

    return resp;
  }

  private handleDataType(response, type = DataType.JSON) {
    switch (type) {
      case DataType.JSON:
        return response.json();
      default:
        return response.json();
    }
  }
}
