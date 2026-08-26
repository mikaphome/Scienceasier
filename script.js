function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`nav-${tabName}`).classList.add('active');
}

function handleFeedback(event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã gửi đánh giá! Ý kiến của bạn đã được ghi nhận 💚');
    event.target.reset();
}

const data = {
    'Vật Lý': [
        { title: 'Chuyên đề 1: Lực và Chuyển động', desc: 'Hiểu về vận tốc, gia tốc và các lực cơ bản trong đời sống.' }
    ],
    'Hóa Học': [
        { title: 'Chuyên đề 1: Biến đổi hóa học & Phản ứng', desc: 'Phân biệt sự biến đổi vật lý và phản ứng hóa học cực dễ.' }
    ],
    'Sinh Học': [
        { title: 'Chuyên đề 1: Cấu tạo tế bào', desc: 'Mọi sinh vật sống đều được cấu tạo từ những tế bào.' }
    ]
};

function showTopic(subject) {
    const titleElement = document.getElementById('subject-title');
    const listElement = document.getElementById('topics-list');
    
    titleElement.innerText = `🌌 Bầu trời chuyên đề: ${subject}`;
    listElement.innerHTML = '';

    data[subject].forEach(item => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.innerHTML = `<h4>${item.title}</h4><p style="font-size: 0.85rem; color: #cbd5e1; margin-top: 8px;">${item.desc}</p>`;
        listElement.appendChild(div);
    });
}