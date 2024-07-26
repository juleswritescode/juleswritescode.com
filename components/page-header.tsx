type Props = {
  heading: string;
  subheading?: React.ReactNode;
};

export function PageHeader({ heading, subheading }: Props) {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-800 mt-8">{heading}</h1>
      {subheading && (
        <p className="text-gray-700 mt-4 leading-6 font-normal">{subheading}</p>
      )}
    </div>
  );
}
