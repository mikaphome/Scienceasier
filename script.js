// Dữ liệu chuyên đề mẫu cho các môn 8-9
const data = {
    'Vật Lý': [
        'Chuyên đề 1: Lực và Chuyển động',
        'Chuyên đề 2: Áp suất & Lực đẩy Archimedes',
        'Chuyên đề 3: Định luật Bảo toàn Bán năng lượng',
        'Chuyên đề 4: Quang học & Ánh sáng'
    ],
    'Hóa Học': [
        'Chuyên đề 1: Biến đổi hóa học & Phản ứng',
        'Chuyên đề 2: Định luật Bảo toàn Khối lượng',
        'Chuyên đề 3: Dung dịch, Độ tan & Nồng độ',
        'Chuyên đề 4: Bảng tuần hoàn các nguyên tố'
    ],
    'Sinh Học': [
        'Chuyên đề 1: Cơ thể người & Các hệ cơ quan',
        'Chuyên đề 2: Di truyền & Biến dị (Mendel)',
        'Chuyên đề 3: ADN, ARN & Protein đơn giản',
        'Chuyên đề 4: Hệ sinh thái & Môi trường'
    ]
};

function showTopic(subject) {
    const titleElement = document.getElementById('subject-title');
    const listElement = document.getElementById('topics-list');
    
    titleElement.innerText = `Bầu trời chuyên đề: ${subject}`;
    listElement.innerHTML = '';

    data[subject].forEach(topic => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.innerHTML = `<h4>${topic}</h4><p style="font-size: 0.85rem; color: #cbd5e1; margin-top: 5px;">Bấm để xem bài giảng chi tiết đơn giản...</p>`;
        listElement.appendChild(div);
    });
}