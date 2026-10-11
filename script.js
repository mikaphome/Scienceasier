// Chuyển Tab Menu
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`nav-${tabName}`).classList.add('active');
}

// Hiển thị danh sách chuyên đề khi chọn môn
function showTopic(subject) {
    const titleElement = document.getElementById('subject-title');
    const listElement = document.getElementById('topics-list');
    
    titleElement.innerText = `🌌 Bầu trời chuyên đề: ${subject}`;
    listElement.innerHTML = '';

    const topics = scienceData[subject];

    if (topics) {
        topics.forEach(item => {
            const div = document.createElement('div');
            div.className = 'topic-item';
            // Gọi hàm mở bài học và truyền kèm cả nội dung lẫn bộ quiz của chuyên đề đó
            div.onclick = () => openLesson(item.title, item.detail, item.quiz);
            div.innerHTML = `
                <h4>${item.title}</h4>
                <p style="font-size: 0.85rem; color: #cbd5e1; margin-top: 8px;">${item.desc}</p>
                <span style="display:inline-block; margin-top:12px; font-size: 0.8rem; color: #38bdf8; font-weight: bold;">👉 Bấm vào để học & làm Quiz</span>
            `;
            listElement.appendChild(div);
        });
    }
}

// Hàm mở Modal đọc nội dung bài học chi tiết + tích hợp Quiz
function openLesson(title, detailHtml, quizData) {
    let modal = document.getElementById('lesson-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lesson-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" onclick="closeLesson()">&times;</button>
                <h2 id="modal-title"></h2>
                <div id="modal-body" class="lesson-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('modal-title').innerText = title;
    // Gộp nội dung bài học và render thêm phần trắc nghiệm Quiz bên dưới
    document.getElementById('modal-body').innerHTML = detailHtml + renderQuiz(quizData);
    modal.style.display = 'flex';
}

function closeLesson() {
    const modal = document.getElementById('lesson-modal');
    if (modal) modal.style.display = 'none';
}

// --- CÁC HÀM XỬ LÝ MÔ HÌNH VẬT LÝ & TRẮC NGHIỆM ---

function runInertiaTest() {
    const speed = document.getElementById('speed-range').value;
    const res = document.getElementById('inertia-result');
    if (speed > 70) {
        res.innerHTML = `⚠️ Xe đang chạy ${speed} km/h phanh gấp! Hành khách bị xô mạnh về phía trước do quán tính lớn, nguy hiểm cao!`;
        res.style.color = '#ef4444';
    } else {
        res.innerHTML = `✅ Xe đang chạy ${speed} km/h phanh gấp. Quán tính nhỏ, hành khách giữ thăng bằng an toàn.`;
        res.style.color = '#22c55e';
    }
}

function runArchimedesTest() {
    const val = document.getElementById('boat-weight').value;
    const res = document.getElementById('archimedes-result');
    if (val === 'light') {
        res.innerHTML = `🎉 Chính xác! Tàu NỔI trên mặt nước vì lực đẩy Archimedes thắng trọng lượng tàu.`;
        res.style.color = '#22c55e';
    } else {
        res.innerHTML = `💥 Tàu bị CHÌM xuống đáy vì trọng lượng tàu quá lớn vượt quá lực đẩy của nước!`;
        res.style.color = '#ef4444';
    }
}

function renderQuiz(quizList) {
    if (!quizList || quizList.length === 0) return '';
    let html = `<hr style="border-color:#334155; margin: 25px 0;"><h3 style="color:#facc15;">📝 Thử Thách Trắc Nghiệm Nhanh</h3>`;
    
    quizList.forEach((q, idx) => {
        html += `<div style="background:#1e293b; padding:15px; border-radius:8px; margin-bottom:15px;">
            <p style="font-weight:bold; color:#f1f5f9;">Câu ${idx+1}: ${q.q}</p>`;
        q.options.forEach((opt, optIdx) => {
            html += `<label style="display:block; margin:6px 0; cursor:pointer; color:#cbd5e1;">
                <input type="radio" name="q-${idx}" value="${optIdx}" style="margin-right:8px;"> ${opt}
            </label>`;
        });
        html += `</div>`;
    });
    
    // Dùng mã hóa JSON an toàn cho việc chấm điểm quiz
    const encodedQuiz = encodeURIComponent(JSON.stringify(quizList));
    html += `<button onclick="checkQuizResult('${encodedQuiz}')" style="background:#22c55e; color:white; border:none; padding:10px 20px; border-radius:8px; font-weight:bold; cursor:pointer; width:100%;">🚀 Nộp Bài & Xem Điểm</button>
             <p id="quiz-score" style="margin-top:15px; font-size:1.1rem; font-weight:bold; text-align:center;"></p>`;
    return html;
}

function checkQuizResult(encodedQuiz) {
    const quizList = JSON.parse(decodeURIComponent(encodedQuiz));
    let score = 0;
    quizList.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    const scoreText = document.getElementById('quiz-score');
    scoreText.innerHTML = `🎯 Kết quả của bạn: ${score} / ${quizList.length} câu đúng! ${score === quizList.length ? '🌟 Xuất sắc tuyệt đối!' : '💡 Cố gắng ôn lại lý thuyết thêm chút nhé!'}`;
    scoreText.style.color = score === quizList.length ? '#22c55e' : '#facc15';
}