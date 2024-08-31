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

    // suposta lista de medicamentos
    const medicine = [
      {
        href: '#',
        imageSrc: 'styles/assets/buscofem.png',
        altText: 'Buscofem',
        name: 'Buscofem',
        oldPrice: 'R$ 12,90',
        discount: '23% OFF',
        newPrice: 'R$ 9,99',
        promoText: 'Leve 2 unid. ou + por R$ 8,90 cada',
      },
      {
        href: '#',
        imageSrc: 'styles/assets/buscofem.png',
        altText: 'Buscofem',
        name: 'Buscofem',
        oldPrice: 'R$ 12,90',
        discount: '23% OFF',
        newPrice: 'R$ 9,99',
        promoText: 'Leve 2 unid. ou + por R$ 8,90 cada',
      },
      {
        href: '#',
        imageSrc: 'styles/assets/buscofem.png',
        altText: 'Buscofem',
        name: 'Buscofem',
        oldPrice: 'R$ 12,90',
        discount: '23% OFF',
        newPrice: 'R$ 9,99',
        promoText: 'Leve 2 unid. ou + por R$ 8,90 cada',
      },
      {
        href: '#',
        imageSrc: 'styles/assets/buscofem.png',
        altText: 'Buscofem',
        name: 'Buscofem',
        oldPrice: 'R$ 12,90',
        discount: '23% OFF',
        newPrice: 'R$ 9,99',
        promoText: 'Leve 2 unid. ou + por R$ 8,90 cada',
      },
    ];

    let medicineHTML = '';

    medicine.forEach((medicine) => {
      medicineHTML += `
                    <a href="${medicine.href}" class="medicine-card">
                      <div class="image">
                          <img src="${medicine.imageSrc}" alt="${medicine.altText}">
                      </div>
                      <div class="info">
                          <h3>${medicine.name}</h3>
                          <span class="old-price">${medicine.oldPrice}</span>
                          <span class="discount">${medicine.discount}</span>
                          <span class="new-price">${medicine.newPrice}</span>
                          <div class="promo">
                              <span>${medicine.promoText}</span>
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




