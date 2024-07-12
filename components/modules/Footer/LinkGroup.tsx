export const LinkGroup = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold">{header}</h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};
