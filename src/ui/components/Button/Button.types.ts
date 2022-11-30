import React from 'react';
import { ButtonVariants } from '@/ui/components';

type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HtmlButton {
  children: string;
  variant?: ButtonVariants;
}
