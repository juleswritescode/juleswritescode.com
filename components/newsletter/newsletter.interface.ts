export interface INewsletterClient {
  subscribe: (email: string) => Promise<void>;
}

export interface INewsletterService {
  subscribe: (email: string) => Promise<void>;
}
