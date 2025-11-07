// 数据表（统一身份证号后 6 位）
const students = [
    { name:"刘慧慧", id:"214224", gpa:4, gpaRank:1, avg:93.5, avgRank:1, wavg:93.4167, wavgRank:1 },
    { name:"赵晓研", id:"04002X", gpa:3.95, gpaRank:2, avg:93.24, avgRank:3, wavg:93.2222, wavgRank:2 },
    { name:"胡竞丹", id:"101826", gpa:3.93, gpaRank:5, avg:92.82, avgRank:4, wavg:92.9722, wavgRank:3 },
    { name:"张若盈", id:"261622", gpa:3.92, gpaRank:6, avg:93.28, avgRank:2, wavg:92.8108, wavgRank:4 },
    { name:"郑伊琳", id:"120020", gpa:3.89, gpaRank:9, avg:92.47, avgRank:5, wavg:92.7222, wavgRank:5 },
    { name:"董欣", id:"183023", gpa:3.95, gpaRank:2, avg:92.29, avgRank:6, wavg:92.3333, wavgRank:6 },
    { name:"闫明明", id:"206047", gpa:3.89, gpaRank:9, avg:91.88, avgRank:7, wavg:91.9722, wavgRank:7 },
    { name:"崔姝凡", id:"054123", gpa:3.89, gpaRank:9, avg:91.65, avgRank:8, wavg:91.7778, wavgRank:8 },
    { name:"唐翀", id:"130026", gpa:3.95, gpaRank:2, avg:91.17, avgRank:13, wavg:91.4865, wavgRank:9 },
    { name:"孙婷", id:"220029", gpa:3.91, gpaRank:8, avg:91.56, avgRank:9, wavg:91.4865, wavgRank:9 },
    { name:"谢佳霖", id:"220943", gpa:3.92, gpaRank:6, avg:91.41, avgRank:11, wavg:91.4722, wavgRank:11 },
    { name:"温玲燕", id:"040065", gpa:3.84, gpaRank:13, avg:91.47, avgRank:10, wavg:91.2222, wavgRank:12 },
    { name:"王承翔", id:"26891X", gpa:3.85, gpaRank:12, avg:91.06, avgRank:15, wavg:90.9167, wavgRank:13 },
    { name:"陈奕林", id:"171746", gpa:3.84, gpaRank:13, avg:91.29, avgRank:12, wavg:90.8889, wavgRank:14 },
    { name:"李倩", id:"245540", gpa:3.82, gpaRank:17, avg:91.12, avgRank:14, wavg:90.7778, wavgRank:15 },
    { name:"詹睿妍", id:"063023", gpa:3.84, gpaRank:13, avg:90.82, avgRank:16, wavg:90.3611, wavgRank:16 },
    { name:"陈铖", id:"042414", gpa:3.73, gpaRank:21, avg:90.35, avgRank:17, wavg:90.0278, wavgRank:17 },
    { name:"邢晓涵", id:"060043", gpa:3.75, gpaRank:20, avg:89.82, avgRank:20, wavg:89.8056, wavgRank:18 },
    { name:"王亚南", id:"091468", gpa:3.83, gpaRank:16, avg:90.06, avgRank:19, wavg:89.8056, wavgRank:18 },
    { name:"潘俊成", id:"050092", gpa:3.78, gpaRank:18, avg:90.18, avgRank:18, wavg:89.7222, wavgRank:20 },
    { name:"迟雅心", id:"162320", gpa:3.76, gpaRank:19, avg:89.35, avgRank:22, wavg:89.3889, wavgRank:21 },
    { name:"黄贝玲", id:"186948", gpa:3.67, gpaRank:22, avg:89.53, avgRank:21, wavg:88.6389, wavgRank:22 },
    { name:"史卓立", id:"240124", gpa:3.61, gpaRank:25, avg:88.83, avgRank:25, wavg:88.5789, wavgRank:23 },
    { name:"张怡宁", id:"290022", gpa:3.62, gpaRank:24, avg:88.88, avgRank:24, wavg:88.4722, wavgRank:24 },
    { name:"邱思宇", id:"071028", gpa:3.67, gpaRank:22, avg:88.94, avgRank:23, wavg:88.3611, wavgRank:25 },
    { name:"戴弘毅", id:"161616", gpa:3.61, gpaRank:25, avg:88.41, avgRank:26, wavg:87.5833, wavgRank:26 },
    { name:"赵紫翔", id:"051533", gpa:3.52, gpaRank:32, avg:88.41, avgRank:26, wavg:87.3333, wavgRank:27 },
    { name:"吴嘉琦", id:"252529", gpa:3.6, gpaRank:28, avg:87.88, avgRank:29, wavg:87.2778, wavgRank:28 },
    { name:"兰粤", id:"263979", gpa:3.6, gpaRank:28, avg:88, avgRank:28, wavg:87.2222, wavgRank:29 },
    { name:"李骍宇", id:"092011", gpa:3.61, gpaRank:25, avg:87.53, avgRank:31, wavg:87.1944, wavgRank:30 },
    { name:"鞠雨朋", id:"280053", gpa:3.54, gpaRank:31, avg:87.88, avgRank:29, wavg:87.0278, wavgRank:31 },
    { name:"游博洋", id:"290092", gpa:3.6, gpaRank:28, avg:87.06, avgRank:32, wavg:86.5556, wavgRank:32 },
    { name:"陈振浩", id:"052418", gpa:3.51, gpaRank:33, avg:87, avgRank:33, wavg:86.1667, wavgRank:33 },
    { name:"李兆鹏", id:"110036", gpa:3.45, gpaRank:34, avg:85.76, avgRank:34, wavg:85.5278, wavgRank:34 },
    { name:"张宇安", id:"107961", gpa:3.16, gpaRank:35, avg:83.71, avgRank:35, wavg:82.3889, wavgRank:35 },
    { name:"小白", id:"123456", gpa:3.0, gpaRank:36, avg:82.33, avgRank:36, wavg:82.3333, wavgRank:36 }
];
// 监听输入框变化，控制按钮状态
const inputName = document.getElementById('name');
const inputID6 = document.getElementById('id6');
const queryButton = document.getElementById('query');

// 姓名框过滤数字和符号，只保留中文、字母和空格
function filterNonChar(input) {
    // 正则表达式：只允许中文、大小写字母和空格
    const reg = /[^\u4e00-\u9fa5a-zA-Z\s]/g;
    // 替换非法字符为空
    input.value = input.value.replace(reg, '');
}

// 密码框仅允许数字
inputID6.addEventListener('keypress', function(e) {
    // 只允许数字键（0-9）和退格键
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault(); // 阻止非数字键输入
    }
});

// 实时过滤非数字并限制长度
inputID6.addEventListener('input', function() {
    // 确保长度不超过6位
    if (this.value.length > 6) {
      this.value = this.value.slice(0, 6);
    }
});

// 过滤粘贴内容中的非数字并限制长度
inputID6.addEventListener('paste', function(e) {
    e.preventDefault();
    let text = e.clipboardData.getData('text').replace(/[^\d]/g, '');
    // 确保粘贴后总长度不超过6位
    const remaining = 6 - this.value.length;
    if (text.length > remaining) {
      text = text.slice(0, remaining);
    }
    this.value += text;
  });
  
// 额外添加失焦时的验证（可选）
document.getElementById('name').addEventListener('blur', function() {
if (this.value.trim() === '') {
    alert('请输入有效的姓名（仅支持中文、字母）');
}
});

// 初始化按钮状态
function updateButtonState() {
    if (inputName.value.trim() === '' | inputID6.value.trim() === '') {
        // 输入为空时，按钮灰色且不可点击
        queryButton.disabled = true;
        queryButton.style.backgroundColor = '#ccc';
        queryButton.style.cursor = 'not-allowed';
    } else {
        // 输入不为空时，恢复可用状态
        queryButton.disabled = false;
        queryButton.style.backgroundColor = ''; // 恢复默认背景色
        queryButton.style.cursor = 'pointer';
    }
}

// 初始加载时检查一次
    updateButtonState();

// 输入框内容变化时触发检查
inputName.addEventListener('input', updateButtonState);
inputID6.addEventListener('input', updateButtonState);
// 失去焦点时也检查
inputName.addEventListener('blur', updateButtonState); 
inputID6.addEventListener('input', updateButtonState);

// 查询函数
function query() {
const name = document.getElementById("name").value.trim();
const id6 = document.getElementById("id6").value.trim();
const stu = students.find(s => s.name === name && s.id === id6);
const resultDiv = document.getElementById("result");

if (stu) {
    resultDiv.innerHTML = `
    <p><strong>${stu.name}&nbsp同学</strong></p>
    <p>GPA：${stu.gpa}（排名 ${stu.gpaRank}）</p>
    <p>算术平均分：${stu.avg}（排名 ${stu.avgRank}）</p>
    <p>加权平均分：${stu.wavg}（排名 ${stu.wavgRank}）</p>
    `;
} else {
    resultDiv.innerHTML = "<h3 style='color:red;'>未找到该学生信息<br/>请检查姓名或密码是否正确。</h3>";
}
}

function back() {
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "<h3 style='color:red;'>未找到该学生信息<br/>请检查姓名或密码是否正确。</h3>";
}
const container = document.querySelector('#container');
const backButton = document.querySelector('#back');

queryButton.addEventListener('click',() => container.classList.add('right-panel-active'));
backButton.addEventListener('click',() => container.classList.remove('right-panel-active'));
