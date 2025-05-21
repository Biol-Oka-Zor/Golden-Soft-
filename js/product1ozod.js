// door-lock.js fayli - Golden Soft qulf uchun JavaScript kodi

// Asosiy o'zgaruvchilar
let currentColor = 'white';
let currentThumbnail = 0;

// DOM elementlarini olish
document.addEventListener('DOMContentLoaded', function() {
    // Qulf elementlari
    const lockBody = document.getElementById('lockBody');
    const lockHandle = document.getElementById('lockHandle');
    const lockKnob = document.getElementById('lockKnob');
    
    // Rang tanlovchi tugmalar
    const colorOptions = document.querySelectorAll('.color-option');
    
    // Kichik rasmlar
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Kichik rasmlar uchun elementlar
    const thumbElements = [
        document.getElementById('thumb0'),
        document.getElementById('thumb1'),
        document.getElementById('thumb2'),
        document.getElementById('thumb3')
    ];
    
    // Bo'limlarni yig'ish/ochish tugmalari
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    // Tab panellar
    const tabs = document.querySelectorAll('.tab');
    
    // Ranglarni berish
    function updateColors() {
        // Qulfning asosiy rangini o'rnatish
        switch(currentColor) {
            case 'white':
                lockBody.style.backgroundColor = '#ffffff';
                lockHandle.style.backgroundColor = '#cccccc';
                lockKnob.style.backgroundColor = '#cccccc';
                break;
            case 'black':
                lockBody.style.backgroundColor = '#000000';
                lockHandle.style.backgroundColor = '#333333';
                lockKnob.style.backgroundColor = '#333333';
                break;
            case 'gold':
                lockBody.style.backgroundColor = '#ffd700';
                lockHandle.style.backgroundColor = '#ffcc00';
                lockKnob.style.backgroundColor = '#ffcc00';
                break;
        }
        
        // Kichik rasmlar rangini ham o'zgartirish
        thumbElements.forEach(thumb => {
            switch(currentColor) {
                case 'white':
                    thumb.style.backgroundColor = '#ffffff';
                    break;
                case 'black':
                    thumb.style.backgroundColor = '#000000';
                    break;
                case 'gold':
                    thumb.style.backgroundColor = '#ffd700';
                    break;
            }
        });
    }
    
    // Rangni o'zgartirish
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Avvalgi faol rangni o'chirish
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Yangi rangni faol qilish
            this.classList.add('active');
            
            // Joriy rangni o'zgartirish
            currentColor = this.getAttribute('data-color');
            
            // Ranglarni yangilash
            updateColors();
        });
    });
    
    // Kichik rasmlarni boshqarish
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Avvalgi faol rasmni o'chirish
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Yangi rasmni faol qilish
            this.classList.add('active');
            
            // Joriy rasmni o'zgartirish
            currentThumbnail = parseInt(this.getAttribute('data-index'));
            
            // Bu yerda qulf burchagini o'zgartirish mumkin
            // Misol uchun: lockBody.style.transform = `rotate(${currentThumbnail * 45}deg)`;
        });
    });
    
    // Bo'limlarni ochib-yopish
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Bo'lim ochiq/yopiq holatini o'zgartirish
            if (content && content.style.display === 'none') {
                content.style.display = 'block';
                this.querySelector('span:last-child').textContent = '▲';
            } else if (content) {
                content.style.display = 'none';
                this.querySelector('span:last-child').textContent = '▼';
            }
        });
    });
    
    // Tab panellarni boshqarish
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Avvalgi faol tabni o'chirish
            tabs.forEach(t => t.classList.remove('active'));
            
            // Yangi tabni faol qilish
            this.classList.add('active');
            
            // Tab mazmunini o'zgartirish kerak bo'lsa shu yerda
        });
    });
    
    // Dastlabki ranglarni o'rnatish
    updateColors();
    
    // Dastlabki bo'lim mazmunini yashirish - birinchi bo'limdan tashqari
    const sectionContents = document.querySelectorAll('.section-content');
    for (let i = 1; i < sectionContents.length; i++) {
        sectionContents[i].style.display = 'none';
    }
});

// Savatga qo'shish funksiyasi
function addToCart() {
    alert('Mahsulot savatga qo"shildi!');
}

// Sevimlilar ro'yxatiga qo'shish funksiyasi
function addToWishlist() {
    alert('Mahsulot sevimlilar ro"yxatiga qo"shildi!');
}

// Sotib olish tugmasi bosilganda ishga tushadigan funksiya
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', addToCart);
    }
    
    // Sevimlilar tugmasi bosilganda ishga tushadigan funksiya
    const wishlistButton = document.querySelector('.wishlist-button');
    if (wishlistButton) {
        wishlistButton.addEventListener('click', addToWishlist);
    }
});





