const scienceData = {
    'Vật Lý': [
        {
            id: 'phy-1',
            title: 'Chuyên đề 1: Động học & Mô hình Quán tính Vũ trụ',
            desc: 'Tìm hiểu vận tốc tương đối và mô hình chuyển động của vệ tinh quỹ đạo.',
            detail: `
                <h4>1. Chuyển động cơ học & Vận tốc</h4>
                <p>• Vận tốc biểu thị mức độ nhanh chậm và hướng chuyển động của vật. Công thức: <b>v = s / t</b></p>
                <br>
                <div class="model-3d-box">
                    <h4 style="color: #38bdf8;">🛰️ Mô hình 3D: Vệ tinh chuyển động quỹ đạo Trái Đất</h4>
                    <div style="font-size: 3rem; margin: 15px 0; animation: floatAnim 3s ease-in-out infinite;">🪐 🛰️</div>
                    <p style="font-size: 0.9rem; color: #94a3b8;">Vệ tinh duy trì quỹ đạo nhờ cân bằng giữa lực hút hấp dẫn và lực li tâm.</p>
                </div>
            `,
            quiz: [
                {
                    q: "Một ô tô chạy với vận tốc 54 km/h trong thời gian 2 giờ sẽ đi được quãng đường dài bao nhiêu?",
                    options: ["108 km", "27 km", "100 km", "56 km"],
                    correct: 0,
                    explain: "Quãng đường s = v * t = 54 * 2 = 108 km."
                },
                {
                    q: "Hiện tượng nào sau đây thể hiện rõ nhất tính quán tính của vật?",
                    options: ["Hòn đá rơi tự do từ trên cao xuống", "Xe máy đang chạy bỗng tắt máy dừng lại ngay lập tức", "Khi xe buýt phanh gấp, hành khách bị chúi người về phía trước", "Lò xo bị dãn ra khi treo vật nặng"],
                    correct: 2,
                    explain: "Do quán tính, cơ thể hành khách tiếp tục duy trì vận tốc cũ khi xe giảm tốc đột ngột."
                }
            ]
        }
    ],
    'Hóa Học': [
        {
            id: 'chem-1',
            title: 'Chuyên đề 1: Cấu tạo Nguyên tử & Bảng tuần hoàn 3D',
            desc: 'Khám phá cấu trúc hạt nhân, lớp vỏ electron và định luật bảo toàn khối lượng.',
            detail: `
                <h4>1. Cấu trúc Nguyên tử</h4>
                <p>• Nguyên tử gồm hạt nhân mang điện tích dương (Proton, Neutron) và lớp vỏ hạt electron mang điện tích âm quay quanh hạt nhân.</p>
                
                <div class="model-3d-box">
                    <h4 style="color: #38bdf8;">⚛️ Mô hình Nguyên tử quay không gian 3D</h4>
                    <div class="atom-container">
                        <div class="nucleus"></div>
                        <div class="orbit"><div class="electron"></div></div>
                        <div class="orbit"><div class="electron"></div></div>
                        <div class="orbit"><div class="electron"></div></div>
                    </div>
                    <p style="font-size: 0.85rem; color: #38bdf8;">Mô hình Rutherford - Bohr mô phỏng điện tử chuyển động quanh hạt nhân.</p>
                </div>
            `,
            quiz: [
                {
                    q: "Trong nguyên tử, hạt mang điện tích âm nằm ở lớp vỏ là hạt nào?",
                    options: ["Proton", "Neutron", "Electron", "Hạt nhân"],
                    correct: 2,
                    explain: "Electron mang điện tích âm (-) chuyển động quanh hạt nhân."
                },
                {
                    q: "Định luật Bảo toàn khối lượng phát biểu rằng tổng khối lượng các sản phẩm bằng:",
                    options: ["Khối lượng chất tham gia lớn nhất", "Tổng khối lượng các chất tham gia phản ứng", "Hiệu khối lượng các chất tham gia", "Không xác định được"],
                    correct: 1,
                    explain: "Tổng khối lượng sản phẩm luôn đúng bằng tổng khối lượng các chất tham gia phản ứng hóa học."
                }
            ]
        }
    ],
    'Sinh Học': [
        {
            id: 'bio-1',
            title: 'Chuyên đề 1: Tế bào học & Nhà máy năng lượng Ty thể',
            desc: 'Khám phá cấu trúc tế bào nhân thực và cơ chế phân bào nguyên phân.',
            detail: `
                <h4>1. Tế bào - Đơn vị chức năng của sự sống</h4>
                <p>• Mọi cơ thể sống đều được cấu tạo từ tế bào. Tế bào nhân thực bao gồm màng sinh chất, tế bào chất và nhân.</p>
                
                <div class="model-3d-box">
                    <h4 style="color: #38bdf8;">🧬 Mô phỏng Cấu trúc ADN & Tế bào</h4>
                    <div style="font-size: 2.5rem; margin: 15px 0; letter-spacing: 10px;">🧬 🦠 🔬</div>
                    <p style="font-size: 0.9rem; color: #94a3b8;">Ty thể là bào quan chịu trách nhiệm sản xuất năng lượng chủ yếu (ATP) cho mọi hoạt động sống.</p>
                </div>
            `,
            quiz: [
                {
                    q: "Bào quan nào trong tế bào nhân thực đóng vai trò 'nhà máy năng lượng', sản xuất phần lớn ATP?",
                    options: ["Ribosome", "Ty thể", "Lưới nội chất", "Trung thể"],
                    correct: 1,
                    explain: "Ty thể là nơi diễn ra quá trình hô hấp tế bào, cung cấp năng lượng ATP."
                }
            ]
        }
    ]
};

// Hiệu ứng CSS phụ cho mô hình bay lơ lửng
const styleAnim = document.createElement('style');
styleAnim.innerHTML = `
@keyframes floatAnim {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
}
`;
document.head.appendChild(styleAnim);