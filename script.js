// 1. Hiệu ứng cuộn trang mượt mà (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Chế độ tối (Dark Mode)
const toggleThemeButton = document.getElementById('toggle-theme');
if (toggleThemeButton) {
    toggleThemeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Thay đổi văn bản nút
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = "Chuyển sang chế độ sáng";
        } else {
            this.textContent = "Chuyển sang chế độ tối";
        }
    });
}

// 3. Hiệu ứng hover cho các phần tử
const linksAndButtons = document.querySelectorAll('a, button');
linksAndButtons.forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    element.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// 4. Thay đổi màu nền của header khi cuộn trang
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#1c1f23"; // Màu tối hơn khi cuộn
    } else {
        header.style.backgroundColor = "#24292e"; // Màu ban đầu
    }
});

// 5. Hiển thị năm hiện tại trong footer
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Trần Đức Việt. All rights reserved.`;