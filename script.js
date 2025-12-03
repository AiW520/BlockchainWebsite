// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#233140';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#2c3e50';
        header.style.boxShadow = 'none';
    }
});

// 在线IDE运行按钮功能
const runButton = document.querySelector('.ide-container button');
const codeTextarea = document.querySelector('.ide-container textarea');
const outputContent = document.getElementById('output-content');

if (runButton && codeTextarea && outputContent) {
    runButton.addEventListener('click', function() {
        const code = codeTextarea.value;
        if (code.trim() === '') {
            outputContent.textContent = '请先输入代码';
            return;
        }
        
        try {
            // 这里只是一个简单的模拟，实际IDE需要更复杂的实现
            outputContent.textContent = '代码执行结果：\n';
            outputContent.textContent += '这是一个模拟的在线IDE，实际环境中会执行您的智能合约代码';
        } catch (error) {
            outputContent.textContent = '执行错误：\n' + error.message;
        }
    });
}

// 开始学习按钮功能
const startButton = document.querySelector('.hero button');
if (startButton) {
    startButton.addEventListener('click', function() {
        document.querySelector('#basics').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// 卡片悬停效果
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});