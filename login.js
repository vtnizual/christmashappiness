document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Reset message displays
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        if (!username || !password) {
            errorMessage.textContent = 'Vui lòng nhập đầy đủ họ và tên và mật khẩu!';
            errorMessage.style.display = 'block';
        } else if (username === 'Trần Thu Hiền' && password === '0801') {
            successMessage.textContent = 'Xác thực thành công!';
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = "Boxing.html";
            },500);
        } else {
            errorMessage.textContent = 'Họ và tên hoặc mật khẩu không đúng!';
            errorMessage.style.display = 'block';
        }
    });
});
