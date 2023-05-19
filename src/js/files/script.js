// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// == Взаимодействие с карточками Брендов ============
const items = document.querySelectorAll('.item');
const productsBlock = document.querySelectorAll('.products__block');
// -- навешиваем класс ховер для группы блоков с брендами ---
if (productsBlock) {
  productsBlock.forEach(productsBlock => {
    productsBlock.addEventListener('mouseenter', ()=> {
      productsBlock.classList.add('_hover-block');
    });
    productsBlock.addEventListener('mouseleave', ()=> {
      setTimeout(() => {
        productsBlock.classList.remove('_hover-block');
      }, 0);
    });
  });
}
// -- навешиваем класс ховер для определенного бренда на который навели ----
if (items) {
  items.forEach(item => {
    item.addEventListener('mouseenter', ()=> {
      item.classList.add('_hover');
    });
    item.addEventListener('mouseleave', ()=> {
      setTimeout(() => {
        
        item.classList.remove('_hover');
      }, 0);
    });
  })
}
