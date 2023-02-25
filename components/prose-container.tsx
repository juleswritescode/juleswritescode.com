type Props = {
  children?: React.ReactNode;
};

export function ProseContainer({ children }: Props) {
  return <div className="container max-w-prose px-5">{children}</div>;
}
