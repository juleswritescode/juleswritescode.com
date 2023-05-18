type Props = {
  heading: string;
  subheading?: string;
};

export function PageHeader({ heading, subheading }: Props) {
  return (
    <>
      <h1 className="text-5xl font-bold text-gray-800 mt-8">{heading}</h1>
      {subheading && (
        <p className="text-gray-600 mt-8 leading-6 font-light">{subheading}</p>
      )}
    </>
  );
}
