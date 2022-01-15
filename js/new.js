function Router(){
    this.routes = {};
    this.curUrl = '';

    this.route = function(path, callback){
        this.routes[path] = callback || function(){};
    };

    this.refresh = function(){
        this.curUrl = location.hash.slice(1) || '/';
        this.routes[this.curUrl]();
    };

    this.init = function(){
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
}
var R = new Router();
R.init();
var bt = document.getElementById('biaoti');
var nr = document.getElementById('neirong');
R.route('/new1', function() {
    bt.innerText="2021-2022学年第二学期选课通知";
    bt.style="align-content: center;font-weight: 600;padding: 20px; ";
	nr.innerText="第一轮选课期间，下沙校区第四教研楼的中心机房将免费对学生开放选课，机房开放情况见附件2《2021-2022学年第二学期学生选课可用机房安排》。为避免选课期间机房及图书馆拥挤，请各学院积极配合，尽可能提供本学院的计算机资源供学生选课。建议学生尽量利用自备计算机或智能手机网页进行选课。在选课的过程中遇到问题请及时与教务处选排课办公室联系（电话：86915015）。第一轮选课期间，下沙校区第四教研楼的中心机房将免费对学生开放选课，机房开放情况见附件2《2021-2022学年第二学期学生选课可用机房安排》。为避免选课期间机房及图书馆拥挤，请各学院积极配合，尽可能提供本学院的计算机资源供学生选课。建议学生尽量利用自备计算机或智能手机网页进行选课。在选课的过程中遇到问题请及时与教务处选排课办公室联系（电话：86915015）。第一轮选课期间，下沙校区第四教研楼的中心机房将免费对学生开放选课，机房开放情况见附件2《2021-2022学年第二学期学生选课可用机房安排》。为避免选课期间机房及图书馆拥挤，请各学院积极配合，尽可能提供本学院的计算机资源供学生选课。建议学生尽量利用自备计算机或智能手机网页进行选课。在选课的过程中遇到问题请及时与教务处选排课办公室联系（电话：86915015）。";
    nr.style="font-size: 15px;line-height: 40px;float: left;";
});
R.route('/new2', function() {
    bt.innerText="我校与中国电子科技集团公司研究所签订研究生联合培养协议";
    bt.style="align-content: center;font-weight: 600;padding: 20px; ";
	nr.innerText="1月13日，我校与中国电子科技集团公司第三十六研究所研究生联合培养协议签约仪式在下沙校区科技馆扇形会议室举行。校长朱泽飞、副校长马国进，第三十六研究所所长金飚，相关部处及学院负责人等参加签约仪式。会上，朱泽飞对第三十六所一行的到访表示热烈欢迎。他从杭电办学历史及沿革、办学特色及优势、近年快速发展取得的成绩等方面介绍了学校现状。朱泽飞表示，第三十六所长期支持我校的学科建设和人才培养工作，此次以信息与通信工程、网络空间安全等学科为起点，与我校开展研究生的联合培养，既是研究生人才培养模式的创新，也将开拓在科学研究、技术创新以及应用场景落地等方面的校企合作新局面，希望双方进一步加强合作，携手发展、共同进步。";
    nr.style="font-size: 15px;line-height: 40px;float: left;";
});
R.route('/new3', function() {
    bt.innerText="学校召开党风廉政建设分析会暨全面从严治党专题会议";
    bt.style="align-content: center;font-weight: 600;padding: 20px; ";
	nr.innerText="1月13日上午，学校召开2021年下半年党委领导班子党风廉政建设分析会暨全面从严治党专题会议。此次会议围绕省委巡视、审计反馈发现的问题和提出的整改要求，结合分管部门、联系学院工作实际，全面分析、系统研判，重点研究存在的问题和原因，并提出相应对策措施。校党委书记王兴杰主持会议，全体党委领导班子成员参加会议，学校办公室、纪检监察室、审计处相关负责人列席会议。";
    nr.style="font-size: 15px;line-height: 40px;float: left;";
});
R.route('/new4', function() {
    bt.innerText="省委第一巡视组向杭州电子科技大学党委反馈巡视情况";
    bt.style="align-content: center;font-weight: 600;padding: 20px; ";
	nr.innerText="2022年1月11日，省委第一巡视组向杭州电子科技大学党委反馈巡视情况。省委巡视工作领导小组成员、省纪委常务副书记、省监委副主任王海超出席向杭州电子科技大学党委书记王兴杰的反馈会议和向杭州电子科技大学党委领导班子的反馈会议，对巡视整改提出要求。王海超向王兴杰传达了省委书记专题会议精神，省委第一巡视组组长金连山代表省委巡视组分别向王兴杰和杭州电子科技大学党委领导班子反馈了巡视情况。王兴杰主持领导班子反馈会议并作表态讲话。";
    nr.style="font-size: 15px;line-height: 40px;float: left;";
});
R.route('/new5', function() {
    bt.innerText="赴溪港乡开展共同富裕帮扶调研";
    bt.style="align-content: center;font-weight: 600;padding: 20px; ";
	nr.innerText="在实地考察我校援建的乡党史纪念馆、塘弄村农产品加工中心，调研塘弄村美丽乡村整体规划过程中，朱校长仔细询问了项目推进情况，对党史纪念馆的展陈和布局提出了建议，并就我校如何参与指导美丽乡村建设提出了具体意见。他叮嘱我校派驻该村的省派农村工作指导员紧跟项目进展，协调学校力量，发挥学校优势，实实在在助力乡村振兴，真正实现共同富裕。朱校长一行还饶有兴致地参观了塘弄村民俗文化展示馆，建议利用我校数字媒体技术优势，为村民俗文化展示提供现代化手段，让更多的乡贤了解乡村历史、提升文化自信，回馈乡村发展。";
    nr.style="font-size: 15px;line-height: 40px;float: left;";
});

