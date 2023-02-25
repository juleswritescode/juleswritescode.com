import { HttpClient } from '../httpClient';
import { NewsletterClient } from './newsletterClient';
import { NewsletterService } from './newsletterService';

let newsletterService = null;

export function getNewsletterService() {
  if (!newsletterService) {
    newsletterService = new NewsletterService(
      new NewsletterClient(new HttpClient())
    );
  }
  return newsletterService;
}
