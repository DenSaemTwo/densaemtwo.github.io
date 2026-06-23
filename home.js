const home = {
    _home: () => `
        <div class="home-hero">
            <div class="hero-badge">Minecraft Java Edition</div>
            <h1 class="hero-title">Добро пожаловать на сервер <span class="highlight">AVEN</span></h1>
            <p class="hero-desc">RolePlay сервер с кастомными крафтами, уникальными механиками и дружным комьюнити.</p>
            <div class="hero-ip">
                <span class="ip-label">IP сервера</span>
                <span class="ip-value" onclick="navigator.clipboard.writeText('play.aven.mc').then(() => alert('IP скопирован в буфер обмена!'))">play.aven.mc</span>
                <span class="ip-label">1.21.11</span>
            </div>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <span class="feature-icon">🏙️</span>
                <h3>Все игроки живут в единственном городе, где строят свою историю. Здесь нет места отшельникам — мы делим одни улицы, одну экономику и одно будущее./h3>
                <p></p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🛠️</span>
                <h3>Система профессий</h3>
                <p>Мир нашего сервера держится на специализации. Вы не можете быть мастером на все руки — выбрать можно только ОДНУ профессию. Это делает каждого игрока уникальным, а торговлю — жизненно важной. Кем станешь ты?</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">💼</span>
                <h3>Городские должности</h3>
                <p>Должности полностью отделены от профессий и созданы для управления жизнью города. Вы можете быть Лесорубом, но при этом занимать пост Шерифа, или Шахтером, который ночью лечит людей. Выбери свое призвание.</p>
            </div>
        </div>
    `
};
