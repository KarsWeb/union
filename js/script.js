// -------------------------------------------
// ドロワーメニュー
// -------------------------------------------

// jQueryバージョン

// jQuery("#js-drawer-icon").on("click", function(e) {
//     e.preventDefault();
//     jQuery("#js-drawer-icon").toggleClass("is-checked");
//     jQuery("#js-drawer-content").toggleClass("is-checked");
// });


// JavaScriptバージョン

const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");

if (drawerIcon) {
drawerIcon.addEventListener("click", function(e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked")
    drawerContent.classList.toggle("is-checked")
});
}

// -------------------------------------------
// アコーディオン
// -------------------------------------------

jQuery(".js-accordion").on("click", function(e) {
    e.preventDefault();

    if (jQuery(this).hasClass("is-open")) {
        jQuery(this).removeClass("is-open");
        jQuery(this).children(".qa-box__body").slideUp();
    } else {
        jQuery(this).addClass("is-open");
        jQuery(this).children(".qa-box__body").slideDown();
    }
});

// -------------------------------------------
// スワイパー
// -------------------------------------------
const swiper = new Swiper('#js-gallery-swiper', {
    spaceBetween: 82,
  // Optional parameters　　
  loop: true,

  // 自動再生の設定
  autoplay: {
    delay: 3000, // 3秒ごとに切り替え
    disableOnInteraction: true, // ユーザーのインタラクションで一時停止
},

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },
});

// -------------------------------------------
// モーダルウィンドウ
// -------------------------------------------
// jQuery(".js-modal-open").on("click", function(e) {
//     e.preventDefault();

//     jQuery("#js-about-modal")[0].showModal();

// });

// jQuery(".js-modal-close").on("click", function(e) {
//     e.preventDefault();

//     jQuery("#js-about-modal")[0].close();

// });

// JavaScriptバージョン
const modalOpenItems = document.querySelectorAll(".js-modal-open");
const modalCloseItems = document.querySelectorAll(".js-modal-close");
const aboutModal = document.querySelector("#js-about-modal");

modalOpenItems.forEach(function(modalOpenItem) {
    modalOpenItem.addEventListener("click", function(e) {
        e.preventDefault();

        if (aboutModal) {
            aboutModal.showModal();
        }
    })
})
modalCloseItems.forEach(function(modalCloseItem) {
    modalCloseItem.addEventListener("click", function(e) {
        e.preventDefault();

        if (aboutModal) {
            aboutModal.close();
        }
    })
})

// -------------------------------------------
// スムーススクロール
// -------------------------------------------
jQuery('a[href^="#"]').on("click", function(e) {
    const speed = 1000;
    const id = jQuery(this).attr("href");
    const target = jQuery("#"  == id ? "html" : id);
    const position = jQuery(target).offset().top;
    jQuery("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing"  // swing or linear
    )
})
// -------------------------------------------
// ドロワーメニュースムーススクロール
jQuery('#js-drawer-content a[href^="#"]').on("click", function(e) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
    });

// -------------------------------------------
// トップへ戻るボタン100スクロールして表示
jQuery(window).on("scroll", function() {
    if(100 < jQuery(window).scrollTop()) {
        jQuery("#js-page-top").addClass("is-show")
    } else {
        jQuery("#js-page-top").removeClass("is-show")
    }
})


const intersectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view")
        } else {
            entry.target.classList.remove("is-in-view")
        }
    });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
    intersectionObserver.observe(inViewItem);
});

// ---------------------------------------
// コンタクト　すべて入力時にアクティブにする

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button');
    const inputs = document.querySelectorAll('.contact__form .form-text, .contact__form .form-select, .contact__form .form-textarea');

    function updateButtonState() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });

        submitButton.disabled = !allFilled;
        if (allFilled) {
            submitButton.classList.add('active');
        } else {
            submitButton.classList.remove('active');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });

    updateButtonState(); // 初期状態でボタンの状態を更新
});

