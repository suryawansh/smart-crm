import { FC } from "react";

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHeader: FC<Props> = ({ title, description, children }) => {
  return (
    <header className="mb-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex space-x-4">{children}</div>
      </div>
      {description && (
        <p className="text-gray-500 mt-4 max-w-full">{description}</p>
      )}
    </header>
  );
};
