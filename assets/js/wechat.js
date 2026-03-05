// Initialize WeChat modal when DOM is ready
function initWeChatModal() {
  var wechatModal = document.getElementById("WeChatMod");
  var wechatBtn = document.getElementById("WeChatBtn");
  
  if (!wechatModal || !wechatBtn) {
    console.warn("WeChat modal or button not found in DOM");
    return;
  }
  
  // Open modal on button click
  wechatBtn.onclick = function (event) {
    event.preventDefault();
    wechatModal.style.display = "block";
  };
  
  // Close modal when clicking outside the image
  window.onclick = function (event) {
    if (event.target === wechatModal) {
      wechatModal.style.display = "none";
    }
  };
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWeChatModal);
} else {
  // DOM is already loaded
  initWeChatModal();
}
