import { IHttpClient } from '../httpClient/httpClient.interface';
import { INewsletterClient } from './newsletter.interface';

export class NewsletterClient implements INewsletterClient {
  config = null;

  constructor(private httpClient: IHttpClient) {}

  async subscribe(email: string): Promise<void> {
    try {
      await this.httpClient.post(
        'https://connect.mailerlite.com/api/subscribers',
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${this.getConfig().apiKey}`,
          },
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  private getConfig() {
    if (!this.config) {
      this.config = {
        apiKey: process.env.NEXT_PUBLIC_MAILER_LITE_API_KEY,
      };
    }

    return this.config;
  }
}
