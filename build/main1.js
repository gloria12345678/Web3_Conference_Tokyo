/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i81/seasion.json */ \"./i81/seasion.json\");\n/* harmony import */ var _i81_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i81/en.json */ \"./i81/en.json\");\nfunction divHeight(id,num){\nlet headLeft =document.getElementById(id);\nlet headLeftH = headLeft.clientWidth\nheadLeft.style.height= headLeftH-num+\"px\";\n}\ndivHeight(\"logo\",82)\n// divHeight(\"introduction\",450)\n\n;\n\nconsole.log(_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__)\n\nfunction  schedule (){\n    let schedule = document.getElementById(\"schedule\");\n    // console.log( session[0][0])\n    // console.log( session[0][1])\n    // console.log( session[0][2])\n\n    // console.log( session[1][0])\n    // console.log( session[1][1])\n    // console.log( session[1][2])\n\n    //  \"<div>\"+session[0][j].form+\"</div>\n    //  <div>\n    //       <div>\"+session[0][j].time+</div>\n    //       <div>\"+session[0][j].topic+</div>\n    //       <div class=\"title\"></div>\n    // </div>\"\n\n   // \"//\n   //<h6>\"+session[2][s].name1+\"</h6>\n   //<h6>\"+session[2][s].name2+\"</h6>\n   //<h6>\"+session[2][s].name3+\"</h6>\n   //<h6>\"+session[2][s].name4+\"</h6>\n   //\"\n    console.log(_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1][2])\n    let c = document.getElementsByClassName(\"title\")\n    let b = document.getElementsByClassName(\"gustname\")\n    for(let j=0;j<_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[0].length;j++){\n        let fff =document.createElement(\"div\");\n        fff.setAttribute(\"class\",\"session\");\n        fff.innerHTML=  \"<div class='form'>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[0][j].form+\"</div><div class='date'><div class='time'>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[0][j].time+\"</div><div div class='topic'>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[0][j].topic+\"</div><div class='title'></div><div class='gustname'></div></div>\"\n        schedule.appendChild(fff);\n  }\n    for(let s=0;s<_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1].length;s++){\n        c[s].innerHTML=\"<h4>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1][s].title1+\"</h4><h4>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1][s].title2+\"</h4><h4>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1][s].title3+\"</h4><h4>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[1][s].title4+\"</h4>\"\n       }\n    for(let s=0;s<_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[2].length;s++){\n        b[s].innerHTML=\"<h6>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[2][s].name1+\"</h6><h6>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[2][s].name2+\"</h6><h6>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[2][s].name3+\"</h6><h6>\"+_i81_seasion_json__WEBPACK_IMPORTED_MODULE_0__[2][s].name4+\"</h6>\"\n}\n}\nschedule();\n\nfunction gustprofile(){\n    let profilecenten = document.getElementById(\"profile\");\n    let BigProfile = document.getElementById(\"BigProfile\");\n    for(let i=0;i<_i81_en_json__WEBPACK_IMPORTED_MODULE_1__.length;i++){\n       let aaa=document.createElement(\"div\");\n       aaa.setAttribute(\"class\",\"bigborder\");\n       aaa.innerHTML=\"<div class='img' id='img\"+i+\"'><div class='border'><div class='site'><a href=\"+_i81_en_json__WEBPACK_IMPORTED_MODULE_1__[i].site+\"><div class='url url2'></div></a><a href=\"+_i81_en_json__WEBPACK_IMPORTED_MODULE_1__[i].twitter+\"><div class='url url1'></div></a></div></div></div><div class='name'>\"+_i81_en_json__WEBPACK_IMPORTED_MODULE_1__[i].CO+\"</div><div class='name1'><h3>\"+_i81_en_json__WEBPACK_IMPORTED_MODULE_1__[i].name+\"</h3></div>\"\n       profilecenten.appendChild(aaa);\n\n       let gustPro = document.getElementById('img'+[i]);\n     \n       function locationGustPro(){\n            let bbb =document.createElement(\"div\");\n            bbb.setAttribute(\"class\",\"BigPro\");\n            bbb.setAttribute(\"id\",\"BigPro\"+[i]);\n            bbb.style.width = window.innerWidth+\"px\";\n            bbb.style.height= window.innerHeight+\"px\";\n            bbb.innerHTML=\"<p>\"+[i]+\"</p><p>\"+[i]+\"</p>\";\n            BigProfile.appendChild(bbb);\n           \n       }\n        gustPro.addEventListener('click', locationGustPro, true);\n      \n    }\n    BigProfile.addEventListener('click', function () {\n        let ccc = document.getElementsByClassName(\"BigPro\")\n        console.log(ccc)\n        for (var i=0;i<ccc.length;i+=1){\n            ccc[i].style.display = 'none';\n          }\n        gustPro.removeEventListener('click',\n            locationGustPro,\n            false\n        );\n        console.log(1)\n    });\n  \n};\ngustprofile()\n\n\n//# sourceURL=webpack://web32/./index.js?");

/***/ }),

/***/ "./i81/en.json":
/*!*********************!*\
  !*** ./i81/en.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Noritaka Okabe\",\"CO\":\"JPYC Inc.CEO/<br>BCCC Director\",\"site\":\"https://jpyc.co.jp/\",\"twitter\":\"https://twitter.com/noritaka_okabe\",\"profile\":\"2001年、一橋大学在学中に有限会社（現株式会社）リアルアンリアルを創業し、代表取締役、取締役CTO等を務める。2017年、リアルワールドゲームス株式会社を共同創業。取締役CTO/CFOを経て、取締役ARUK（暗号資産）担当。2019年JPYC株式会社を創業し、代表取締役。（一社）ブロックチェーン推進協会理事、（一社）DeFi協会ステーブルコイン部会長、情報経営イノベーション専門職大学客員教授\"},{\"name\":\"Yosui Harasawa\",\"CO\":\"Hokusai\",\"site\":\"https://hokusai.app/\",\"twitter\":\"https://twitter.com/y0su1\",\"profile\":\"Founder/CEO of Hokusai, NFT infrastructure. I served as COO at JPYC from 2019-2021.5. I had been working as a free Blockchain researcher for 4-5 years.Turn on screen reader support\"},{\"name\":\"猫井 夕菜 a.k.a\",\"CO\":\"DeFiGeek(DFGC)<br>モデレーター\",\"site\":\"https://defigeek.xyz/\",\"twitter\":\"https://twitter.com/nekoi7yu\",\"profile\":\"Debian/Ubuntuユーザーで業務ではLinuxカーネルなどを取り扱う組込み系ソフトウェアエンジニア。学生時代からOSSが好きで卒業研究はP2Pに関するもの。好きなOSSライセンスはGPLv2。技術交流会に育ててもらった恩があり、複数のイベント主催者(事務係)を行っている。日本発DAO型コミュニティであるDFGCではモデレーターロールをしている。猫井夕菜は @nekomatu の VTuberアカウントである。Discordにアカウント切換え機能がなくクリプトの活動はこちらで行うことが多い。\"},{\"name\":\"熊谷 祐二\",\"CO\":\"株式会社アカツキ/<br>ディレクター\",\"site\":\"https://aktsk.jp/\",\"twitter\":\"https://twitter.com/yujikumagai_\",\"profile\":\"2014年にiemo株式会社共同代表取締役COO就任を経て、同社を株式会社ディー・エヌ・エーへ売却。 2015年にスポーツテック事業を手掛けるSkyBall株式会社を創業し、2018年にアカツキへ売却。アカツキのesports事業責任者並びにProfessional Esports League取締役（バルセロナ）に就任。2019年8月からHeart Driven Fund ヴァイスプレジデントに就任。自身の起業・経営経験を元に主にアーリーステージの投資実行、ハンズオン支援を行う。\"},{\"name\":\"Kuniyoshi Mabuchi\",\"CO\":\"PwC Managing Director ex <br>Facebook Director\",\"site\":\"https://www.pwc.com/jp/en\",\"twitter\":\"https://www.facebook.com/kuniyoshi.mabuchi\",\"profile\":\"2009: General Manager of Tribal DDB Tokyo, the digital agency of Omnicom, the world\\'s No. 2 advertising agency group. 2012: CEO of Ogilvy Japan K.K. , the world\\'s No. 1 advertising agency in the WPP Group.2016: SVP & Partner, Fleishman Hillard, the No. 1 PR agency in the Omnicom Group.2018: Director of Facebook Japan.Advisor for Tokyo University.Current position since 2020.\"},{\"name\":\"水野 和寛\",\"CO\":\"株式会社 Minto CEO\",\"site\":\"https://minto-inc.jp/\",\"twitter\":\"https://twitter.com/mizunoq\",\"profile\":\"2009: General Manager of Tribal DDB Tokyo, the digital agency of Omnicom, the world\\'s No. 2 advertising agency group.2012: CEO of Ogilvy Japan K.K. , the world\\'s No. 1 advertising agency in the WPP Group.2016: SVP & Partner, Fleishman Hillard, the No. 1 PR agency in the Omnicom Group.2018: Director of Facebook Japan.Advisor for Tokyo University.Current position since 2020.\"},{\"name\":\"安宅 基\",\"CO\":\"株式会社Tokyo Otaku<br> Mode創業者兼COO\",\"site\":\"https://corporate.otakumode.com/\",\"twitter\":\"https://twitter.com/paji_a\",\"profile\":\"2009年11月にリアルタイムQ&Aサービスを開発。2011年11月に同サービスを法人化、2011年12月に事業売却の形でバイアウトした。その後、Tokyo Otaku Mode創業に参画。Tokyo Otaku Mode Co-founderとして米国シードアクセレーター （http://500.co）のプログラム参加。EC事業など新規事業開発及び事業全般の統括を行う。\"},{\"name\":\"佐藤 詳悟\",\"CO\":\"株式会社FIREBUG<br>代表取締役CPO\",\"site\":\"firebug.jp\",\"twitter\":\"https://twitter.com/sato_shogo1\",\"profile\":\"1983年生まれ、東京都出身。大学卒業後の2005年、吉本興業に入社。ナインティナインやロンドンブーツ1号2号、COWCOW、ロバートなどのマネージャーを歴任。ロバート秋山の『クリエーターズ・ファイル』、COWCOWの『あたりまえ体操』などのコンテンツ開発にも携わる。15年に独立。経営者や文化人など多様な背景を持つ人材のエージェント会社「QREATOR AGENT」を立ち上げ、落合陽一や前田裕二などのメディア露出支援を行う。16年にはお笑い芸人や俳優、モデル、アーティストなど著名人のDXパートナーとして、 デジタルを起点としたIP開発・ビジネスモデル構築を包括的に手掛ける“エンタメビジネススタジオ”FIREBUGを立ち上げ。メルカリやBASEなどのスタートアップ企業のビジネス支援の他、よゐこや北斗晶、菊地亜美をはじめとするタレントのYouTubeチャンネルの開発・運用、いきものがかりなどのアーティストの360°プロデュース事業を展開している\"},{\"name\":\"コムギ\",\"CO\":\"Web3特化のベンチャーキャピタル／<br>Web3リサーチャー\",\"site\":\"https://komugi.jp/\",\"twitter\":\"https://twitter.com/ro_mi\",\"profile\":\"Web3に特化したベンチャーキャピタル（VC）でリサーチャーを務める。大学卒業後、ＮＨＫ出版に入社。編集担当作に『教養としてのテクノロジー』『ITビジネスの原理』『VRビジネスの衝撃』など多数。2019年に暗号資産ニュースメディア「CoinDesk Japan」創刊編集長、ブロックチェーンカンファレンス「btokyo」プロデューサーを経て、2021年6月より現職。\"},{\"name\":\"Makoto Inoue\",\"CO\":\"ENSdeveloper\",\"site\":\"https://ens.domains\",\"twitter\":\"https://matoken.eth.link\",\"profile\":\"Makoto Inoue is one of the core developers at Ethereum Name Service which provides NFT compliant naming service to various blockchain addresses and decentralised file systems. He is also co-founder of Ethereum based event service called Kickback and hosts events such as London Ethereum Codeup where a group of developers examine the latest smart contracts\"}]');\n\n//# sourceURL=webpack://web32/./i81/en.json?");

/***/ }),

/***/ "./i81/seasion.json":
/*!**************************!*\
  !*** ./i81/seasion.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[[{\"form\":\"フィジカル\",\"time\":\"10:45-10:50\",\"topic\":\"セッション1:既存IPのweb3.0へのアプローチ方法\"},{\"form\":\"映像\",\"time\":\"11:45-12:50\",\"topic\":\"スペシャルオープニングスピーチ\"},{\"form\":\"フィジカル\",\"time\":\"13:45-14:50\",\"topic\":\"セッション２:既存IPの効果的なweb3.0へのアプローチ方法\"}],[{\"title1\":\"\",\"title2\":\"\",\"title3\":\"\",\"title4\":\"\"},{\"title1\":\"・Web3で重要なポイントとなるDeFi(分散型金融)とは？\",\"title2\":\"・DeFiの思想が新しい経済を作り出す\",\"title3\":\"・アニメ、ゲーム、芸能etc これから参入方法は？\",\"title4\":\"・持続可能にするためにどんな工夫が必要か\"},{\"title1\":\"・Web3で重要なポイるDeFi(分散型金融)とは？\",\"title2\":\"・DeFiの思想が新しい経済を作り出す\",\"title3\":\"\",\"title4\":\"\"}],[{\"name1\":\"設楽 悠介<br>幻冬舎「あたらしい経済」\",\"name2\":\"\",\"name3\":\"\",\"name4\":\"\",\"name5\":\"\"},{\"name1\":\"設楽 悠介<br>幻冬舎「あたらしい経済」編集長\",\"name2\":\"佐渡島 庸平<br>株式会ク\",\"name3\":\"白石 陽介<br>AROBANK CEO\",\"name4\":\"コムギ b3 VC<br>Web3 Researcher \",\"name5\":\"cant see<br>わえ みか\"},{\"name1\":\"設楽 悠介<br>幻冬舎「あたらしい経集長\",\"name2\":\"佐渡島平<br>株式会社コルク\",\"name3\":\"\",\"name4\":\"\",\"name5\":\"\"}]]');\n\n//# sourceURL=webpack://web32/./i81/seasion.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;