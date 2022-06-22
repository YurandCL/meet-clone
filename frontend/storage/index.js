const appString = '@meet-clone';
const appToken = `${appString}/token`;
const appRefreshToken = `${appString}/refreshToken`;
const appLastTimeSession = `${appString}/lastTimeSession`;
const themeColor = `${appString}/theme_color`;
const themeMode = `${appString}/theme_mode`;
const language = `${appString}/language`;
const paths = `${appString}/paths`;
const freeUser = `${appString}/free_user`;

class Storage {
  static getToken() {
    return localStorage.getItem(appToken);
  }

  static getRefreshToken(token) {
    return localStorage.getItem(appRefreshToken, token);
  }

  static saveToken(token) {
    return localStorage.setItem(appToken, token);
  }

  static saveRefreshToken(token) {
    return localStorage.setItem(appRefreshToken, token);
  }

  static saveLastTimeSession(time) {
    return localStorage.setItem(appLastTimeSession, time);
  }

  static getLastTimeSession() {
    return localStorage.getItem(appLastTimeSession);
  }

  static logOut() {
    localStorage.removeItem(appToken);
    localStorage.removeItem(appRefreshToken);
    localStorage.removeItem(paths);
    localStorage.removeItem(freeUser);
    localStorage.removeItem(appLastTimeSession);
  }

  static getThemeColor() {
    return localStorage.getItem(themeColor);
  }

  static saveThemeColor(theme) {
    return localStorage.setItem(themeColor, theme);
  }

  static getThemeMode() {
    return localStorage.getItem(themeMode);
  }

  static saveThemeMode(theme) {
    return localStorage.setItem(themeMode, theme);
  }

  static getLanguage() {
    return localStorage.getItem(language);
  }

  static saveLanguage(lang) {
    return localStorage.setItem(language, lang);
  }

  static cleanStorage() {
    localStorage.clear();
  }
}

export default Storage;
