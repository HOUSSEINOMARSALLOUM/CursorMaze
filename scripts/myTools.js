function addEventListenerToElement(element, eventType, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventType, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventType, callback);
  }
}

function $(id) {
  return document.getElementById(id);
}

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
}

function $$(selector, context) {
  context = context || document;
  return context.querySelectorAll(selector);
}
