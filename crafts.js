const crafts = {
    _data: [
        {
            name: "Самуель Оберг - 5",
            img: "./assets/crafts/craft1.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - blocks",
            img: "./assets/crafts/craft2.png",
            desc: "Описание крафта.",
            tag: "Пластинка"
        },
        {
            name: "C418 - mellohi",
            img: "./assets/crafts/craft3.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - otherside",
            img: "./assets/crafts/craft4.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - strad",
            img: "./assets/crafts/craft5.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Аарон Шероф - Precipice",
            img: "./assets/crafts/craft6.png", //В теории сюда можно запихать ссылку настоящую
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - 11",
            img: "./assets/crafts/craft7.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "Лена Рейн - Creator(Музыкальная шкатулка)",
            img: "./assets/crafts/craft8.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - 13",
            img: "./assets/crafts/craft9.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - stal",
            img: "./assets/crafts/craft10.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Аарон Шероф - Relic",
            img: "./assets/crafts/craft11.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - far",
            img: "./assets/crafts/craft12.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - Pigstep",
            img: "./assets/crafts/craft13.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Эймос Родди - Tears",
            img: "./assets/crafts/craft14.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "C418 - cat",
            img: "./assets/crafts/craft15.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - wait",
            img: "./assets/crafts/craft16.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - ward",
            img: "./assets/crafts/craft17.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Лена Рейн - Creator",
            img: "./assets/crafts/craft18.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - chirp",
            img: "./assets/crafts/craft19.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "C418 - mall",
            img: "./assets/crafts/craft20.png",
            desc: "",
            tag: "Пластинка"
        },
		{
            name: "Hyper Potions - Lava Chicken",
            img: "./assets/crafts/craft21.png",
            desc: "",
            tag: "Пластинка"
        },
        {
            name: "Осколок пластинки",
            img: "./assets/crafts/craft22.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Медная конская броня",
            img: "./assets/crafts/craft23.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Железная конская броня",
            img: "./assets/crafts/craft24.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Золотая конская броня",
            img: "./assets/crafts/craft5.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Алмазная конская броня",
            img: "./assets/crafts/craft26.png",
            desc: "",
            tag: "Разное"
        },
        {
            name: "Цветок хоруса",
            img: "./assets/crafts/craft27.png",
            desc: "",
            tag: "Ела"
        },
        {
            name: "Бирка",
            img: "./assets/crafts/craft28.png", 
            desc: "",
            tag: "Разное"
        },
        {
            name: "Седло",
            img: "./assets/crafts/craft29.png", 
            desc: "",
            tag: "Разное"
        },
        {
            name: "Колокол",
            img: "./assets/crafts/craft30.png", 
            desc: "",
            tag: "Блоки"
        },
        {
            name: "Эндерняк",
            img: "./assets/crafts/craft31.png", 
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
