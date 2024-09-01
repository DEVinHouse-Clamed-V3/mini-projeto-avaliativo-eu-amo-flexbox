var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.s-banner .container-custom .slide-banner .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-banner .container-custom .slide-banner .swiper-button-next',
    prevEl: '.s-banner .container-custom .slide-banner .swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', () => {
  function renderizarProdutos() {
    const tabMedicines = document.querySelector('.tab-medicines');
  
    if (!tabMedicines) return; // Verifica se o elemento existe
  
    const medicines = JSON.parse(window.localStorage.getItem('produtos')) || [];
  
    let medicineHTML = '';
  
    medicines.forEach((medicine) => {
      const preco = Number(medicine.preco) || 0;
  
      medicineHTML += `
        <a href="#" class="medicine-card">
          <div class="image">
            <img src="${medicine.imagem}" alt="${medicine.nome}">
          </div>
          <div class="info">
            <h3>${medicine.nome}</h3>
            <span class="old-price">R$ ${(preco - preco * 0.25).toFixed(2)}</span>
            <span class="discount">${(0.25 * 100)}% OFF</span>
            <span class="new-price">R$ ${preco.toFixed(2)}</span>
            <div class="promo">
              <span>Leve 2 unid. ou + por R$ 8,90 cada</span>
            </div>
            <button class="buy-button">Comprar</button>
          </div>
        </a>
      `;
    });
  
    tabMedicines.innerHTML = medicineHTML;
  }
  

  window.setTimeout(() => {
    renderizarProdutos();
  }, 2000);
});