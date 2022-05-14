const appString = "@meet-clone";
const appToken = `${appString}/token`;
const appRefreshToken = `${appString}/refreshToken`;
const appLastTimeSession = `${appString}/lastTimeSession`;
const themeColor = `${appString}/theme_color`;
const themeMode = `${appString}/theme_mode`;
const navBar = `${appString}/nav_bar`;
const sideBar = `${appString}/side_bar`;
const direction = `${appString}/direction`;
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

  static getNabBar() {
    return localStorage.getItem(navBar);
  }

  static saveNabBar(navbar) {
    return localStorage.setItem(navBar, navbar);
  }

  static getSideBar() {
    return localStorage.getItem(sideBar);
  }

  static saveSideBar(sideBar) {
    return localStorage.setItem(sideBar, sideBar);
  }

  static getDirection() {
    return localStorage.getItem(direction);
  }

  static saveDirection(orientation) {
    return localStorage.setItem(direction, orientation);
  }

  static getLanguage() {
    return localStorage.getItem(language);
  }

  static saveLanguage(lang) {
    return localStorage.setItem(language, lang);
  }

  static saveAuthPaths(data) {
    return localStorage.setItem(paths, data);
  }

  static getAuthPaths() {
    return localStorage.getItem(paths);
  }

  static saveFreeUser(data) {
    return localStorage.setItem(freeUser, data);
  }

  static getFreeUser() {
    return localStorage.getItem(freeUser);
  }

  static deleteFreeUser() {
    localStorage.removeItem(freeUser);
  }

  static cleanStorage() {
    localStorage.clear();
  }
}

export default Storage;
