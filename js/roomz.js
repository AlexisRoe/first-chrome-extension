const microsoftImg = document.querySelector('a div img[alt="Sign in with Microsoft"]');
const microsoftLink = microsoftImg?.parentElement?.parentElement;

if (microsoftLink) {
    microsoftLink.click();
}