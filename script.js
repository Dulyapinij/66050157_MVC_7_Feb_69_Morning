const DB_KEYS = {
    USERS: 'db_users5',
    NEWS: 'db_news5',
    REPORTERS: 'db_reporters5',
    REPORTS: 'db_reports5',
    CURRENT_USER: 'db_current_user5'
};

function initData() {
    if (!localStorage.getItem(DB_KEYS.USERS)) {
        const users = [
            { id: 'AD001', name: 'Theng', role: 'admin' },
            { id: 'AD002', name: 'Tim', role: 'admin' },
            { id: 'AD003', name: 'Eak', role: 'admin' },
            { id: 'US001', name: 'Seur', role: 'user' },
            { id: 'US002', name: 'Seur', role: 'user' },
            { id: 'US003', name: 'Singto', role: 'user' },
            { id: 'US004', name: 'Mhar', role: 'user' },
            { id: 'US005', name: 'Maew', role: 'user' },
            { id: 'US006', name: 'Nok', role: 'user' },
            { id: 'US007', name: 'Pla', role: 'user' },
            { id: 'US008', name: 'Kung', role: 'user' },
            { id: 'US009', name: 'Mod', role: 'user' },
            { id: 'US010', name: 'Kae', role: 'user' }
        ];
        localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
    }

    if (!localStorage.getItem(DB_KEYS.REPORTERS)) {
        const reporters = [
            { id: 'R001', name: 'Gorgai' },
            { id: 'R002', name: 'Khorkhai' },
            { id: 'R003', name: 'Khorkwod' },
            { id: 'R004', name: 'KorKwai' },
            { id: 'R005', name: 'Korkon' },
            { id: 'R006', name: 'Korrakang' },
            { id: 'R007', name: 'NgorNgu' },
            { id: 'R008', name: 'Jorjan' },
            { id: 'R009', name: 'Shorshing' },
            { id: 'R0010', name: 'Chorchang' }
        ];
        localStorage.setItem(DB_KEYS.REPORTERS, JSON.stringify(reporters));
    }

    if (!localStorage.getItem(DB_KEYS.NEWS)) {
        const news = [
            {
                id: 10000001,
                topic: "เห้ย! UFO!!",
                detail: "ชาวบ้านตกใจเจอจานบินสีเขียวที่บึงกาฬ",
                source: "Facebook",
                createDate: "2026-01-01",
                trustScore: 2,
                status: "ข่าวเท็จ"
            },
            {
                id: 10000002,
                topic: "หิมะตกที่เชียงใหม่",
                detail: "ชาวบ้านอ้างเมื่อวานหิมะตกที่เชียงใหม่",
                source: "Facebook",
                createDate: "2026-01-02",
                trustScore: 9,
                status: "ข่าวจริง"
            },
            {
                id: 10000003,
                topic: "กินโปรตีนแล้วตายไว",
                detail: "มีการแพร่ข่าวต่อๆกันใน Line Open Chat ว่ากินโปรตีนแล้วตายไว",
                source: "Line Open Chat",
                createDate: "2026-01-03",
                trustScore: 1,
                status: "ข่าวเท็จ"
            },
            {
                id: 10000004,
                topic: "รัฐบาลเตรียมแจกเงินคนละ 5,000 บาท",
                detail: "ลือกันว่ารัฐบาลจะแจกเงินคนละ 5,000 บาทภายในเดือนนี้",
                source: "เว็บข่าวออนไลน์",
                createDate: "2026-01-04",
                trustScore: 4,
                status: "ยังไม่ตรวจสอบ"
            },
            {
                id: 10000005,
                topic: "ราคาทองคำจะพุ่งแตะ 100,000 บาท",
                detail: "คาดว่าอีกไม่เกิน 10 วัน ทองจะราคาถึง 100,000 บาท",
                source: "Tiktok",
                createDate: "2026-01-05",
                trustScore: 10,
                status: "ข่าวจริง"
            },
            {
                id: 10000006,
                topic: "โจรขโมยทุเรียน",
                detail: "โจรคาดว่าชื่อสมนนท์ ขโมยทุเรียนไป 7 ลูกที่จันทบุรี",
                source: "TikTok",
                createDate: "2026-01-06",
                trustScore: 2,
                status: "ยังไม่ตรวจสอบ"
            },
            {
                id: 10000007,
                topic: "คนไทยเต้นบนรถตู้ที่ญี่ปุ่น",
                detail: "ยูทูปเบอร์ชื่อดังไปเจ้นบนรถตู้หน้าวิวภูเขาไฟฟูจิ",
                source: "Instagram",
                createDate: "2026-01-07",
                trustScore: 9,
                status: "ข่าวจริง"
            },
            {
                id: 10000008,
                topic: "KitKat เตรียมออกรสชาติใหม่",
                detail: "ขนมช็อกโกแลต Kitkat เตรียมออกรสชาติสับปะรด",
                source: "Instagram",
                createDate: "2026-01-08",
                trustScore: 5,
                status: "ยังไม่ตรวจสอบ"
            },
            {
                id: 10000009,
                topic: "โรนัลโด้จะมาไทย",
                detail: "มีข่าวหลุดมาว่าโรนัลโด้ นักบอลชื่อดัง จะมารณรงค์การดื่มน้ำที่ไทย",
                source: "Sanook.com",
                createDate: "2026-01-09",
                trustScore: 8,
                status: "ยังไม่ตรวจสอบ"
            },
            {
                id: 10000010,
                topic: "ค้นพบพื้นที่ป่าโบราณในถ้ำ",
                detail: "กรมป่าไม้พบพื้นที่ป่าโบราณอยู่ในถ้ำ เผยข่าวดีว่าพบพืชที่สูญพันธุ์ไปแล้ว",
                source: "กรมป่าไม้",
                createDate: "2026-01-09",
                trustScore: 8,
                status: "ยังไม่ตรวจสอบ"
            }
        ];
        localStorage.setItem(DB_KEYS.NEWS, JSON.stringify(news));
    }

    if (!localStorage.getItem(DB_KEYS.REPORTS)) {
        const reports = [
            { reporterId: 'R001', newsId: 10000001, reportDate: '2026-02-01', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R002', newsId: 10000001, reportDate: '2026-02-01', type: 'ปลุกปั่น' },
            { reporterId: 'R003', newsId: 10000001, reportDate: '2026-02-02', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R004', newsId: 10000003, reportDate: '2026-02-03', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R005', newsId: 10000003, reportDate: '2026-02-03', type: 'บิดเบือน' },
            { reporterId: 'R006', newsId: 10000003, reportDate: '2026-02-04', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R007', newsId: 10000003, reportDate: '2026-02-04', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R008', newsId: 10000003, reportDate: '2026-02-05', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R009', newsId: 10000003, reportDate: '2026-02-05', type: 'ปลุกปั่น' },
            { reporterId: 'R0010', newsId: 10000004, reportDate: '2026-02-04', type: 'บิดเบือน' },
            { reporterId: 'R001', newsId: 10000004, reportDate: '2026-02-05', type: 'ปลุกปั่น' },
            { reporterId: 'R002', newsId: 10000006, reportDate: '2026-02-06', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R003', newsId: 10000008, reportDate: '2026-02-08', type: 'บิดเบือน' },
            { reporterId: 'R004', newsId: 10000002, reportDate: '2026-02-02', type: 'บิดเบือน' },
            { reporterId: 'R005', newsId: 10000009, reportDate: '2026-02-09', type: 'บิดเบือน' },
            { reporterId: 'R004', newsId: 10000010, reportDate: '2026-02-03', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R005', newsId: 10000010, reportDate: '2026-02-03', type: 'บิดเบือน' },
            { reporterId: 'R006', newsId: 10000010, reportDate: '2026-02-04', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R007', newsId: 10000010, reportDate: '2026-02-04', type: 'ข้อมูลเท็จ' },
            { reporterId: 'R008', newsId: 10000010, reportDate: '2026-02-05', type: 'ข้อมูลเท็จ' }
        ];
        localStorage.setItem(DB_KEYS.REPORTS, JSON.stringify(reports));
    }
}

function loadData(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function generateNewsId() {
    const min = 10000000;
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countReports(newsId) {
    const reports = loadData(DB_KEYS.REPORTS);
    return reports.filter(r => r.newsId == newsId).length;
}

// Login
function login() {
    const userIdInput = document.getElementById('userIdInput').value;
    const users = loadData(DB_KEYS.USERS);
    const user = users.find(u => u.id === userIdInput);

    if (user) {
        localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(user));
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'user.html';
        }
    } else {
        alert('รหัสผู้ใช้ไม่ถูกต้อง');
    }
}

// Admin
function initAdminPage() {
    checkAuth('admin');
    renderReporterSelect();
    renderNewsSelect();
    renderAdminNewsList();
}

function addNews() {
    const topic = document.getElementById('topic').value;
    const detail = document.getElementById('detail').value;
    const source = document.getElementById('source').value;
    const date = document.getElementById('newsDate').value;
    const trust = document.getElementById('trustScore').value;
    if (!topic || !detail || !date) {
        alert('กรุณากรอกข้อมูลสำคัญให้ครบ');
        return;
    }

    const newsList = loadData(DB_KEYS.NEWS);
    const newNews = {
        id: generateNewsId(),
        topic: topic,
        detail: detail,
        source: source,
        createDate: date,
        trustScore: parseInt(trust),
        status: 'ยังไม่ตรวจสอบ'
    };

    newsList.push(newNews);
    saveData(DB_KEYS.NEWS, newsList);
    alert(`เพิ่มข่าวสำเร็จ รหัสข่าว: ${newNews.id}`);
    document.getElementById('newsForm').reset();
    initAdminPage();
}

function updateNewsStatus() {
    const newsId = document.getElementById('statusNewsId').value;
    const status = document.getElementById('newStatus').value;
    if(!newsId) return;
    let newsList = loadData(DB_KEYS.NEWS);
    const newsIndex = newsList.findIndex(n => n.id == newsId);
    if (newsIndex !== -1) {
        newsList[newsIndex].status = status;
        saveData(DB_KEYS.NEWS, newsList);
        alert('อัปเดตสถานะเรียบร้อย');
        initAdminPage();
    }
}

function addReport() {
    const reporterId = document.getElementById('reporterId').value;
    const newsId = document.getElementById('reportNewsId').value;
    const reportDate = document.getElementById('reportDate').value;
    const type = document.getElementById('reportType').value;
    if (!reporterId || !newsId || !reportDate) {
        alert('กรุณากรอกข้อมูลรายงานให้ครบ');
        return;
    }

    const newsList = loadData(DB_KEYS.NEWS);
    const targetNews = newsList.find(n => n.id == newsId);
    if (targetNews) {
        if (targetNews.status !== 'ยังไม่ตรวจสอบ') {
            alert(`ไม่สามารถรายงานข่าวนี้ได้ เนื่องจากถูกตรวจสอบแล้วว่าเป็น "${targetNews.status}"`);
        }
    } else {
        alert('ไม่พบข่าวดังกล่าวในระบบ');
        return;
    }

    const reports = loadData(DB_KEYS.REPORTS);
    const newReport = {
        reporterId: reporterId,
        newsId: newsId,
        reportDate: reportDate,
        type: type
    };

    reports.push(newReport);
    saveData(DB_KEYS.REPORTS, reports);
    alert('บันทึกการรายงานข่าวเรียบร้อย');
    document.getElementById('reportForm').reset();
    initAdminPage(); 
}

// User
function initUserPage() {
    checkAuth('user');
    showUserSection('allNews');
}

function showUserSection(sectionId) {
    document.getElementById('section-allNews').style.display = 'none';
    document.getElementById('section-detail').style.display = 'none';
    document.getElementById('section-summary').style.display = 'none';
    document.getElementById(`section-${sectionId}`).style.display = 'block';
    if (sectionId === 'allNews') renderAllNews();
    if (sectionId === 'summary') renderSummary();
}

function renderAllNews() {
    const newsList = loadData(DB_KEYS.NEWS);
    const container = document.getElementById('newsListContainer');
    container.innerHTML = '';
    newsList.sort((a, b) => countReports(b.id) - countReports(a.id));
    newsList.forEach(news => {
        const reportCount = countReports(news.id);
        const div = document.createElement('div');
        div.className = 'news-card';
        div.innerHTML = `
            <h3>${news.topic}</h3>
            <p>วันที่สร้าง: ${news.createDate}</p>
            <p>จำนวนรายงาน: ${reportCount} ครั้ง</p>
            <button onclick="viewNewsDetail(${news.id})">ดูรายละเอียด</button>
        `;
        container.appendChild(div);
    });
}

function viewNewsDetail(newsId) {
    const newsList = loadData(DB_KEYS.NEWS);
    const news = newsList.find(n => n.id == newsId);
    if (!news) return;
    const container = document.getElementById('newsDetailContent');
    const reportCount = countReports(news.id);
    
    container.innerHTML = `
        <h2>${news.topic}</h2>
        <p><strong>รายละเอียด:</strong> ${news.detail}</p>
        <p><strong>แหล่งที่มา:</strong> ${news.source}</p>
        <p><strong>วันที่สร้าง:</strong> ${news.createDate}</p>
        <p><strong>คะแนนความน่าเชื่อถือ:</strong> ${news.trustScore}/10</p>
        <p><strong>จำนวนรายงาน:</strong> ${reportCount} ครั้ง</p>
        <p><strong>สถานะปัจจุบัน:</strong> <span class="status-${getStatusClass(news.status)}">${news.status}</span></p>
    `;
    showUserSection('detail');
}

function renderSummary() {
    const newsList = loadData(DB_KEYS.NEWS);
    const panicNews = newsList.filter(n => countReports(n.id) >= 5 && n.status === 'ยังไม่ตรวจสอบ');
    const realNews = newsList.filter(n => n.status === 'ข่าวจริง');
    const fakeNews = newsList.filter(n => n.status === 'ข่าวเท็จ');
    document.getElementById('summary-panic').innerHTML = generateListHTML(panicNews);
    document.getElementById('summary-real').innerHTML = generateListHTML(realNews);
    document.getElementById('summary-fake').innerHTML = generateListHTML(fakeNews);
}

function checkAuth(role) {
    const currentUser = JSON.parse(localStorage.getItem(DB_KEYS.CURRENT_USER));
    if (!currentUser || currentUser.role !== role) {
        alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้');
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem(DB_KEYS.CURRENT_USER);
    window.location.href = 'login.html';
}

function renderReporterSelect() {
    const reporters = loadData(DB_KEYS.REPORTERS);
    const select = document.getElementById('reporterId');
    if(!select) return;
    select.innerHTML = '<option value="">เลือกนักข่าว</option>';
    reporters.forEach(r => {
        select.innerHTML += `<option value="${r.id}">${r.name} (${r.id})</option>`;
    });
}

function renderNewsSelect() {
    const newsList = loadData(DB_KEYS.NEWS);
    const reportSelect = document.getElementById('reportNewsId');
    const statusSelect = document.getElementById('statusNewsId');
    if(statusSelect) {
        let options = '<option value="">เลือกรหัสข่าว</option>';
        newsList.forEach(n => {
            options += `<option value="${n.id}">${n.topic} (ID: ${n.id}) [สถานะ: ${n.status}]</option>`;
        });
        statusSelect.innerHTML = options;
    }

    if(reportSelect) {
        let options = '<option value="">เลือกรหัสข่าว (เฉพาะที่ยังไม่ตรวจสอบ)</option>';
        const unverifiedNews = newsList.filter(n => n.status === 'ยังไม่ตรวจสอบ');
        
        if (unverifiedNews.length === 0) {
            options = '<option value="">-- ไม่มีข่าวที่รอการตรวจสอบ --</option>';
        } else {
            unverifiedNews.forEach(n => {
                options += `<option value="${n.id}">${n.topic} (ID: ${n.id})</option>`;
            });
        }
        reportSelect.innerHTML = options;
    }
}

function renderAdminNewsList() {
    const newsList = loadData(DB_KEYS.NEWS);
    const div = document.getElementById('adminNewsList');
    if(!div) return;
    
    let html = '<ul>';
    newsList.forEach(n => {
        html += `<li>[${n.id}] ${n.topic} - สถานะ: ${n.status}</li>`;
    });
    html += '</ul>';
    div.innerHTML = html;
}

function generateListHTML(list) {
    if (list.length === 0) return '<p>ไม่มีข้อมูล</p>';
    return '<ul>' + list.map(n => `<li>${n.topic} (ID: ${n.id})</li>`).join('') + '</ul>';
}

function getStatusClass(status) {
    if (status === 'ข่าวจริง') return 'real';
    if (status === 'ข่าวเท็จ') return 'fake';
    return 'pending';
}

window.onload = function() {
    initData();
    if (window.location.pathname.includes('admin.html')) initAdminPage();
    if (window.location.pathname.includes('user.html')) initUserPage();
};