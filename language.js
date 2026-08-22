(() => {
  const storageKey = "anyao-site-language";
  const pageLanguage = document.documentElement.lang === "ja" ? "ja" : "en";
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem(storageKey); } catch { /* Storage can be unavailable in privacy modes. */ }

  const browserLanguage = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
  const preferredLanguage = savedLanguage === "ja" || savedLanguage === "en"
    ? savedLanguage
    : (browserLanguage.startsWith("ja") ? "ja" : "en");

  if (preferredLanguage !== pageLanguage) {
    const destination = pageLanguage === "en" ? "./ja/" : "../";
    window.location.replace(destination);
    return;
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.value = [...select.options].find((option) => option.dataset.language === pageLanguage)?.value || select.value;
      select.addEventListener("change", () => {
        const language = select.selectedOptions[0]?.dataset.language;
        if (language !== "en" && language !== "ja") return;
        try { localStorage.setItem(storageKey, language); } catch { /* Navigation still works without persistence. */ }
        window.location.href = select.value;
      });
    });
  });
})();
