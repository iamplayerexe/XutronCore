// js/main.js

// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');
const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});


// --- DOWNLOAD LINK & DROPDOWN LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Download Links ---
    const latestVersion = "1.0.0";
    const baseUrl = "https://github.com/iamplayerexe/XutronCore-launcher/releases/download/v" + latestVersion;
    
    const versionSpan = document.getElementById('latest-version');
    if (versionSpan) versionSpan.innerText = latestVersion;

    document.getElementById('win-link').href = `${baseUrl}/XutronCore-Launcher-Setup-${latestVersion}.exe`;
    document.getElementById('mac-link').href = `${baseUrl}/XutronCore-Launcher-${latestVersion}.dmg`;
    document.getElementById('linux-deb-link').href = `${baseUrl}/xutroncore-launcher_${latestVersion}_amd64.deb`;
    document.getElementById('linux-rpm-link').href = `${baseUrl}/xutroncore-launcher-${latestVersion}.x86_64.rpm`;

    // --- Dropdown on Click Logic ---
    const linuxDropdownBtn = document.getElementById('linux-dropdown-btn');
    linuxDropdownBtn.addEventListener('click', (event) => {
        if (event.target.tagName !== 'A') {
            event.preventDefault();
        }
        linuxDropdownBtn.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!linuxDropdownBtn.contains(event.target)) {
            linuxDropdownBtn.classList.remove('active');
        }
    });
});