const REPOSITORY_URL = "https://github.com/anyao3/anyao-multi-video-player-site";
const RELEASE_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/latest";
const MAC_ARM64_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player-0.3.3-arm64.dmg";
const MAC_X64_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player-0.3.3-x64.dmg";
const WINDOWS_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player.Setup.0.3.3.exe";
const CHECKOUT_URL = "https://anyao.lemonsqueezy.com/checkout/buy/0c60c071-38d3-4b6e-9963-ab38040d32fe";

document.querySelectorAll(".repo-link").forEach((link) => { link.href = REPOSITORY_URL; });
document.querySelectorAll(".release-link").forEach((link) => { link.href = RELEASE_URL; });
document.querySelectorAll(".download-mac-arm64").forEach((link) => { link.href = MAC_ARM64_DOWNLOAD_URL; });
document.querySelectorAll(".download-mac-x64").forEach((link) => { link.href = MAC_X64_DOWNLOAD_URL; });
document.querySelectorAll(".download-windows").forEach((link) => { link.href = WINDOWS_DOWNLOAD_URL; });
document.querySelectorAll(".buy-link").forEach((link) => { link.href = CHECKOUT_URL; });
