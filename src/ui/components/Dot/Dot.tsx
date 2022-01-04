import React from 'react';
import { Text } from '@/ui/components';

type HtmlParagraph = React.ParamHTMLAttributes<HTMLParagraphElement>;

export function Dot({ ...htmlProps }: HtmlParagraph) {
  return <Text {...htmlProps}>&bull;</Text>;
}
