export default class DomHelper {
  static createElement(selector, classNames) {
    const element = document.createElement(selector);
    if (classNames !== undefined) {
      for (let i = 0; i < classNames.length; i++) {
        element.classList.add(classNames[i]);
      }
    }
    return element;
  }
}
