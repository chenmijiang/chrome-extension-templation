import React from 'react';

interface RequireContext {
  keys(): string[];

  (id: string): any;
}

const importAll = (requireContext: RequireContext): void => {
  requireContext.keys().forEach(requireContext);
};

try {
  // @ts-ignore
  importAll(require.context('@/assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

interface IconProps {
  className?: string;
  name: string;

  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ className, name, ...props }) => {
  return (
    <svg className={className ? className : 'icon'} {...props}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
};

export default Icon;
