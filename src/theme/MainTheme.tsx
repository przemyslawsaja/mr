import { colors, Colors } from './attributes/Colors';
import { shadows, Shadows } from './attributes/Shadows';
import { fontSizes, FontSizes } from './attributes/FontSizes';
import { borders, Borders } from './attributes/Borders';

export interface ITheme {
  colors: Colors,
  shadows: Shadows,
  fontSizes: FontSizes,
  borders: Borders,
}

export const theme: ITheme = { colors, shadows, fontSizes, borders };

