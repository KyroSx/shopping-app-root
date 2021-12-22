import { shade } from 'polished';

export const Colors = {
  addShade: (color: string, percentage: number) => shade(percentage, color),
};
