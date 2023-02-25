import { INewsletterClient, INewsletterService } from './newsletter.interface';

export class NewsletterService implements INewsletterService {
  constructor(private newsletterClient: INewsletterClient) {}

  async subscribe(email: string): Promise<void> {
    return this.newsletterClient.subscribe(email);
  }
}
