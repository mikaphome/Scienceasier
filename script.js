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
/* Quản lý ẩn/hiện các trang */
.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Khung nội dung cho các trang Liên hệ, Đánh giá, Sứ mệnh */
.page-card {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 15px;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

.page-card h2 {
    color: #38bdf8;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}

/* Style cho Form Đánh giá */
.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;
}

.form-group label {
    font-size: 0.9rem;
    color: #cbd5e1;
}

.form-group input, .form-group select, .form-group textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(30, 41, 59, 0.8);
    color: #fff;
    outline: none;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: #38bdf8;
}

.btn-submit {
    padding: 12px;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.btn-submit:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
}

.contact-info p {
    margin-bottom: 12px;
    color: #cbd5e1;
}