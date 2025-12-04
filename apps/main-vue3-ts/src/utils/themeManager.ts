import { themeConfigs, DEFAULT_THEME, type ThemeKey, type ThemeConfig } from '../config/themes';

export type ThemeType = ThemeKey;

export const THEME_STORAGE_KEY = 'main-vue3-ts-theme';

class ThemeManager {
  private currentTheme: ThemeKey;

  constructor() {
    this.currentTheme = DEFAULT_THEME;
    this.init();
  }

  private init(): void {
    if (typeof window !== 'undefined') {
      const cached = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeKey | null;
      if (cached && themeConfigs[cached]) {
        this.currentTheme = cached;
      }
    }
    this.applyTheme(this.currentTheme, false);
  }

  applyTheme(themeKey: ThemeKey, showMessage = true): boolean {
    const themeConfig = themeConfigs[themeKey];
    if (!themeConfig) {
      console.warn(`主题 ${themeKey} 不存在`);
      return false;
    }

    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      const body = document.body;
      const root = document.documentElement;

      body.classList.remove('theme-light', 'theme-dark');
      body.classList.add(`theme-${themeKey}`);

      if (themeKey === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }

      window.localStorage.setItem(THEME_STORAGE_KEY, themeKey);

      window.dispatchEvent(
        new CustomEvent('themeChanged', {
          detail: { theme: themeKey, config: themeConfig },
        })
      );
    }

    this.currentTheme = themeKey;

    if (showMessage) {
      console.log(`主题已切换到: ${themeConfig.name}`);
    }
    return true;
  }

  getCurrentTheme(): { key: ThemeKey; config: ThemeConfig } {
    return {
      key: this.currentTheme,
      config: themeConfigs[this.currentTheme],
    };
  }

  getAvailableThemes(): ThemeConfig[] {
    return Object.values(themeConfigs);
  }

  switchToLight(): boolean {
    return this.applyTheme('light');
  }

  switchToDark(): boolean {
    return this.applyTheme('dark');
  }

  registerTheme(themeKey: ThemeKey, themeConfig: ThemeConfig): void {
    themeConfigs[themeKey] = themeConfig;
  }
}

export const themeManager = new ThemeManager();

export default ThemeManager;

export type { ThemeKey, ThemeConfig };
