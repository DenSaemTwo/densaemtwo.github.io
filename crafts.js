const crafts = {
    _data: [
        {
            name: "Название крафта",
            img: "./assets/crafts/craft1.png",
            desc: "Описание крафта.",
            tag: "Оружие"
        },
        {
            name: "Название крафта",
            img: "./assets/crafts/craft2.png",
            desc: "Описание крафта.",
            tag: "Броня"
        },
        {
            name: "Название крафта",
            img: "./assets/crafts/craft3.png",
            desc: "Описание крафта.",
            tag: "Инструмент"
        },
        {
            name: "Название крафта",
            img: "./assets/crafts/craft4.png",
            desc: "Описание крафта.",
            tag: "Зелье"
        },
        {
            name: "Название крафта",
            img: "./assets/crafts/craft5.png",
            desc: "Описание крафта.",
            tag: "Блок"
        },
        {
            name: "Название крафта",
            img: "./assets/crafts/craft6.png", //В теории сюда можно запихать ссылку настоящую
            desc: "Описание крафта.",
            tag: "Разное"
        }
		,
        {
            name: "Название крафта",
            img: "./assets/crafts/craft7.png", //В теории сюда можно запихать ссылку настоящую
            desc: "Описание крафта.",
            tag: "Разное"
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
