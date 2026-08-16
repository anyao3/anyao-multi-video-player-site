const REPOSITORY_URL = "https://github.com/anyao3/anyao-multi-video-player-site";
const CHECKOUT_URL = "https://anyao.lemonsqueezy.com/checkout/buy/0c60c071-38d3-4b6e-9963-ab38040d32fe";

document.querySelectorAll(".repo-link").forEach((link) => { link.href = REPOSITORY_URL; });
document.querySelectorAll(".release-link").forEach((link) => { link.href = `${REPOSITORY_URL}/releases/latest`; });
document.querySelectorAll(".buy-link").forEach((link) => { link.href = CHECKOUT_URL; });
