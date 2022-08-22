function externalLogin() {
  const microsoftIcon = document.querySelector('button[data-soc="office365"]');
  if (microsoftIcon) return;
  microsoftIcon.click();
  setTimeout(() => {
    console.log("I'm waiting ....")
  }, 1000);
  const accept = document.querySelector('a.socialtos__btn.js__socialtos-login');
  if (!accept) return;
  accept.click();
}

externalLogin();
