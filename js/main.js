'use strict';

// ハンバーガーメニューとスクロール制御
{
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');
	const header = document.querySelector('.header');
	const logo = document.querySelector('.logo-box');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');
		header.classList.toggle('active');
		logo.classList.toggle('active');

		// ボディのスクロール制御
		const bodyStyle = document.body.style;
		if (bodyStyle.overflow === "hidden") {
			bodyStyle.overflow = "";
			bodyStyle.height = "";
		} else {
			bodyStyle.overflow = "hidden";
			bodyStyle.height = "100%";
		}
	});
}

// メニューリンクをクリック時、メニューを閉じる
$('#nav_list a[href]').on('click', function() {
    $('.btn').trigger('click');
});