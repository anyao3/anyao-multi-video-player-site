const MAC_ARM64_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player-0.3.3-arm64.dmg";
const MAC_X64_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player-0.3.3-x64.dmg";
const WINDOWS_DOWNLOAD_URL = "https://github.com/anyao3/anyao-multi-video-player-site/releases/download/v0.3.3/Anyao.Multi.Video.Player.Setup.0.3.3.exe";
const CHECKOUT_URL = "https://anyao.lemonsqueezy.com/checkout/buy/0c60c071-38d3-4b6e-9963-ab38040d32fe";

document.querySelectorAll(".download-mac-arm64").forEach((link) => { link.href = MAC_ARM64_DOWNLOAD_URL; });
document.querySelectorAll(".download-mac-x64").forEach((link) => { link.href = MAC_X64_DOWNLOAD_URL; });
document.querySelectorAll(".download-windows").forEach((link) => { link.href = WINDOWS_DOWNLOAD_URL; });
document.querySelectorAll(".buy-link").forEach((link) => { link.href = CHECKOUT_URL; });

const macDialog = document.querySelector("#mac-download-dialog");
const macDialogDownload = macDialog?.querySelector(".dialog-download");
document.querySelectorAll(".download-mac-arm64, .download-mac-x64").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!macDialog?.showModal || !macDialogDownload) return;
    event.preventDefault();
    macDialogDownload.href = link.href;
    macDialog.showModal();
  });
});

macDialogDownload?.addEventListener("click", () => macDialog.close());
macDialog?.querySelector(".dialog-help")?.addEventListener("click", () => macDialog.close());
macDialog?.addEventListener("click", (event) => {
  if (event.target === macDialog) macDialog.close();
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  const originalContent = button.innerHTML;
  const originalLabel = button.getAttribute("aria-label");
  button.addEventListener("click", async () => {
    const command = document.getElementById(button.dataset.copyTarget)?.textContent || "";
    try {
      await navigator.clipboard.writeText(command);
      button.classList.add("is-copied");
      button.innerHTML = button.classList.contains("command-copy-button") ? '<span aria-hidden="true">✓</span>' : "Copied";
      button.setAttribute("aria-label", "Command copied");
      button.title = "Copied";
      setTimeout(() => {
        button.classList.remove("is-copied");
        button.innerHTML = originalContent;
        if (originalLabel) button.setAttribute("aria-label", originalLabel);
        else button.removeAttribute("aria-label");
        button.title = "Copy command";
      }, 1800);
    } catch {
      if (button.classList.contains("command-copy-button")) {
        button.setAttribute("aria-label", "Copy failed. Select the command manually.");
        button.title = "Copy failed — select the command manually";
      } else {
        button.textContent = "Select and copy the command above";
      }
    }
  });
});
