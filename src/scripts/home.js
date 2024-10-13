function createHomeLayout() {

  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement("header", { class: "header" }, [
      UI.createElement("a", { href: "./index.html", class: "button" }, "Log In"),
      UI.createElement("a", { href: "./registration.html", class: "button" }, "Register") 
        ]),
    UI.createElement("main", { class: "main-section" }, [
      UI.createElement("nav", { class: "sidebar" }, "Sidebar"),
      UI.createElement("div", { class: "section" }, [
        UI.createElement("section", { class: "box" }, "Section 1"),
        UI.createElement("section", { class: "box" }, "Section 2"),
        createFooter(),
      ]),
    ]),
  ]);
  UI.render(container, document.body);
}
function createFooter() {
  return UI.createElement(
    "footer",
    { class: "footer", id: "time-footer" },
    Date().toString()
  );
}
setInterval(() => {
  const section = document.querySelector("div.section");
  const footer = document.getElementById("time-footer");
  if (footer) {
    section.removeChild(footer);
  }
  const newFooter = createFooter();
  UI.render(newFooter, section);
}, 1000);
createHomeLayout();
