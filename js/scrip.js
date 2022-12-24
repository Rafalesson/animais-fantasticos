const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabContent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  // Função para adicionar a classe ativo
  function activeClass(index) {
    // Remove a classe ativo de todos os itens
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    // Adiciona a classe ativo no item selecionado
    tabContent[index].classList.add("ativo");
  }

  // Adiciona o evento de click em cada item do menu
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeClass(index);
    });
  });
}
