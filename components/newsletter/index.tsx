import { useContext, useState } from 'react';
import { LoadingSpinner } from '../atoms/loading-spinner';
import { getNewsletterService } from './useNewsletterService';
import validator from 'validator';
import { ToastContext } from '../toasts/toast-provider';
import { ToastLevel } from '../toasts/toasts.interface';

type Props = {
  type?: 'small' | 'large';
};

export default function NewsletterSignup({ type = 'small' }: Props) {
  const [loading, setLoading] = useState(false);

  const { addToast, removeToast } = useContext(ToastContext);

  async function subscribe(email) {
    if (!validator.isEmail(email)) {
      addToast({
        title: 'Invalid Email',
        description: 'Please try again.',
        type: ToastLevel.Error,
      });
      return;
    }
    setLoading(true);
    await getNewsletterService().subscribe(email);
    setLoading(false);
    addToast({
      title: 'Success!',
      description: 'Thank you for subscribing to my newsletter.',
      type: ToastLevel.Success,
    });
  }

  return type == 'large' ? (
    <div className="bg-white py-8 md:py-12 mt-16 mb-12 relative border-t border-b md:border-0">
      <div className="hidden md:block absolute -z-10 -inset-x-12 lg:-inset-x-20 -inset-y-1 rounded-md shadow border border-gray-200"></div>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
        Tired of bookmarking this site? Get new posts via email.
      </h2>
      <div className="mt-6">
        <EmailInput
          loading={loading}
          onEmailInput={email => subscribe(email)}
        />
      </div>
      <p className="text-xs md:text-sm leading-4 text-gray-500 font-light mt-2">
        I will never pass your email to any third-party, and I promise to never
        send you spam.
      </p>
    </div>
  ) : (
    <div>
      <span className="text-sm text-gray-500">Newsletter</span>
      <EmailInput loading={loading} onEmailInput={email => subscribe(email)} />
      <p className="text-xs md:text-sm leading-4 text-gray-500 font-light mt-2">
        I will never pass your email to any third-party, and I promise to never
        send you spam.
      </p>
    </div>
  );
}

function EmailInput({
  loading,
  onEmailInput,
}: {
  loading?: boolean;
  onEmailInput: (email: string) => void;
}) {
  const [email, setEmail] = useState('');

  function handleEmailSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    onEmailInput(email);
  }

  return (
    <form className="w-full" onSubmit={e => handleEmailSubmit(e)}>
      <div className="flex gap-x-4">
        <label className="sr-only" htmlFor="email"></label>
        <input
          className="sr-only"
          autoComplete="off"
          type="email"
          id="email"
          name="email"
          placeholder="Your e-mail here"
        ></input>
        <label htmlFor="__esmail" className="sr-only">
          Email address
        </label>
        <input
          id="__esmail"
          name="__esmail"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 focus-visible:ring-brand-accent focus-visible:outline-none"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-brand-accent py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {loading ? <LoadingSpinner /> : <span>Subscribe</span>}
        </button>
      </div>
    </form>
  );
}
