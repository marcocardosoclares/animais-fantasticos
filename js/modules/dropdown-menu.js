import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents, activeClass) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.userEvents = userEvents;
    this.activeClass = activeClass;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      this.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
