import { BaseDateFormat } from './atoms/base-dateformat';

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <div className="space-y-2 py-2 md:py-4 mb-12 mt-6">
        <BaseDateFormat date={new Date(date)} size="lg" />
        <h1 className="text-gray-800 font-semibold text-3xl md:text-4xl">
          {title}
        </h1>
      </div>
    </>
  );
};

export default PostHeader;
