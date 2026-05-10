import { atom } from 'nanostores';
import { themeConfig } from './config/portfolio.config';
import type { ThemeOptionType } from '../scripts/generateThemes';

export const themeStore = atom<ThemeOptionType>(themeConfig);