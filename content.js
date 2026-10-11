// DỮ LIỆU CHUYÊN ĐỀ NÂNG CẤP: KÈM MÔ HÌNH TƯƠNG TÁC VÀ QUIZ TRẮC NGHIỆM
const scienceData = {
    'Vật Lý': [
        {
            id: 'phy-1',
            title: 'Chuyên đề 1: Lực & Chuyển động cơ học',
            desc: 'Hiểu về vận tốc, quán tính và tự tay thử nghiệm mô hình xe trượt quán tính.',
            detail: `
                <h4>1. Chuyển động cơ học & Vận tốc</h4>
                <p>• <b>Vận tốc:</b> Đại biểu cho độ nhanh chậm của chuyển động. Công thức: $v = \\frac{s}{t}$</p>
                <p>• <b>Quán tính:</b> Xu hướng bảo toàn vận tốc của vật khi lực tác dụng thay đổi đột ngột.</p>
                <br>
                <div style="background: rgba(56, 189, 248, 0.1); border: 1px dashed #38bdf8; padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <h4 style="color: #38bdf8; margin-top:0;">🕹️ Mô hình tương tác: Phanh khẩn cấp & Quán tính</h4>
                    <p>Chọn vận tốc xe và bấm nút thử nghiệm để quan sát hiện tượng quán tính:</p>
                    <div style="margin: 10px 0;">
                        <label>Vận tốc xe (km/h): <span id="speed-val">50</span></label><br>
                        <input type="range" id="speed-range" min="10" max="100" value="50" style="width: 100%; accent-color: #38bdf8;" oninput="document.getElementById('speed-val').innerText=this.value">
                    </div>
                    <button onclick="runInertiaTest()" style="background: #38bdf8; color: #0f172a; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚨 Phanh Gấp Ngay Lập Tức</button>
                    <p id="inertia-result" style="margin-top: 10px; font-weight: bold; color: #facc15;"></p>
                </div>
            `,
            quiz: [
                {
                    q: "Hiện tượng hành khách bị chúi người về phía trước khi xe buýt phanh gấp gọi là gì?",
                    options: ["Lực ma sát", "Quán tính", "Trọng lực", "Áp suất"],
                    correct: 1
                },
                {
                    q: "Công thức tính vận tốc trung bình là gì?",
                    options: ["v = s * t", "v = s / t", "v = t / s", "v = s + t"],
                    correct: 1
                }
            ]
        },
        {
            id: 'phy-2',
            title: 'Chuyên đề 2: Áp suất & Lực đẩy Archimedes',
            desc: 'Thử nghiệm mô hình vật chìm hay nổi trên mặt nước.',
            detail: `
                <h4>1. Lực đẩy Archimedes</h4>
                <p>• Mọi vật nhúng trong chất lỏng đều bị chất lỏng đẩy ngược lên với lực $F_A = d \\cdot V$.</p>
                <br>
                <div style="background: rgba(129, 140, 248, 0.1); border: 1px dashed #818cf8; padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <h4 style="color: #818cf8; margin-top:0;">⛵ Mô hình tương tác: Thí nghiệm Tàu nổi</h4>
                    <p>Chọn trọng lượng tàu so với lực đẩy nước:</p>
                    <select id="boat-weight" style="background: #1e293b; color: white; padding: 8px; border-radius: 6px; width: 100%; border: 1px solid #818cf8; margin-bottom: 10px;">
                        <option value="light">Trọng lượng tàu NHỎ hơn lực đẩy của nước (P < Fa)</option>
                        <option value="heavy">Trọng lượng tàu LỚN hơn lực đẩy của nước (P > Fa)</option>
                    </select>
                    <button onclick="runArchimedesTest()" style="background: #818cf8; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🧪 Kiểm tra kết quả</button>
                    <p id="archimedes-result" style="margin-top: 10px; font-weight: bold;"></p>
                </div>
            `,
            quiz: [
                {
                    q: "Điều kiện để một vật nổi trên chất lỏng là gì?",
                    options: ["Fa < P", "Fa = P", "Fa > P", "Khối lượng vật rất lớn"],
                    correct: 2
                }
            ]
        }
    ],
    'Hóa Học': [
        {
            id: 'chem-1',
            title: 'Chuyên đề 1: Phản ứng Hóa học & Định luật Bảo toàn khối lượng',
            desc: 'Khám phá sự đổi màu và bảo toàn khối lượng các chất.',
            detail: `
                <h4>1. Định luật Bảo toàn Khối lượng</h4>
                <p>• Tổng khối lượng các chất sản phẩm bằng tổng khối lượng các chất tham gia phản ứng.</p>
            `,
            quiz: [
                {
                    q: "Cho 4g kim loại Magie tác dụng với Axit thu được 9.6g muối và khí Hydro. Khối lượng Axit đã dùng là bao nhiêu nếu phản ứng hoàn toàn?",
                    options: ["5.6g", "13.6g", "6.5g", "10g"],
                    correct: 0
                }
            ]
        }
    ],
    'Sinh Học': [
        {
            id: 'bio-1',
            title: 'Chuyên đề 1: Tế bào - Đơn vị cơ sở sự sống',
            desc: 'Tìm hiểu cấu trúc siêu hiển vi của nhà máy tế bào.',
            detail: `
                <h4>1. Cấu tạo Tế bào nhân thực</h4>
                <p>• Gồm màng sinh chất, tế bào chất và nhân chứa ADN.</p>
            `,
            quiz: [
                {
                    q: "Bào quan nào được ví như 'nhà máy năng lượng' cung cấp ATP cho tế bào?",
                    options: ["Ribosome", "Lưới nội chất", "Ty thể", "Bộ máy Golgi"],
                    correct: 2
                }
            ]
        }
    ]
};
