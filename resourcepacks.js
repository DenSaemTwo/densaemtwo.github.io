const resourcepacks = {
    _resourcepacks: () => `
        <h1>Ресурспаки</h1>
        <p class="page-subtitle">Установи текстурпаки для полного погружения в атмосферу сервера</p>

        <div class="packs-intro">
            <strong>Как установить?</strong> Скачай .zip файл и помести его в папку
            <code>.minecraft/resourcepacks</code>
            не распаковывая. Затем открой Minecraft →
            <em>Настройки → Ресурс-паки</em> и активируй нужный пак.
        </div>

        <div class="packs-grid">

            <div class="pack-card">
                <div class="pack-icon">🎨</div>
                <div class="pack-body">
                    <div class="pack-header">
                        <span class="pack-name">Aven Default</span>
                        <span class="pack-badge recommended">Рекомендован</span>
                    </div>
                    <p class="pack-desc">Основной ресурспак сервера. Добавляет кастомные текстуры для уникальных предметов, переработанный интерфейс и общую атмосферу Aven.</p>
                    <div class="pack-meta">
                        <span>📦 1.21.x</span>
                        <span>💾 ~12 МБ</span>
                        <span>🔧 Команда Домино</span>
                    </div>
                    <div class="pack-actions">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn-download">⬇️ Скачать</a>
                    </div>
                </div>
            </div>

            <div class="pack-card">
                <div class="pack-icon">✨</div>
                <div class="pack-body">
                    <div class="pack-header">
                        <span class="pack-name">Aven Shaders Compat</span>
                        <span class="pack-badge optional">Опционально</span>
                    </div>
                    <p class="pack-desc">Дополнение для совместимости с шейдерами. Корректирует текстуры при использовании Optifine или Iris. Требует основной пак.</p>
                    <div class="pack-meta">
                        <span>📦 1.21.x</span>
                        <span>💾 ~4 МБ</span>
                        <span>🔧 Требует основной пак</span>
                    </div>
                    <div class="pack-actions">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn-download">⬇️ Скачать</a>
                    </div>
                </div>
            </div>

            <div class="pack-card">
                <div class="pack-icon">🔊</div>
                <div class="pack-body">
                    <div class="pack-header">
                        <span class="pack-name">Aven Sounds</span>
                        <span class="pack-badge optional">Опционально</span>
                    </div>
                    <p class="pack-desc">Пак звуков. Заменяет стандартные звуки Minecraft на более атмосферные — новое окружение, шаги, удары и интерфейсные звуки.</p>
                    <div class="pack-meta">
                        <span>📦 1.21.x</span>
                        <span>💾 ~30 МБ</span>
                        <span>🔧 Совместим с основным паком</span>
                    </div>
                    <div class="pack-actions">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn-download">⬇️ Скачать</a>
                    </div>
                </div>
            </div>

        </div>
    `
};
