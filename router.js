const router = {
    navigate(view) {
        window.location.hash = '#' + (view.startsWith('/') ? view : '/' + view);
    }
};

async function navigate(hashPath) {
    window.location.hash = '#' + (hashPath.startsWith('/') ? hashPath : '/' + hashPath);
}

function handleHashChange() {
    let hash = window.location.hash;
    
    if (hash.startsWith('#/')) {
        hash = hash.substring(2);
    } else if (hash.startsWith('/#/')) {
        hash = hash.substring(3);
    } else if (hash.startsWith('#')) {
        hash = hash.substring(1);
    }
    
    const view = hash === '' || hash === '/' ? 'home' : hash;
    route(view);
}

window.addEventListener('hashchange', handleHashChange);

async function route(view) {
    window.onscroll = null;
    
    const appContainer = document.getElementById("app-content");
    if (!appContainer) return;


    const viewParts = view.split('/');
    const viewBase = viewParts[0];
    const dynamicId = viewParts[1];

    if (viewBase === "rules") {
        try {
            appContainer.innerHTML = Rules.rules();
        } catch(e) {
            appContainer.innerHTML = Rules.rules('');
        }
    } 
}

window.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    if (appContent) {
        const observer = new MutationObserver(() => {
            if (document.getElementById('reg-password') && !document.getElementById('strength-bar-bound')) {
                const regInput = document.getElementById('reg-password');
                regInput.setAttribute('id-bound', 'true');
                attachPasswordStrengthChecker('reg-password', 'strength-bar', 'strength-text');
            }
        });
        observer.observe(appContent, { childList: true, subtree: true });
    }
});

document.addEventListener("DOMContentLoaded", handleHashChange);
