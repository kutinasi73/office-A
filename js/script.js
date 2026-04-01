document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const box = btn.closest('.faq-box');
            const answer = box.querySelector('.faq-answer');
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // aria-expandedの更新
            btn.setAttribute('aria-expanded', !isOpen);
            
            // answerの表示・非表示
            answer.hidden = isOpen;

            // 【重要】CSSで角丸を制御するためにクラスを付け外しする
            box.classList.toggle('is-open', !isOpen);
        });
    });
});