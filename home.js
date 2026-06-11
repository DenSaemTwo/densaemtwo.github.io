const home = {
    _home: () => `
        <div class="home-hero">
            <div class="hero-badge">Minecraft Java Edition</div>
            <h1 class="hero-title">Добро пожаловать сервер <span class="highlight">А какой?</span></h1>
            <p class="hero-desc">Survival сервер с кастомными крафтами, дружным комьюнити и уникальным опытом игры. Описывай не хочу</p>
            <div class="hero-ip">
                <span class="ip-label">IP сервера</span>
                <span class="ip-value" onclick="navigator.clipboard.writeText('play.aven.mc').then(() => alert('IP скопирован в буфер обмена!'))">play.aven.mc</span>
                <button class="btn-copy" onclick="navigator.clipboard.writeText('play.aven.mc').then(() => alert('IP скопирован в буфер обмена!'))">Копировать</button>
            </div>
            <div class="hero-version">Java 1.21.x но это не точно</div>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">⚔️</span>
                <h3>Инфа о сервере</h3>
                <p>Уникальные рецепты для новых предметов и механик (не пиздим кста)</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🌍</span>
                <h3>Ещё о сервере</h3>
                <p>Классическое выживание без pay-to-win но с донатами, а то где деньги на хост брать</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🎨</span>
                <h3>Опять о сервере</h3>
                <p>Собственные текстуры для полного погружения</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">Пупупу</span> <!--Тут не понял, но видимо только смайлкик можно пихать-->
                <h3>Ну вы поняли</h3>
                <p>Дружное сообщество и активный Discord(true)</p>
            </div>
        </div>
    `
};
