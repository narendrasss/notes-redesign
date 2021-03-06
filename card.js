'use strict'

class Card {
  constructor(dept, name, desc) {
    this.dept = dept;
    this.name = name;
    this.desc = desc;
  }

  render(target) {
    const template = document.getElementById("card-template");
    const title = template.content.querySelector(".card__title");
    const dept = template.content.querySelector(".card__dept");
    const desc = template.content.querySelector(".card__desc");
    const link = template.content.querySelector(".card__link");

    title.textContent = this.name;
    dept.textContent = this.dept;
    desc.textContent = this.desc;
    link.href = `notes/${this.name}`;

    const result = document.importNode(template.content, true);
    target.appendChild(result);
  }
}

(function main() {
  const container = document.querySelector(".cards");

  const card210 = new Card("CPSC", 210, "Software Construction");
  const card213 = new Card("CPSC", 213, "Introduction to Computer Systems");
  const card221 = new Card("CPSC", 221, "Beginner Algorithms and Data Structures");
  const card298 = new Card("COMM", 298, "Introduction to Finance");
  const card291 = new Card("COMM", 291, "Introduction to Business Statistics");
  const card310 = new Card("CPSC", 310, "Introduction to Software Engineering");

  card210.render(container);
  card213.render(container);
  card221.render(container);
  card298.render(container);
  card291.render(container);
  card310.render(container);
}());