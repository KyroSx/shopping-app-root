export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

const isVariant = (variant: ButtonVariants) => (value: string) =>
  variant === value;

export const isSecondary = isVariant(ButtonVariants.secondary);
export const isPrimary = isVariant(ButtonVariants.primary);
