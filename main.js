async function initPage() {
  try {
    const res = await fetch('site-data.json');
    const data = await res.json();

    const logo = document.getElementById('logo');
    if (logo && data.logo) {
      logo.src = data.logo;
    }

    const navList = document.getElementById('nav-items');
    if (navList && Array.isArray(data.nav)) {
      data.nav.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}" class="px-3 py-2 hover:text-purple">${item.label}</a>`;
        navList.appendChild(li);
      });
      const toggle = document.createElement('button');
      toggle.id = 'theme-toggle';
      toggle.textContent = '🌓';
      toggle.className = 'px-2 py-2';
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
      navList.appendChild(toggle);
    }

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = data.hero?.title || '';

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = data.hero?.subtitle || '';

    const missionText = document.getElementById('mission-text');
    if (missionText) missionText.textContent = data.mission || '';

    const featuresContainer = document.getElementById('features');
    if (featuresContainer && Array.isArray(data.features)) {
      data.features.forEach(feature => {
        const div = document.createElement('div');
        div.className = 'bg-white dark:bg-gray-800 p-4 rounded shadow transition-transform duration-300 hover:-translate-y-1';
        div.innerHTML = `<h3 class="text-xl font-semibold mb-2">${feature.title}</h3><p>${feature.text}</p>`;
        featuresContainer.appendChild(div);
      });
    }

    const videoFrame = document.getElementById('welcome-video');
    if (videoFrame && data.welcomeVideo) videoFrame.src = data.welcomeVideo;

    const footer = document.getElementById('footer-text');
    if (footer) footer.textContent = data.footer || '';

    const root = document.getElementById('page-root');
    if (root) root.classList.remove('opacity-0');
  } catch (err) {
    console.error('Content loading failed', err);
  }
}
