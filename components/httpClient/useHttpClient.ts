import { HttpClient } from '.';

let httpClient = null;

export function getHttpClient() {
  if (!httpClient) {
    httpClient = new HttpClient();
  }
  return httpClient;
}
