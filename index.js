import session_en from './i81/seasion_en.json' assert { type : 'json' };
import profile_en from './i81/profile_en.json' assert { type : 'json' };
import session_jp from './i81/seasion_jp.json' assert { type : 'json' };
import profile_jp from './i81/profile_jp.json' assert { type : 'json' };
let session =session_jp
let profile =profile_jp
let i81 =document.getElementById("i81");
i81.addEventListener("click", () => {i811(); }, false);
function i811 (){ 
    let englis ="English"
    if(i81.innerHTML===englis){
        window.location.reload();
    }else{
        i81.innerHTML = "English"
        let schedule1 = document.getElementById("schedule");
        let profilecenten1 = document.getElementById("profile");
        while (schedule1.firstChild) {
            schedule1.removeChild(schedule1.firstChild);
          }
        while (profilecenten1.firstChild) {
            profilecenten1.removeChild(profilecenten1.firstChild);
          }
          profile =profile_en;
          session =session_en;
          schedule();
          gustprofile()
    }
}
function  schedule (){
    let schedule = document.getElementById("schedule");
    let c = document.getElementsByClassName("title")
    let b = document.getElementsByClassName("gustname")
    for(let j=0;j<session[0].length;j++){
        let fff =document.createElement("div");
        fff.setAttribute("class","session");
        fff.innerHTML=  "<div class='form'><div class='y'>"+session[0][j].form+"</div></div><div class='date'><div class='time'>"+session[0][j].time+"</div><div div class='topic'>"+session[0][j].topic+"</div><div class='title'></div><div class='gustname'></div></div>"
        schedule.appendChild(fff);
  }
    for(let s=0;s<session[1].length;s++){
        c[s].innerHTML="<h4>"+session[1][s].title1+"</h4><h4>"+session[1][s].title2+"</h4><h4>"+session[1][s].title3+"</h4><h4>"+session[1][s].title4+"</h4>"
       }
    for(let s=0;s<session[2].length;s++){
        b[s].innerHTML="<div  class='m'><div class='t'><div class='e'>Mod</div>"+session[2][s].name1+"</div></div><div class='s'><div class='t r'><div class='e'>Speakers</div>"+session[2][s].name2+"</div><div class='t r'><div class='e'></div>"+session[2][s].name3+"</div><div class='t r'><div class='e'></div>"+session[2][s].name4+"</div><div class='t r'><div class='e'></div>"+session[2][s].name5+"</div><div class='t r'><div class='e'></div>"+session[2][s].name6+"</div></div>"
}
}
function gustprofile(){
    let profilecenten = document.getElementById("profile");
    let BigProfile = document.getElementById("BigProfile");
    for(let i=0;i<profile.length;i++){
       let aaa=document.createElement("div");
       aaa.setAttribute("class","bigborder");
       aaa.innerHTML="<div class='img' id='img"+i+"'><div class='border'><div class='site'><a href="+profile[i].site+"><div class='url url2'></div></a><a href="+profile[i].twitter+"><div class='url url1'></div></a></div></div></div><div class='name'>"+profile[i].CO+"</div><div class='name1'><h3>"+profile[i].name+"</h3></div>"
       profilecenten.appendChild(aaa);

       let gustPro = document.getElementById('img'+[i]);
     
       function locationGustPro(e){
            let bbb =document.createElement("div");
            bbb.setAttribute("class","BigPro");
            bbb.setAttribute("id","BigPro"+[i]);
            bbb.style.width = window.innerWidth+"px";
            bbb.style.height= window.innerHeight+300+"px";
            console.log(document.documentElement.scrollTop)
            bbb.innerHTML="<div class='pro-row'><div class='pro-row-img-name'><div class='img' id='img"+i+"'><div class='border'><div class='site'><a href="+profile[i].site+"><div class='url url2'></div></a><a href="+profile[i].twitter+"><div class='url url1'></div></a></div></div></div><div class='pro-row-name'><div class='name'>"+profile[i].CO+"</div><div class='name1'><h3>"+profile[i].name+"</h3</div></div></div></div><div class='pro-row-centen'>"+profile[i].profile+"</div><div class='pro-row-delet'></div> </div>";
            BigProfile.appendChild(bbb);
            let ccc = document.getElementById("BigPro"+[i]);
            let o =document.documentElement.scrollTop+window.innerHeight/2;
            console.log(o)
            ccc.style.top =o+150+"px";
            document.body.style.overflow='hidden';
       }
        gustPro.addEventListener('click', locationGustPro, true);
    }
    BigProfile.addEventListener('click', function () {
        let ccc = document.getElementById("BigProfile")
        console.log(ccc)
       // for (var i=0;i<ccc.length;i+=1){
            ccc.removeChild(ccc.firstChild);
            document.body.style.overflow='';
         // }
        gustPro.removeEventListener('click',
            locationGustPro,
            false
        );
    });
  
};
schedule();
gustprofile();
//某按钮点击时
let n = document.getElementById("navi1")
n.addEventListener('click',function(e){
    let w = document.getElementById("schedule")
    window.scrollTo({
        top:w.offsetTop,
        behavior:'smooth'
    })
})
let n1 = document.getElementById("navi2")
n1.addEventListener('click',function(e){
    let w = document.getElementById("profile")
    window.scrollTo({
        top:w.offsetTop,
        behavior:'smooth'
    })
})
let n2 = document.getElementById("navi3")
n2.addEventListener('click',function(e){
    let w = document.getElementById("spLogo")
    window.scrollTo({
        top:w.offsetTop,
        behavior:'smooth'
    })
})
// Screen.lockOrientation().then(
//     // ロック成功時
//     function() {
//       console.log('ロックされました');
//     },
//     // ロック失敗時
//     function() {
//       console.log('ロックできませんでした');
//     }
//   );
// function heightToTop(ele){
//     //ele为指定跳转到该位置的DOM节点
//     console.log(ele)
//     let root = document.body;
//     let height = 0;
//     do{
//         height += ele.offsetTop;
//         console.log(ele.offsetTop)
//         ele = ele.offsetParent;
//     }while( ele !== root )
//     return height;
// }
// heightToTop(w)