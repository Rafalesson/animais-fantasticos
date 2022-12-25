const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // Função para adicionar a classe ativo
    const activeClass = (index) => {
      // Remove a classe ativo de todos os itens
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      // Adiciona a classe ativo no item selecionado
      tabContent[index].classList.add("ativo");
    };

    // Adiciona o evento de click em cada item do menu
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeClass(index);
      });
    });
  }
};

initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    // Adiciona a classe ativo no primeiro item
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

     // Função para adicionar a classe ativo
     function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    // Adiciona o evento de click em cada item do menu
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
};

initAccordion();

const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};

initScrollSuave();

const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.5;

  const animaScroll = () => {
    sections.forEach((section) => { 
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  
  animaScroll();
  
  window.addEventListener("scroll", animaScroll);
  
};

initAnimacaoScroll();

