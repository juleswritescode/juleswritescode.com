import PostType from '../interfaces/post';
import { differenceInDays, format } from 'date-fns';
import { BaseDateFormat } from './atoms/base-dateformat';

type Props = {
  post: PostType;
};

const PostPreview = ({ post }: Props) => {
  const isNew =
    Math.abs(differenceInDays(new Date(), new Date(post.date))) < 14;

  return (
    <article
      key={post.slug}
      className="relative flex max-w-prose flex-col items-start justify-between group py-6"
    >
      <span className="hidden lg:inline -z-10 absolute -inset-x-8 inset-y-2 transition group-hover:bg-gray-50/50 group-hover:shadow rounded-xl"></span>
      <div className="flex space-x-4 items-baseline">
        <BaseDateFormat date={new Date(post.date)} size="sm" />
        {isNew && (
          <span className="inline-flex items-center rounded-full bg-brand-accent px-2.5 py-0.5 text-xs font-medium text-white">
            New
          </span>
        )}
      </div>
      <div className="group">
        <h3 className="mt-1 text-xl font-semibold leading-6 text-gray-800 group-hover:text-gray-900">
          <a href={`/articles/${post.slug}`}>
            <span className="absolute -inset-x-12 -inset-y-8" />
            {post.title}
          </a>
        </h3>
        <p className="mt-1 text-base leading-6 text-gray-600 font-nrormal line-clamp-3">
          {post.excerpt}
        </p>
      </div>
      <div className="mt-4">
        <button className="text-brand-accent">Read more &rarr;</button>
      </div>
    </article>
  );
};

export default PostPreview;
