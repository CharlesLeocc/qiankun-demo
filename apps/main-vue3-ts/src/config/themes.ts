export type ThemeKey = 'light' | 'dark';

export interface ThemeConfig {
  key: ThemeKey;
  name: string;
}

export const DEFAULT_THEME: ThemeKey = 'light';

export const themeConfigs: Record<ThemeKey, ThemeConfig> = {
  light: {
    key: 'light',
    name: '浅色主题',
  },
  dark: {
    key: 'dark',
    name: '深色主题',
  },
};
