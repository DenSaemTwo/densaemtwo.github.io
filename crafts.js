const crafts = {
    _data: [
        {
            name: "Самуель Оберг - 5",
            img: "./assets/crafts/Самуель Оберг - 5.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - blocks",
            img: "./assets/crafts/C418 - blocks.png",
            desc: "Описание крафта.",
            tag: "Пластинка"
        },
        {
            name: "C418 - mellohi",
            img: "./assets/crafts/C418 - mellohi.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - otherside",
            img: "./assets/crafts/Лена Рейн - otherside.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - strad",
            img: "./assets/crafts/C418 - strad.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Аарон Шероф - Precipice",
            img: "./assets/crafts/Аарон Шероф - Precipice.png", //В теории сюда можно запихать ссылку настоящую
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - 11",
            img: "./assets/crafts/C418 - 11.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "Лена Рейн - Creator (Музыкальная шкатулка)",
            img: "./assets/crafts/Лена Рейн - Creator (Музыкальная шкатулка).png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - 13",
            img: "./assets/crafts/C418 - 13.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - stal",
            img: "./assets/crafts/C418 - stal.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Аарон Шероф - Relic",
            img: "./assets/crafts/Аарон Шероф - Relic.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - far",
            img: "./assets/crafts/C418 - far.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - Pigstep",
            img: "./assets/crafts/Лена Рейн - Pigstep.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Эймос Родди - Tears",
            img: "./assets/crafts/Эймос Родди - Tears.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "C418 - cat",
            img: "./assets/crafts/C418 - cat.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - wait",
            img: "./assets/crafts/C418 - wait.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - ward",
            img: "./assets/crafts/C418 - ward.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - Creator",
            img: "./assets/crafts/Лена Рейн - Creator.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - chirp",
            img: "./assets/crafts/C418 - chirp.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - mall",
            img: "./assets/crafts/C418 - mall.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "Hyper Potions - Lava Chicken",
            img: "./assets/crafts/Hyper Potions - Lava Chicken.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Осколок пластинки",
            img: "./assets/crafts/Осколок пластинки.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Медная конская броня",
            img: "./assets/crafts/Медная конская броня.png",
            desc: "",
            tag: "Броня"
        },
        {
            name: "Железная конская броня",
            img: "./assets/crafts/Железная конская броня.png",
            desc: "",
            tag: "Броня"
        },
        {
            name: "Золотая конская броня",
            img: "./assets/crafts/Золотая конская броня.png",
            desc: "",
            tag: "Броня"
        },
        {
            name: "Алмазная конская броня",
            img: "./assets/crafts/Алмазная конская броня.png",
            desc: "",
            tag: "Броня"
        },
        {
            name: "Цветок хоруса",
            img: "./assets/crafts/Цветок хоруса.png",
            desc: "",
            tag: "Учёный"
        },
        {
            name: "Бирка",
            img: "./assets/crafts/Бирка.png", 
            desc: "",
            tag: "Разное"
        },
        {
            name: "Седло",
            img: "./assets/crafts/Седло.png", 
            desc: "",
            tag: "Разное"
        },
        {
            name: "Колокол",
            img: "./assets/crafts/Колокол.png", 
            desc: "",
            tag: "Блоки"
        },
        {
            name: "Эндерняк",
            img: "./assets/crafts/Эндерняк.png", 
            desc: "",
            tag: "Блоки"
        }
    ],
//Эта чепуха делает красиво всё плиточками, думайте
    _crafts: function() {
        const items = this._data.map((c, index) => `
            <div class="craft-card" onclick="crafts._openLightbox(${index})">
                <div class="craft-img-wrap">
                    <img
                        src="${c.img}"
                        alt="${c.name}"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >
                    <div class="craft-placeholder" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:3.5rem;">🪄</div>
                </div>
                <div class="craft-info">
                    <h3>${c.name}</h3>
                    <p>${c.desc}</p>
                    <span class="craft-tag">${c.tag}</span>
                </div>
            </div>
        `).join('');

        return `
            <h1>Кастомные крафты</h1>
            <p class="page-subtitle">Уникальные рецепты сервера Aven</p>
            <div class="crafts-grid">
                ${items}
            </div>
        `;
    },
		
		_openLightbox: function(index) {
    const c = this._data[index];

    const existing = document.getElementById('craft-lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.id = 'craft-lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
        <div class="lightbox-card">
            <button class="lightbox-close" onclick="document.getElementById('craft-lightbox').remove()">✕</button>
            <div class="lightbox-img-wrap">
                <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none'">
            </div>
            <div class="lightbox-info">
                <h2>${c.name}</h2>
                <p>${c.desc}</p>
                <span class="craft-tag">${c.tag}</span>
            </div>
        </div>
    `;

    lb.addEventListener('click', e => {
        if (e.target === lb) lb.remove();
    });

    const onKey = e => {
        if (e.key === 'Escape') {
            lb.remove();
            document.removeEventListener('keydown', onKey);
        }
    };
    document.addEventListener('keydown', onKey);

    document.body.appendChild(lb);
	}
};
