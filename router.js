
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


    if(viewBase === "home" || viewBase === ""){
        alert("Блин ты такой крутой, на кнопку нажать смог, молодец");
        appContainer.innerHTML = home._home();
    }
    else if (viewBase === "rules") {
        appContainer.innerHTML = rules._rules();
    }
    else if (viewBase === "crafts") {
        appContainer.innerHTML = crafts._crafts();
    }
    else if (viewBase === "resourcepacks") {
        appContainer.innerHTML = resourcepacks._resourcepacks();
    } 
    else{
        appContainer.innerHTML = `<h1>404 Page not Found</h1>`; //Заменить это на настоящий 404.html чтобы сделать человеческую навигацию через просто / и HistoryAPI(вроде)
    }
}

document.addEventListener("DOMContentLoaded", handleHashChange);
