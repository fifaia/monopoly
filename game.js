function getRandom(min, max){
	return Math.round(Math.random() * (max - min) + min)
}
var sale_1 = 0;
var player_1 = { name: 0, icon: 0, money: 50000, car_icon: 0};

var player_2 = { name: 0, icon: 0, money: 50000, car_icon: 0};

var dazgveva = [];
var telefoni = [];

var gadasaxdeli_tanxa_1 = 0;
var gadasaxdeli_tanxa_2 = 0;

var activ_chose_1 = 0;
var activ_chose_2 = 0;

var sound_helper = 0;

var vagzlis_qucha = { name: "vagzlis quCa", fasi: 1000, gayidvis_fasi: 300, shetavazebuli_fasi: 0, patara_saxlis_fasi: 2500, gadasaxi_carielze: 100, gadasaxi_saxlebze: 2400, saxlebis_raodenoba: 0, namber_action: 0, feris_id: 1, saxlis_dadgma: 0, aqciis_raodenoba: 2, feri: "#864c38", link_sur: "url('')", link_sound: null}
var mtkvris_qucha = { name: "mtkvris quCa", fasi: 2000, gayidvis_fasi: 600, shetavazebuli_fasi: 0, patara_saxlis_fasi: 2500, gadasaxi_carielze: 200, gadasaxi_saxlebze: 4400, saxlebis_raodenoba: 0, namber_action: 2, feris_id: 1, saxlis_dadgma: 0, aqciis_raodenoba: 2, feri: "#864c38", link_sur: "url('')", link_sound: null}

var maisurazis_qucha = { name: "maisuraZis quCa", fasi: 3000, gayidvis_fasi: 1000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 2500, gadasaxi_carielze: 600, gadasaxi_saxlebze: 5200, saxlebis_raodenoba: 0, namber_action: 5, feris_id: 2, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#acdcef", link_sur: "url('')", link_sound: null}
var gaxokizis_qucha = { name: "gaxokiZis quCa", fasi: 4000, gayidvis_fasi: 1300, shetavazebuli_fasi: 0, patara_saxlis_fasi: 2500, gadasaxi_carielze: 600, gadasaxi_saxlebze: 5500, saxlebis_raodenoba: 0, namber_action: 7, feris_id: 2, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#acdcef", link_sur: "url('')", link_sound: null}
var xomlelis_qucha = { name: "xomlelis quCa", fasi: 5000, gayidvis_fasi: 1600, shetavazebuli_fasi: 0, patara_saxlis_fasi: 2500, gadasaxi_carielze: 600, gadasaxi_saxlebze: 6000, saxlebis_raodenoba: 0, namber_action: 8, feris_id: 2, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#acdcef", link_sur: "url('')", link_sound: null}

var xataetis_qucha = { name: "xataetis quCa", fasi: 6000, gayidvis_fasi: 2000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1200, gadasaxi_saxlebze: 7400, saxlebis_raodenoba: 0, namber_action: 10, feris_id: 3, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#c53883", link_sur: "url('')", link_sound: null}
var fatmanis_qucha = { name: "fatmanis quCa", fasi: 7000, gayidvis_fasi: 2300, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1200, gadasaxi_saxlebze: 7500, saxlebis_raodenoba: 0, namber_action: 12, feris_id: 3, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#c53883", link_sur: "url('')", link_sound: null}
var tamaris_qucha = { name: "tamaris quCa", fasi: 8000, gayidvis_fasi: 2500, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1200, gadasaxi_saxlebze: 9000, saxlebis_raodenoba: 0, namber_action: 13, feris_id: 3, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#c53883", link_sur: "url('')", link_sound: null}

var gelovanis_qucha = { name: "gelovanis quCa", fasi: 9000, gayidvis_fasi: 3000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1800, gadasaxi_saxlebze: 9400, saxlebis_raodenoba: 0, namber_action: 15, feris_id: 4, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#ec8b2b", link_sur: "url('')", link_sound: null}
var nijarazis_qucha = { name: "niJaraZis quCa", fasi: 10000, gayidvis_fasi: 3200, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1800, gadasaxi_saxlebze: 9500, saxlebis_raodenoba: 0, namber_action: 17, feris_id: 4, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#ec8b2b", link_sur: "url('')", link_sound: null}
var ferazis_qucha = { name: "ferazis quCa", fasi: 11000, gayidvis_fasi: 3500, shetavazebuli_fasi: 0, patara_saxlis_fasi: 5000, gadasaxi_carielze: 1800, gadasaxi_saxlebze: 10000, saxlebis_raodenoba: 0, namber_action: 18, feris_id: 4, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#ec8b2b", link_sur: "url('')", link_sound: null}

var fanjikizis_qucha = { name: "fanjikiZis quCa", fasi: 12000, gayidvis_fasi: 4000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 2400, gadasaxi_saxlebze: 10200, saxlebis_raodenoba: 0, namber_action: 20, feris_id: 5, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#da2428", link_sur: "url('')", link_sound: null}
var tashkentis_qucha = { name: "taSkentis quCa", fasi: 13000, gayidvis_fasi: 4200, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 2400, gadasaxi_saxlebze: 10400, saxlebis_raodenoba: 0, namber_action: 22, feris_id: 5, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#da2428", link_sur: "url('')", link_sound: null}
var fartavas_qucha = { name: "Sartavas quCa", fasi: 14000, gayidvis_fasi: 4600, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 2400, gadasaxi_saxlebze: 11000, saxlebis_raodenoba: 0, namber_action: 23, feris_id: 5, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#da2428", link_sur: "url('')", link_sound: null}

var cagarelis_qucha = { name: "cagarelis quCa", fasi: 15000, gayidvis_fasi: 5000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 3000, gadasaxi_saxlebze: 11400, saxlebis_raodenoba: 0, namber_action: 25, feris_id: 6, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#fff003", link_sur: "url('')", link_sound: null}
var sairmis_qucha = { name: "sairmis quCa", fasi: 16000, gayidvis_fasi: 5200, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 3000, gadasaxi_saxlebze: 11500, saxlebis_raodenoba: 0, namber_action: 26, feris_id: 6, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#fff003", link_sur: "url('')", link_sound: null}
var rionis_qucha = { name: "rionis quCa", fasi: 17000, gayidvis_fasi: 5600, shetavazebuli_fasi: 0, patara_saxlis_fasi: 7500, gadasaxi_carielze: 3000, gadasaxi_saxlebze: 12000, saxlebis_raodenoba: 0, namber_action: 28, feris_id: 6, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#fff003", link_sur: "url('')", link_sound: null}

var pekinis_qucha = { name: "pekinis quCa", fasi: 18000, gayidvis_fasi: 6000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 10000, gadasaxi_carielze: 3600, gadasaxi_saxlebze: 12600, saxlebis_raodenoba: 0, namber_action: 30, feris_id: 7, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#13a758", link_sur: "url('')", link_sound: null}
var yazbegis_qucha = { name: "yazbegis quCa", fasi: 19000, gayidvis_fasi: 6200, shetavazebuli_fasi: 0, patara_saxlis_fasi: 10000, gadasaxi_carielze: 3600, gadasaxi_saxlebze: 12700, saxlebis_raodenoba: 0, namber_action: 31, feris_id: 7, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#13a758", link_sur: "url('')", link_sound: null}
var qavtarazis_qucha = { name: "qavtaraZis quCa", fasi: 20000, gayidvis_fasi: 6600, shetavazebuli_fasi: 0, patara_saxlis_fasi: 10000, gadasaxi_carielze: 3600, gadasaxi_saxlebze: 14000, saxlebis_raodenoba: 0, namber_action: 33, feris_id: 7, saxlis_dadgma: 0, aqciis_raodenoba: 3, feri: "#13a758", link_sur: "url('')", link_sound: null}

var rustavelis_qucha = { name: "rustavelis quCa", fasi: 21000, gayidvis_fasi: 8000, shetavazebuli_fasi: 0, patara_saxlis_fasi: 10000, gadasaxi_carielze: 4500, gadasaxi_saxlebze: 15000, saxlebis_raodenoba: 0, namber_action: 36, feris_id: 8, saxlis_dadgma: 0, aqciis_raodenoba: 2, feri: "#0067a4", link_sur: "url('')", link_sound: null}
var tavisuflebis_qucha = { name: "Tavisuflebis quCa", fasi: 22000, gayidvis_fasi: 8200, shetavazebuli_fasi: 0, patara_saxlis_fasi: 10000, gadasaxi_carielze: 4500, gadasaxi_saxlebze: 20000, saxlebis_raodenoba: 0, namber_action: 38, feris_id: 8, saxlis_dadgma: 0, aqciis_raodenoba: 2, feri: "#0067a4", link_sur: "url('')", link_sound: null}

var vikingi = { name: "avtoservisi vikingi", fasi: 10000, gayidvis_fasi: 3000, gadasaxi_carielze: 2000, shetavazebuli_fasi: 0, saxlebis_raodenoba: 0, namber_action: 4, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/car_servise.png')", link_sound: "mus/restran.mp3" }
var taichi = { name: "avtoservisi taiWi", fasi: 10000, gayidvis_fasi: 3000, gadasaxi_carielze: 2000, shetavazebuli_fasi: 0, saxlebis_raodenoba: 0, namber_action: 14, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/car_servise.png')", link_sound: "mus/restran.mp3" }
var avaza = { name: "avtoservisi avaza", fasi: 10000, gayidvis_fasi: 3000, gadasaxi_carielze: 2000, shetavazebuli_fasi: 0, saxlebis_raodenoba: 0, namber_action: 24, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/car_servise.png')", link_sound: "mus/restran.mp3" }
var mustangi = { name: "avtoservisi mustangi", fasi: 10000, gayidvis_fasi: 3000, gadasaxi_carielze: 2000, shetavazebuli_fasi: 0, saxlebis_raodenoba: 0, namber_action: 34, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/car_servise.png')", link_sound: "url('mus/restran.mp3" }

var igoeti = { name: "restorani igoeti", fasi: 8000, gayidvis_fasi: 2500, shetavazebuli_fasi: 0, gadasaxi_carielze: 2000, saxlebis_raodenoba: 0, namber_action: 11, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/restran.png')", link_sound: "mus/restran.mp3" }
var trulaila = { name: "restorani trulaila", fasi: 8000, gayidvis_fasi: 2500, shetavazebuli_fasi: 0, gadasaxi_carielze: 2000, saxlebis_raodenoba: 0, namber_action: 27, aqciis_raodenoba: 30, feri: "#cce3c7", link_sur: "url('monopoly_icon/restran.png')", link_sound: "mus/restran.mp3" }

var tel_daz_childe_1 = {text: "miiReT naanderZevi Tanxa 8 000", move: 60, money_bet: 8000, money_low: 0, link_img: "url('monopoly_icon/pey.png')"}
var tel_daz_childe_2 = {text: "ewvieT restoran trulailas", move: 12, money_bet: 0, money_low: 0, link_img: "url('')"}
var tel_daz_childe_3 = {text: "gadauxadeT banks sakomisio 4 500", move: 60, money_bet: 0, money_low: 4500, link_img: "url('monopoly_icon/pey.png')"}
var tel_daz_childe_4 = {text: "bankis Secdoma Tqven sasargebloT miiReT 10 000", move: 60, money_bet: 10000, money_low: 0, link_img: "url('monopoly_icon/pey.png')"}
var tel_daz_childe_5 = {text: "begara saSemosavlo gadasaxadze Seadgens 7 500", move: 60, money_bet: 0, money_low: 7500, link_img: "url('monopoly_icon/pey.png')"}
var tel_daz_childe_6 = {text: "miiReT servisistvis damatebiT 2 000", move: 60, money_bet: 2000, money_low: 0, link_img: "url('monopoly_icon/pey.png')"}
var tel_daz_childe_7 = {text: "gaemgzavreT mtkvris quCaze", move: 3, money_bet: 0, money_low: 0}
var tel_daz_childe_8 = {text: "gaemgzavreT ujraze gezi, miiReT 10 000", move: 0, money_bet: 10000, money_low: 0, link_img: "url('')"}
var tel_daz_childe_9 = {text: "gaemgzavreT Tamaris quCaze miiReT 10 000", move: 14, money_bet: 10000, money_low: 0, link_img: "url('')"}
var tel_daz_childe_10 = {text: "gaemgzavreT Tavisuflebis moedanze", move: 39, money_bet: 0, money_low: 0, link_img: "url('')"}

var list_daz_rag = [tel_daz_childe_1, tel_daz_childe_2, tel_daz_childe_3, tel_daz_childe_4, tel_daz_childe_5, tel_daz_childe_6, tel_daz_childe_7, tel_daz_childe_8, tel_daz_childe_9, tel_daz_childe_10];

var player_1_position = 0;
var player_2_position = 0;

var kam_1_global = 0;
var kam_2_global = 0;

var svla = 1;
var kam_roll_count = 0;
var visi_svlaa = 1;
var sound_universal = "";

var error_sound = new Audio("kam/error.mp3") 
var bg_sound = new Audio("mus/bg_sound.mp3") 
var telefone = new Audio("mus/telefone.mp3") 
var dazgveva = new Audio("mus/dazgveva.mp3") 
var petrol = new Audio("mus/petrol.mp3") 
var money_pay = new Audio("mus/money_pay.mp3") 
var police = new Audio("mus/police.mp3") 


var move_car_1 = [];
var move_car_2 = [];
var list_action = [
	vagzlis_qucha, null, mtkvris_qucha, null, vikingi, maisurazis_qucha, null, gaxokizis_qucha, xomlelis_qucha, null, xataetis_qucha, igoeti, fatmanis_qucha, tamaris_qucha, taichi, gelovanis_qucha,
	null, nijarazis_qucha, ferazis_qucha, null, fanjikizis_qucha, null, tashkentis_qucha, fartavas_qucha, avaza, cagarelis_qucha, sairmis_qucha, trulaila, rionis_qucha, null, pekinis_qucha, yazbegis_qucha, 
	null, qavtarazis_qucha, mustangi, null, rustavelis_qucha, null, tavisuflebis_qucha, null
];

var list_action_show_home = [
	vagzlis_qucha, null, mtkvris_qucha, null, vikingi, maisurazis_qucha, null, gaxokizis_qucha, xomlelis_qucha, null, xataetis_qucha, igoeti, fatmanis_qucha, tamaris_qucha, taichi, gelovanis_qucha,
	null, nijarazis_qucha, ferazis_qucha, null, fanjikizis_qucha, null, tashkentis_qucha, fartavas_qucha, avaza, cagarelis_qucha, sairmis_qucha, trulaila, rionis_qucha, null, pekinis_qucha, yazbegis_qucha, 
	null, qavtarazis_qucha, mustangi, null, rustavelis_qucha, null, tavisuflebis_qucha, null
];

var player_1_action = [];
var player_2_action = [];

var gasayidi_action_1 = [];
var gasayidi_action_2 = [];

var home_action_1 = [];
var home_action_2 = [];

var yidva_1 = 0
var gayidva_1 = 0

var yidva_2 = 0
var gayidva_2 = 0

var sajarimo_1 = 0;
var sajarimo_2 = 0;

for (var i = 0; i < 28; i++) {
	move_car_1[i] = null;
	move_car_2[i] = null;

	player_1_action[i] = null;
	player_2_action[i] = null;
}


bg_sound.play();

bg_sound.onended = function() {
	if (sound_helper == 0) 
	{
		bg_sound.play();
	}
}; 

function Dice_movement(){
	var kam_pos = 0;

	var kam_1 = 0;
	var kam_2 = 0;

	var kam_roll = new Audio("kam/kamateli.mp3") 

	document.getElementById("dazgveva").innerHTML = "";
	document.getElementById("telefoni").innerHTML = "";

	Dice_movement_inside();

	function Dice_movement_inside (){
		if (sound_helper == 0) 
		{
			kam_roll.play();	
		}
		$("#kam_roll_1").css({"display": "none"});
		$("#kam_roll_2").css({"display": "none"});
		if (kam_pos == 4) 
		{
			kam_pos++;
			kam_1 = getRandom(1, 6);
			kam_2 = getRandom(1, 6);
			kam_show();
			$(".kamateli_1").css({"top" : "120px"});
			$(".kamateli_1").css({"left" : "163px"});
			$(".kamateli_1").css({"opacity" : "1"});

			$(".kamateli_2").css({"top" : "97px"});
			$(".kamateli_2").css({"left" : "254px"});
			$(".kamateli_2").css({"opacity" : "1"});

			kam_1_global = kam_1;
			kam_2_global = kam_2;
			if (kam_roll_count == 0) 
			{
				if (kam_1 > kam_2) 
				{
					kam_roll_count++;
					visi_svlaa = 1;
					$("#kam_roll_1").css({"display": "block"});
				}
				if (kam_1 < kam_2) 
				{
					kam_roll_count++;
					visi_svlaa = 2;
					$("#kam_roll_2").css({"display": "block"});
				}
				if (kam_1 == kam_2) 
				{
					kam_roll_count = 0;
					kam_pos = 0;
					Dice_movement_inside();
					svlis_gaiasneba(); // es maq miwerili da sanaxavia tu mushaobs
				}
			}
			else
			{
				setTimeout(function() {
        		mozraoba();
        		}, 900)
			}
			
			

		}

		if (kam_pos == 3) 
		{
			kam_pos++;
			kam_1 = getRandom(1, 6);
			kam_2 = getRandom(1, 6);
			kam_show();
			$(".kamateli_1").css({"top" : "156px"});
			$(".kamateli_1").css({"left" : "129px"});
			$(".kamateli_1").css({"opacity" : "0.8"});

			$(".kamateli_2").css({"top" : "148px"});
			$(".kamateli_2").css({"left" : "214px"});
			$(".kamateli_2").css({"opacity" : "0.8"});

			setTimeout(function() {
            Dice_movement_inside();
            }, 100)
		}

		if (kam_pos == 2) 
		{
			kam_pos++;
			kam_1 = getRandom(1, 6);
			kam_2 = getRandom(1, 6);
			kam_show();
			$(".kamateli_1").css({"top" : "219px"});
			$(".kamateli_1").css({"left" : "103px"});
			$(".kamateli_1").css({"opacity" : "0.6"});


			$(".kamateli_2").css({"top" : "203px"});
			$(".kamateli_2").css({"left" : "179px"});
			$(".kamateli_2").css({"opacity" : "0.6"});

			setTimeout(function() {
            Dice_movement_inside();
            }, 100)
		}

		if (kam_pos == 1) 
		{
			kam_pos++;
			kam_1 = getRandom(1, 6);
			kam_2 = getRandom(1, 6);
			kam_show();
			$(".kamateli_1").css({"top" : "258px"});
			$(".kamateli_1").css({"left" : "71px"});
			$(".kamateli_1").css({"opacity" : "0.4"});

			$(".kamateli_2").css({"top" : "244px"});
			$(".kamateli_2").css({"left" : "155px"});
			$(".kamateli_2").css({"opacity" : "0.4"});

			setTimeout(function() {
            Dice_movement_inside();
            }, 100)
		}

		if (kam_pos == 0) 
		{
			kam_pos++;
			kam_1 = getRandom(1, 6);
			kam_2 = getRandom(1, 6);
			kam_show();
			$(".kamateli_1").css({"top" : "292px"});
			$(".kamateli_1").css({"left" : "50px"});
			$(".kamateli_1").css({"opacity" : "0.2"});

			$(".kamateli_2").css({"top" : "280px"});
			$(".kamateli_2").css({"left" : "126px"});
			$(".kamateli_2").css({"opacity" : "0.2"});

			setTimeout(function() {
            Dice_movement_inside();
            }, 100)
		}
	}

	function kam_show (){
		if (kam_1 == 1) { $(".kamateli_1").css({"background-image": "url('kam/1.png')"}); }
		if (kam_1 == 2) { $(".kamateli_1").css({"background-image": "url('kam/2.png')"}); }
		if (kam_1 == 3) { $(".kamateli_1").css({"background-image": "url('kam/3.png')"}); }
		if (kam_1 == 4) { $(".kamateli_1").css({"background-image": "url('kam/4.png')"}); }
		if (kam_1 == 5) { $(".kamateli_1").css({"background-image": "url('kam/5.png')"}); }
		if (kam_1 == 6) { $(".kamateli_1").css({"background-image": "url('kam/6.png')"}); }	

		if (kam_2 == 1) { $(".kamateli_2").css({"background-image": "url('kam/1.png')"}); }
		if (kam_2 == 2) { $(".kamateli_2").css({"background-image": "url('kam/2.png')"}); }
		if (kam_2 == 3) { $(".kamateli_2").css({"background-image": "url('kam/3.png')"}); }
		if (kam_2 == 4) { $(".kamateli_2").css({"background-image": "url('kam/4.png')"}); }
		if (kam_2 == 5) { $(".kamateli_2").css({"background-image": "url('kam/5.png')"}); }
		if (kam_2 == 6) { $(".kamateli_2").css({"background-image": "url('kam/6.png')"}); }	
	}
	
}


function mozraoba () {
	svla = 0;
	svla = kam_1_global + kam_2_global;
	kam_roll_count++;
	var car_move_sound = new Audio("kam/car_move_sound.mp3") 



	function xx1(){

			if (visi_svlaa == 1) 
			{
				if (sajarimo_1 == 0) 
				{
					$("#kam_roll_1").css({"display": "none"});

				if (svla > 0) 
				{
				if (((svla + player_1_position) >= 40) && (player_1_position == 39)) 
				{
					player_1_position = 0;
					svla--;
					move_car_1[player_1_position] = player_1;
					$("#car_1_39").css({"display": "none"});
					$("#car_1_"+player_1_position).css({"display": "block"});
					player_1.money = player_1.money + 10000;
					document.getElementById("ssa_1_3_1").innerHTML = player_1.money;
					setTimeout(function() {
        			xx1();
        			}, 400)
				}
				else
				{
					player_1_position++;
					svla--;
					move_car_1[player_1_position] = player_1;
					move_car_1[player_1_position -1] = null;
					$("#car_1_"+(player_1_position-1)).css({"display": "none"});
					$("#car_1_"+player_1_position).css({"display": "block"});

					setTimeout(function() {
        			xx1();
        			}, 400)
				}
				if (sound_helper == 0) 
				{
					car_move_sound.play();
				}
				
				}
				else
				{
				
				// telefonebis garCeva
				if (player_1_position == 0 || player_1_position == 7 || player_1_position == 2 || player_1_position == 4 || player_1_position == 10  || player_1_position == 17  || player_1_position == 20 || player_1_position == 22 || player_1_position == 30  || player_1_position == 33 || player_1_position == 36 || player_1_position == 38 ) 
				{
					
					if (player_1_position == 2 || player_1_position == 17 || player_1_position == 33) // dazgveva
					{
						if (sound_helper == 0) 
						{
							dazgveva.play();
						}
						dazgveva[0] = list_daz_rag[getRandom(0, 9)];
						document.getElementById("dazgveva").innerHTML = dazgveva[0].text;  // aq gaweda winat
						if (dazgveva[0].move != 60) 
						{
							player_1_position = dazgveva[0].move;
							$("#car_1_2").css({"display": "none"});
							$("#car_1_17").css({"display": "none"});
							$("#car_1_33").css({"display": "none"});
							$("#car_1_"+player_1_position).css({"display": "block"});
							move_car_1[player_1_position] = player_1;
							move_car_1[1] = null;
							move_car_1[16] = null;
							move_car_1[32] = null;
							if (player_1_position == 10 || player_1_position == 0) 
							{
								
								svlis_gaiasneba();
							}
							else
							{
								if (player_1_action[player_1_position] != null) 
								{
									svlis_gaiasneba();
									
								}
								else
								{
									sale();
								}
							}
							
						}
						if (dazgveva[0].money_low > 0) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": dazgveva[0].link_img });
							gadasaxdeli_tanxa_1 = dazgveva[0].money_low;
							document.querySelector('.name_action_1').innerHTML = "dazgveva";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1;
						}
						if (dazgveva[0].money_bet > 0 && dazgveva[0].move == 60) 
						{
							player_1.money = player_1.money + dazgveva[0].money_bet;
							svlis_gaiasneba();
							
						}
						


						document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;

						
					}

					if (player_1_position == 7 || player_1_position == 22 || player_1_position == 36) // telefoni
					{
						if (sound_helper == 0) 
						{
							telefone.play();
						}
						telefoni[0] = list_daz_rag[getRandom(0, 9)];
						document.getElementById("telefoni").innerHTML = telefoni[0].text;
						if (telefoni[0].move != 60) 
						{
							player_1_position = telefoni[0].move;
							$("#car_1_7").css({"display": "none"});
							$("#car_1_22").css({"display": "none"});
							$("#car_1_36").css({"display": "none"});
							$("#car_1_"+player_1_position).css({"display": "block"});
							move_car_1[player_1_position] = player_1;
							move_car_1[6] = null;
							move_car_1[22] = null;
							move_car_1[35] = null;
							if (player_1_position == 10 || player_1_position == 0) 
							{
								svlis_gaiasneba();
							}
							else
							{
								if (player_1_action[player_1_position] != null) 
								{
									svlis_gaiasneba();
								}
								else
								{
									sale();
								}
									
							}
						}
						if (telefoni[0].money_low > 0) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": telefoni[0].link_img });
							gadasaxdeli_tanxa_1 = telefoni[0].money_low;
							document.querySelector('.name_action_1').innerHTML = "telefoni";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1;
						}

						if (telefoni[0].money_bet > 0 && telefoni[0].move == 60) 
						{
							
							player_1.money = player_1.money + telefoni[0].money_bet;
							svlis_gaiasneba();
						}
						

						document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;

						
					}

					if (player_1_position == 30) //ukusvla
					{
						move_car_1[player_1_position] = null;
						player_1_position = 10;
						$("#car_1_30").css({"display": "none"});
						$("#car_1_"+player_1_position).css({"display": "block"});
						move_car_1[player_1_position] = player_1;
						if (sound_helper == 0) 
						{
							police.play();
						}
					}

					if (player_1_position == 4 || player_1_position == 38) // benzini
					{
						if (player_1_position == 4) 
						{
							
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": "url('monopoly_icon/petrol.png')" });
							gadasaxdeli_tanxa_1 = 3000;
							document.querySelector('.name_action_1').innerHTML = "benzini";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1;
							
						}

						if (player_1_position == 38) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": "url('monopoly_icon/petrol.png')" });
							gadasaxdeli_tanxa_1 = 8000;
							document.querySelector('.name_action_1').innerHTML = "benzini";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1;
							
						}
						if (sound_helper == 0) 
						{
							petrol.play();	
						}
					}

					if (player_1_position == 20) //nakrzali
					{
						svlis_gaiasneba();
					}

					if (player_1_position == 10) //sajarimo sadgomi
					{
						if (sound_helper == 0) 
						{
							police.play();
						}
						if (sajarimo_2 > 0) 
						{
							sajarimo_2 = 0;
							document.querySelector('#saj_1').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_2;
							$("#saj_2").css({"color": "green"});
						}
						sajarimo_1 = 3;
						document.querySelector('#saj_1').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_1;
						$("#saj_1").css({"color": "red"});
						svlis_gaiasneba();
					}

					if (player_1_position == 0) //გეზი
					{
						
						svlis_gaiasneba();
					}
				}
				else
				{
					sale();
				}

				}
				}
				else
				{
					sajarimo_1--;
					document.querySelector('#saj_1').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_1;
					if (sajarimo_1 == 0) 
					{
						$("#saj_1").css({"color": "green"});
					}
					svlis_gaiasneba();
				}
				
			}
			else
			{

				if (visi_svlaa == 2) 
				{
					if (sajarimo_2 == 0) 
					{
						$("#kam_roll_2").css({"display": "none"});
						if (svla > 0) 
						{
						if (((svla + player_2_position) >= 40) && (player_2_position == 39)) 
						{
					player_2_position = 0;
					svla--;
					move_car_2[player_2_position] = player_2;
					$("#car_2_39").css({"display": "none"});
					$("#car_2_"+player_2_position).css({"display": "block"});
					player_2.money = player_2.money + 10000;
					document.getElementById("ssa_1_3_2").innerHTML = player_2.money;
					setTimeout(function() {
        			xx1();
        			}, 400)
						}
						else
						{
					player_2_position++;
					svla--;
					move_car_2[player_2_position] = player_2;
					move_car_2[player_2_position -1] = null;
					$("#car_2_"+(player_2_position-1)).css({"display": "none"});
					$("#car_2_"+player_2_position).css({"display": "block"});

					setTimeout(function() {
        			xx1();
        			}, 400)
						}
						if (sound_helper == 0) 
						{
							car_move_sound.play();
						}
						
						}
						else
						{
						if (player_2_position == 0 || player_2_position == 7 || player_2_position == 2 || player_2_position == 4 || player_2_position == 10  || player_2_position == 17  || player_2_position == 20 || player_2_position == 22 || player_2_position == 30  || player_2_position == 33 || player_2_position == 36 || player_2_position == 38 ) 
						{
					
					if (player_2_position == 2 || player_2_position == 17 || player_2_position == 33) // dazgveva
					{
						if (sound_helper == 0) 
						{
							dazgveva.play();
						}
						dazgveva[0] = list_daz_rag[getRandom(0, 9)];
						document.getElementById("dazgveva").innerHTML = dazgveva[0].text;
						if (dazgveva[0].move != 60) 
						{
							player_2_position = dazgveva[0].move;
							$("#car_2_2").css({"display": "none"});
							$("#car_2_17").css({"display": "none"});
							$("#car_2_33").css({"display": "none"});
							$("#car_2_"+player_2_position).css({"display": "block"});
							move_car_2[player_2_position] = player_2;
							move_car_2[1] = null;
							move_car_2[16] = null;
							move_car_2[32] = null;
							if (player_2_position == 10 || player_2_position == 0) 
							{
								svlis_gaiasneba();
							}
							else
							{
								if (player_2_action[player_2_position] != null) 
								{
									svlis_gaiasneba();
								}
								else
								{
									sale();
								}
							}
							
						}
						
						if (dazgveva[0].money_low > 0) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": dazgveva[0].link_img });
							gadasaxdeli_tanxa_2 = dazgveva[0].money_low;
							document.querySelector('.name_action_1').innerHTML = "dazgveva";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2;
						}

						if (dazgveva[0].money_bet > 0 && dazgveva[0].move == 60) 
						{
							player_2.money = player_2.money + dazgveva[0].money_bet;
							svlis_gaiasneba();
						}
						

						document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;

						
					}

					if (player_2_position == 7 || player_2_position == 22 || player_2_position == 36) // telefoni
					{
						if (sound_helper == 0) 
						{
							telefone.play();
						}
						telefoni[0] = list_daz_rag[getRandom(0, 9)];
						document.getElementById("telefoni").innerHTML = telefoni[0].text;
						if (telefoni[0].move != 60) 
						{
							player_2_position = telefoni[0].move;
							$("#car_2_7").css({"display": "none"});
							$("#car_2_22").css({"display": "none"});
							$("#car_2_36").css({"display": "none"});
							$("#car_2_"+player_2_position).css({"display": "block"});
							move_car_2[player_2_position] = player_2;
							move_car_2[6] = null;
							move_car_2[22] = null;
							move_car_2[35] = null;
							if (player_2_position == 10 || player_2_position == 0) 
							{
								
								svlis_gaiasneba();
							}
							else
							{
								if (player_2_action[player_2_position] != null) 
								{
									svlis_gaiasneba();
								}
								else
								{
									sale();
								};	
							}
							
						}
						
						if (telefoni[0].money_low > 0) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": telefoni[0].link_img });
							gadasaxdeli_tanxa_2 = telefoni[0].money_low;
							document.querySelector('.name_action_1').innerHTML = "telefoni";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2;
						}

						if (telefoni[0].money_bet > 0 && telefoni[0].move == 60) 
						{
							svlis_gaiasneba();
							player_2.money = player_2.money + telefoni[0].money_bet;
							svlis_gaiasneba();
						}
						
						

						document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;

						
					}

					if (player_2_position == 30) //ukusvla
					{
						move_car_2[player_2_position] = null;
						player_2_position = 10;
						$("#car_2_30").css({"display": "none"});
						$("#car_2_"+player_2_position).css({"display": "block"});
						move_car_2[player_2_position] = player_2;
						if (sound_helper == 0) 
						{
							police.play();
						}
					}

					if (player_2_position == 4 || player_2_position == 38) // benzini
					{
						if (player_2_position == 4) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": "url('monopoly_icon/petrol.png')" });
							gadasaxdeli_tanxa_2 = 3000;
							document.querySelector('.name_action_1').innerHTML = "benzini";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2;
						}

						if (player_2_position == 38) 
						{
							$(".Dice_movement").css({"display": "none"});
							$(".action_show").css({"display": "none"});
							$(".gadaxda_206").css({"display": "block"});
							$(".gadaxda_206").css({"background-image": "url('monopoly_icon/petrol.png')" });
							gadasaxdeli_tanxa_2 = 8000;
							document.querySelector('.name_action_1').innerHTML = "benzini";
							document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2;
						}
						if (sound_helper == 0) 
						{
							petrol.play();	
						}
					}

					if (player_2_position == 20) //nakrzali
					{
						svlis_gaiasneba();
					}

					if (player_2_position == 10) //sajarimo sadgomi
					{
						if (sound_helper == 0) 
						{
							police.play();
						}
						if (sajarimo_1 > 0) 
						{
							sajarimo_1 = 0;
							document.querySelector('#saj_1').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_1;
							$("#saj_1").css({"color": "green"});
						}
						sajarimo_2 = 3;
						document.querySelector('#saj_2').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_2;
						$("#saj_2").css({"color": "red"});
						svlis_gaiasneba();
					}

					if (player_2_position == 0) //gezi
					{
						
						svlis_gaiasneba();
					}
				}
				else
				{
					sale();
				}
					}
					
					}
					else
					{
						sajarimo_2--;
						document.querySelector('#saj_2').innerHTML = "gamosatovebeli gagorebebi " + sajarimo_2;
						if (sajarimo_2 == 0) 
						{
							$("#saj_2").css({"color": "green"});
						}
						svlis_gaiasneba();
					}
				}
				

			}
	
	}

	xx1();

}

function start_game(){
	player_1.name = document.getElementById("palyer_1_name").value; 
	player_2.name = document.getElementById("palyer_2_name").value; 

	if (player_1.name != 0 && player_1.icon != 0  && player_1.car_icon != 0 && player_2.name != 0 && player_2.icon != 0  && player_2.car_icon != 0) 
	{
		document.getElementById("ssa_1_2_1").innerHTML = player_1.name
		document.getElementById("ssa_1_2_2").innerHTML = player_2.name
		
		$("#top_2_1").css({"display": "block"});
		$("#top_2_2").css({"display": "none"});

		$(".car_player1_0").css({"background-image": player_1.car_icon});
		$(".car_player2_0").css({"background-image": player_2.car_icon});

		$(".car_player1_1").css({"background-image": player_1.car_icon});
		$(".car_player2_1").css({"background-image": player_2.car_icon});

		$(".car_player1_2").css({"background-image": player_1.car_icon});
		$(".car_player2_2").css({"background-image": player_2.car_icon});

		$(".car_player1_3").css({"background-image": player_1.car_icon});
		$(".car_player2_3").css({"background-image": player_2.car_icon});

		console.log(player_1.car_icon, player_2.car_icon);

		Dice_movement();

	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}

	//show_home_in_action();
}

function svlis_gaiasneba (){
	if (visi_svlaa == 1) 
	{
		if (kam_1_global == kam_2_global) 
		{
			visi_svlaa = 1;
			$("#kam_roll_1").css({"display": "block"});
		}
		else
		{
			visi_svlaa = 2;
			$("#kam_roll_2").css({"display": "block"});
			$("#kam_roll_1").css({"display": "none"});
		}
	}
	else
	{
		if (visi_svlaa == 2) 
		{
			if (kam_1_global == kam_2_global) 
			{
				visi_svlaa = 2;
				$("#kam_roll_2").css({"display": "block"});
			}
			else
			{
				visi_svlaa = 1;
				$("#kam_roll_2").css({"display": "none"});
				$("#kam_roll_1").css({"display": "block"});
				}
		}	
	}
}

function sale(){
	if (visi_svlaa == 1) 
	{
		/*
		if (sound_helper == 0) 
		{
			if (player_1_action[player_1_position-1].link_sound != null) 
			{
				sound_universal = player_1_action[player_1_position-1].link_sound;
				universal.play();
			}
		}
		*/
		if (player_1_action[player_1_position-1] == null) 
		{
			if (list_action[player_1_position-1] != null) // aqciasayidia
			{
				$(".action_show").css({"background-color": list_action[player_1_position-1].feri});
				
				for (var i = 1; i < 6; i++) {
					document.querySelector('.home_'+i+'_prise').innerHTML = i +" saxlis Rirebuleba" + list_action[player_1_position-1].patara_saxlis_fasi * i;
					document.querySelector('.home_'+i+'_pay').innerHTML = i +" saxlze gadasaxadi" + list_action[player_1_position-1].gadasaxi_saxlebze * i;
				}
				document.querySelector('.gadasaxdeli_carilerze').innerHTML = list_action[player_1_position-1].gadasaxi_carielze;
				document.querySelector('.yidvis_fasi').innerHTML = "yidvis fasi   " + list_action[player_1_position-1].fasi;
				document.querySelector('.name_action').innerHTML = list_action[player_1_position-1].name;
				document.querySelector('.gayidvis_fasi_fasi').innerHTML ="gayidvis fasi    " + list_action[player_1_position-1].gayidvis_fasi;
				$(".Dice_movement").css({"display": "none"});
				$(".action_show").css({"display": "block"});
				$(".action_show").css({"background-image": list_action[player_1_position-1].link_sur});
				if (sound_helper == 0) 
				{
					if (list_action[player_1_position-1].link_sound != null) 
					{
						var universal = new Audio(list_action[player_1_position-1].link_sound);
						universal.play();
						
					}
				}
			}
			else
			{
				document.querySelector('.name_action_4').innerHTML = player_2_action[player_1_position-1].gadasaxi_carielze;

				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 5) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_saxlebze * 5;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}
				
				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 4) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_saxlebze * 4;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}

				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 3) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_saxlebze * 3;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}

				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 2) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_saxlebze * 2;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}

				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 1) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_saxlebze * 1;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}

				if (player_2_action[player_1_position-1].saxlebis_raodenoba == 0) 
				{
					gadasaxdeli_tanxa_1 = player_2_action[player_1_position-1].gadasaxi_carielze;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_1
				}

				document.querySelector('.name_action_1').innerHTML = player_2_action[player_1_position-1].name;

				if (player_2_action[player_1_position-1].saxlebis_raodenoba > 0) 
				{
					document.querySelector('.name_action_3').innerHTML = player_2_action[player_1_position-1].saxlebis_raodenoba + "  saxlze";
				}

				

				$(".Dice_movement").css({"display": "none"});
				$(".action_show").css({"display": "none"});
				$(".gadaxda_206").css({"display": "block"});
				$(".gadaxda_206").css({"background-image": "url('monopoly_icon/pey.png')"});
				
				if (sound_helper == 0) 
				{
					if (player_2_action[player_1_position-1].link_sound != null) 
					{
						var universal = new Audio(player_2_action[player_1_position-1].link_sound);
						universal.play();
						
					}
				}
				
			}
		}
		else // chemi aqciaa
		{
			if (sound_helper == 0) 
				{
					if (player_1_action[player_1_position-1].link_sound != null) 
					{
						var universal = new Audio(player_1_action[player_1_position-1].link_sound);
						universal.play();
						
					}
				}
			svlis_gaiasneba();
		}
	}
	else
	{
		if (visi_svlaa == 2) 
		{
			if (player_2_action[player_2_position-1] == null) 
		{
			if (list_action[player_2_position-1] != null) // aqciasayidia
			{
				$(".action_show").css({"background-color": list_action[player_2_position-1].feri});
				
				for (var i = 1; i < 6; i++) {
					document.querySelector('.home_'+i+'_prise').innerHTML = i +" saxlis Rirebuleba" + list_action[player_2_position-1].patara_saxlis_fasi * i;
					document.querySelector('.home_'+i+'_pay').innerHTML = i +" saxlze gadasaxadi" + list_action[player_2_position-1].gadasaxi_saxlebze * i;
				}
				document.querySelector('.gadasaxdeli_carilerze').innerHTML = list_action[player_2_position-1].gadasaxi_carielze;
				document.querySelector('.yidvis_fasi').innerHTML = "yidvis fasi   " +  list_action[player_2_position-1].fasi;
				document.querySelector('.name_action').innerHTML = list_action[player_2_position-1].name;
				document.querySelector('.gayidvis_fasi_fasi').innerHTML = "gayidvis fasi   " +  list_action[player_2_position-1].gayidvis_fasi;
				$(".Dice_movement").css({"display": "none"});
				$(".action_show").css({"display": "block"});
				$(".action_show").css({"background-image": list_action[player_2_position-1].link_sur});

				if (sound_helper == 0) 
				{
					if (list_action[player_2_position-1].link_sound != null) 
				{
					var universal = new Audio(list_action[player_2_position-1].link_sound);
					universal.play();
					
				}
			}
			}
			else
			{

				document.querySelector('.name_action_4').innerHTML = player_1_action[player_2_position-1].gadasaxi_carielze;

				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 5) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_saxlebze * 5;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}
				
				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 4) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_saxlebze * 4;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}

				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 3) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_saxlebze * 3;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}

				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 2) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_saxlebze * 2;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}

				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 1) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_saxlebze * 1;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}

				if (player_1_action[player_2_position-1].saxlebis_raodenoba == 0) 
				{
					gadasaxdeli_tanxa_2 = player_1_action[player_2_position-1].gadasaxi_carielze;
					document.querySelector('.name_action_4').innerHTML = gadasaxdeli_tanxa_2
				}

				document.querySelector('.name_action_1').innerHTML = player_1_action[player_2_position-1].name;

				if (player_1_action[player_2_position-1].saxlebis_raodenoba > 0) 
				{
					document.querySelector('.name_action_3').innerHTML = player_1_action[player_2_position-1].saxlebis_raodenoba + "  saxlze";
				}

				

				$(".Dice_movement").css({"display": "none"});
				$(".action_show").css({"display": "none"});
				$(".gadaxda_206").css({"display": "block"});
				$(".gadaxda_206").css({"background-image": "url('monopoly_icon/pey.png')"});

				if (sound_helper == 0) 
				{
					if (player_1_action[player_2_position-1].link_sound != null) 
					{
						var universal = new Audio(player_2_action[player_1_position-1].link_sound);
						universal.play();
						
					}
				}
			}
		}
		else
		{
			if (sound_helper == 0) 
				{
					if (player_2_action[player_2_position-1].link_sound != null) 
					{
						var universal = new Audio(player_2_action[player_2_position-1].link_sound);
						universal.play();
						
					}
				}
			svlis_gaiasneba();
		}
	}
		}
	}

function gagrzeleba (){
	$(".Dice_movement").css({"display": "block"});
	$(".action_show").css({"display": "none"});

	svlis_gaiasneba();
}


function gadaxda(){
	if (visi_svlaa == 1) 
	{
		if (player_1_position != 2 && player_1_position != 4 && player_1_position != 7 && player_1_position != 17 && player_1_position != 22 && player_1_position != 33 && player_1_position != 36 && player_1_position != 38) 
		{
			if (player_1.money >= gadasaxdeli_tanxa_1) 
			{
			player_1.money = player_1.money - gadasaxdeli_tanxa_1;
			player_2.money = player_2.money + gadasaxdeli_tanxa_1;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
			document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
			gadasaxdeli_tanxa_1 = 0;
			svlis_gaiasneba();
			$(".Dice_movement").css({"display": "block"});
			$(".action_show").css({"display": "none"});
			$(".gadaxda_206").css({"display": "none"});
			if (sound_helper == 0) 
			{
				money_pay.play();
			}
			}
			else
			{
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			
			}
		}
		else
		{
			if (player_1.money >= gadasaxdeli_tanxa_1) 
			{
			player_1.money = player_1.money - gadasaxdeli_tanxa_1;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
			gadasaxdeli_tanxa_1 = 0;
			svlis_gaiasneba();
			$(".Dice_movement").css({"display": "block"});
			$(".action_show").css({"display": "none"});
			$(".gadaxda_206").css({"display": "none"});
			if (sound_helper == 0) 
			{
				money_pay.play();
			}
			}
			else
			{
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
		
	}
	else
	{
		if (visi_svlaa == 2) 
		{
			if (player_2_position != 2 && player_2_position != 4 && player_2_position != 7 && player_2_position != 17 && player_2_position != 22 && player_2_position != 33 && player_2_position != 36 && player_2_position != 38) 
		{
			if (player_2.money >= gadasaxdeli_tanxa_2) 
			{
			player_1.money = player_1.money + gadasaxdeli_tanxa_2;
			player_2.money = player_2.money - gadasaxdeli_tanxa_2;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
			document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
			gadasaxdeli_tanxa_2 = 0;
			svlis_gaiasneba();
			$(".Dice_movement").css({"display": "block"});
			$(".action_show").css({"display": "none"});
			$(".gadaxda_206").css({"display": "none"});
			if (sound_helper == 0) 
			{
				money_pay.play();
			}
			}
			else
			{
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
		else
		{
			if (player_2.money >= gadasaxdeli_tanxa_2) 
			{
			player_2.money = player_2.money - gadasaxdeli_tanxa_2;
			document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
			gadasaxdeli_tanxa_2 = 0;
			svlis_gaiasneba();
			$(".Dice_movement").css({"display": "block"});
			$(".action_show").css({"display": "none"});
			$(".gadaxda_206").css({"display": "none"});
			if (sound_helper == 0) 
			{
				money_pay.play();
			}
			}
			else
			{
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
	}

	}
}

function bey(){
	var local_helper_1 = 0;
	if (visi_svlaa == 1) 
	{
		if (player_1.money >= list_action[player_1_position-1].fasi) 
		{
			player_1_action[player_1_position-1] = list_action[player_1_position-1];
			player_1.money = player_1.money - list_action[player_1_position-1].fasi;
			list_action[player_1_position-1] = null;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;

			for (var i = 0; i < 40; i++) {
				if (player_1_action[i] != null) 
				{
					if (player_1_action[i].feris_id == player_1_action[player_1_position-1].feris_id) 
					{
						local_helper_1++;
					}
				}
			}
			if (player_1_action[player_1_position-1].aqciis_raodenoba == local_helper_1) 
			{
				for (var i = 0; i < 40; i++) {
					if (player_1_action[i] != null) 
				{
					if (player_1_action[i].feris_id == player_1_action[player_1_position-1].feris_id) 
					{
						player_1_action[i].saxlis_dadgma = 1;
						
					}
				}
			}
			}

			$(".Dice_movement").css({"display": "block"});
			$(".action_show").css({"display": "none"});
			show_action_left_player1();
			svlis_gaiasneba();
			if (sound_helper == 0) 
			{
				money_pay.play();
			}
		}
		else
		{
			if (sound_helper == 0) 
				{
					error_sound.play();
				}
		}	


	}
	else
	{
		if (visi_svlaa == 2) 
		{
			if (player_2.money >= list_action[player_2_position-1].fasi) 
			{
				player_2_action[player_2_position-1] = list_action[player_2_position-1];
				player_2.money = player_2.money - list_action[player_2_position-1].fasi;
				list_action[player_2_position-1] = null;
				document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;

				for (var i = 0; i < 40; i++) {
				if (player_2_action[i] != null) 
				{
					if (player_2_action[i].feris_id == player_2_action[player_2_position-1].feris_id) 
					{
						local_helper_1++;
					}
				}
				}
				if (player_2_action[player_2_position-1].aqciis_raodenoba == local_helper_1) 
				{
				for (var i = 0; i < 40; i++) {
					if (player_2_action[i] != null) 
				{
					if (player_2_action[i].feris_id == player_2_action[player_2_position-1].feris_id) 
					{
						player_2_action[i].saxlis_dadgma = 1;
						
					}
				}
			}
				}

				$(".Dice_movement").css({"display": "block"});
				$(".action_show").css({"display": "none"});
				show_action_left_player2();
				svlis_gaiasneba();
				if (sound_helper == 0) 
				{
					money_pay.play();
				}
			}
			else
			{
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
	}
}

function show_action_left_player1(){
	for (var i = 0; i < 40; i++) {
		if (player_1_action[i] != null) 
		{
			$("#pl_1_action_"+(i+1)).css({"background-color": player_1_action[i].feri});
			document.querySelector('#pl_1_action_'+(i+1)).innerHTML = player_1_action[i].name;
		}
	}
}

function show_action_left_player2(){
	for (var i = 0; i < 40; i++) {
		if (player_2_action[i] != null) 
		{
			$("#pl_2_action_"+(i+1)).css({"background-color": player_2_action[i].feri});
			document.querySelector('#pl_2_action_'+(i+1)).innerHTML = player_2_action[i].name;
		}
		else
		{
			$("#pl_2_action_"+(i+1)).css({"background-color": "#0c20278c"});
			
		}
	}
}


function show_home_in_action(){
	for (var i = 0; i < 40; i++) {
		if (list_action_show_home[i] != null) 
		{
			for (var b = 1; b < 6; b++) {
				if (list_action_show_home[i].saxlebis_raodenoba == b) { $("#small_"+(i+1)).css({"display": "block"}); $("#small_childe_"+(i+1)+"_"+b).css({"display": "block"}); }
				if (list_action_show_home[i].saxlebis_raodenoba == 5) 
				{
					$("#small_"+(i+1)).css({"display": "none"});
					//$("#small_childe_"+(i+1)+"_"+b).css({"display": "block"});
				}
				else
				{
					if (list_action_show_home[i].saxlebis_raodenoba >=b) { $("#small_"+(i+1)).css({"display": "block"}); $("#small_childe_"+(i+1)+"_"+b).css({"display": "block"});}
				}
				
			}
		}
	}
}

function icon_1_pl_1(){
	player_1.icon = "pic/icon_imj/1.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/1.png')"});
}

function icon_1_pl_2(){
	player_1.icon = "pic/icon_imj/2.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/2.png')"});
}

function icon_1_pl_3(){
	player_1.icon = "pic/icon_imj/3.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/3.png')"});
}

function icon_1_pl_4(){
	player_1.icon = "pic/icon_imj/4.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/4.png')"});
}

function icon_1_pl_5(){
	player_1.icon = "pic/icon_imj/5.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/5.png')"});
}

function icon_1_pl_6(){
	player_1.icon = "pic/icon_imj/6.png";
	$("#ssa_1_1_pl1").css({"background-image": "url('pic/icon_imj/6.png')"});
}

function icon_2_pl_1(){
	player_2.icon = "pic/icon_imj/1.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/1.png')"});
}

function icon_2_pl_2(){
	player_2.icon = "pic/icon_imj/2.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/2.png')"});
}

function icon_2_pl_3(){
	player_2.icon = "pic/icon_imj/3.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/3.png')"});
}

function icon_2_pl_4(){
	player_2.icon = "pic/icon_imj/4.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/4.png')"});
}

function icon_2_pl_5(){
	player_2.icon = "pic/icon_imj/5.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/5.png')"});
}

function icon_2_pl_6(){
	player_2.icon = "pic/icon_imj/6.png";
	$("#ssa_1_1_pl2").css({"background-image": "url('pic/icon_imj/1.png')"});
}

function car_chose_1(){
	player_1.car_icon = "url('pic/car2.png')";
	$("#ssa_2_1").css({"background-image": "url('pic/car2.png')"});
}

function car_chose_2(){
	player_1.car_icon = "url('pic/mer.png')";
	$("#ssa_2_1").css({"background-image": "url('pic/mer.png')"});
}

function car_chose_3(){
	player_2.car_icon = "url('pic/car2.png')";
	$("#ssa_2_2").css({"background-image": "url('pic/car2.png')"});
}

function car_chose_4(){
	player_2.car_icon = "url('pic/mer.png')";
	$("#ssa_2_2").css({"background-image": "url('pic/mer.png')"});
}

function vachroba_show(){
	$("#top_2_3").css({"display": "block"});
	for (var i = 0; i < 40; i++) {
		if (player_1_action[i] != null) 
		{
			$("#pl_1_action_"+(i+1)+"_gayidva").css({"background-color": player_1_action[i].feri});
			document.querySelector('#pl_1_action_'+(i+1)+'_gayidva').innerHTML = player_1_action[i].name;
		}
	}
}

function vachroba_show_2(){
	$("#top_2_4").css({"display": "block"});
	for (var i = 0; i < 40; i++) {
		if (player_2_action[i] != null) 
		{
			$("#pl_2_action_"+(i+1)+"_gayidva").css({"background-color": player_2_action[i].feri});
			document.querySelector('#pl_2_action_'+(i+1)+'_gayidva').innerHTML = player_2_action[i].name;
		}
	}
}

$( ".close_top_2_3" ).click(function() {
	$("#top_2_3").css({"display": "none"});
	gasayidi_action_1[0] = null;

	document.querySelector('#pl_1_gayidva').innerHTML = "";
	$('#pl_1_gayidva').css({"background-color": "#0c20278c"});

	show_home_in_action();
});

$( ".close_top_2_4" ).click(function() {
	$("#top_2_4").css({"display": "none"});
	$("#top_2_3").css({"display": "none"});
	show_home_in_action();
});


$( ".button_pl_1_gayidva" ).click(function() {
	if (gasayidi_action_1[0] != null) 
	{
		player_1_action[gasayidi_action_1[0].namber_action].saxlis_dadgma = 0;
		list_action[gasayidi_action_1[0].namber_action] = gasayidi_action_1[0];
		player_1.money = player_1.money + gasayidi_action_1[0].gayidvis_fasi;
		document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
		document.querySelector('#pl_1_action_'+(gasayidi_action_1[0].namber_action + 1)).innerHTML = "";
		$("#pl_1_action_"+(gasayidi_action_1[0].namber_action + 1)).css({"background-color": "#0c20278c"});
		document.querySelector('#pl_1_action_'+(gasayidi_action_1[0].namber_action + 1)+'_gayidva').innerHTML = "";
		$('#pl_1_action_'+(gasayidi_action_1[0].namber_action + 1)+'_gayidva').css({"background-color": "#0c20278c"});
		$('.text_pl_1_gayidva').css({"display": "none"});
		document.querySelector('#pl_1_gayidva').innerHTML = "";
		$('#pl_1_gayidva').css({"background-color": "#0c20278c"});

		for (var i = 0; i < 40; i++) {
					if (player_1_action[i] != null) 
				{
					if (player_1_action[i].feris_id == player_1_action[gasayidi_action_1[0].namber_action].feris_id) 
					{
						player_1_action[i].saxlis_dadgma = 0;
						console.log(" aq shesazlebelia saxlis dadgma", player_1_action[i].saxlis_dadgma);
					}
				}
			}

		player_1_action[gasayidi_action_1[0].namber_action] = null;
		gasayidi_action_1[0] = null;
		show_action_left_player1();
		vachroba_show();

	}	
});

$( "#button_pl_2_gayidva" ).click(function() {
	if (gasayidi_action_2[0] != null) 
	{
		player_2_action[gasayidi_action_2[0].namber_action].saxlis_dadgma = 0; // სახლს ვერ დადგამს
		list_action[gasayidi_action_2[0].namber_action] = gasayidi_action_2[0]; // დაემატა დილერის ლისტში
		player_2.money = player_2.money + gasayidi_action_2[0].gayidvis_fasi;
		document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
		document.querySelector('#pl_2_action_'+(gasayidi_action_2[0].namber_action + 1)).innerHTML = "";
		$("#pl_2_action_"+(gasayidi_action_2[0].namber_action + 1)).css({"background-color": "#0c20278c"});
		document.querySelector('#pl_2_action_'+(gasayidi_action_2[0].namber_action + 1)+'_gayidva').innerHTML = "";
		$('#pl_2_action_'+(gasayidi_action_2[0].namber_action + 1)+'_gayidva').css({"background-color": "#0c20278c"});
		$('.text_pl_2_gayidva').css({"display": "none"});
		document.querySelector('#pl_2_gayidva').innerHTML = "";
		$('#pl_2_gayidva').css({"background-color": "#0c20278c"});

		for (var i = 0; i < 40; i++) {
					if (player_2_action[i] != null) 
				{
					if (player_2_action[i].aqciis_raodenoba == player_2_action[gasayidi_action_2[0].namber_action].aqciis_raodenoba) 
					{
						player_2_action[i].saxlis_dadgma = 0;
						console.log(player_2_action[i].saxlis_dadgma);
					}
				}
			}

		player_2_action[gasayidi_action_2[0].namber_action] = null;
		gasayidi_action_2[0] = null;
		show_action_left_player2();
		vachroba_show();
	}	
});

function main_sale_test_1(){
	if (activ_chose_1 ==1) 
	{
		if (player_1_action[sale_1] != null) 
		{
			gasayidi_action_1[0] = player_1_action[sale_1];
			$("#pl_1_gayidva").css({"background-color": gasayidi_action_1[0].feri});
			document.querySelector('#pl_1_gayidva').innerHTML = gasayidi_action_1[0].name;
			document.querySelector('.text_pl_1_gayidva').innerHTML = "gasayidi fasi   "+gasayidi_action_1[0].gayidvis_fasi;
			$('.text_pl_1_gayidva').css({"display": "block"});
		}
		
	}
	if (activ_chose_1 == 2) 
	{
		if (player_1_action[sale_1] != null) 
		{
			home_action_1[0] = player_1_action[sale_1];
			$("#pl_1_saxlis_yidva").css({"background-color": home_action_1[0].feri});
			document.querySelector('#pl_1_saxlis_yidva').innerHTML = home_action_1[0].name;
			for (var i = 0; i < 6; i++) {
				$("#small_1_"+i).css({"display": "none"});
			}
			for (var i = 1; i < 6; i++) {
				if (home_action_1[0].saxlebis_raodenoba >= i) 
				{
					$("#small_1_"+i).css({"display": "inline-block"});
				}
			}
		}
	}
	yidva_1 = 0;
	gayidva_1 = 0;
}

$( "#button_plius_1" ).click(function() {
	if (home_action_1[0] != null && home_action_1[0].saxlis_dadgma == 1) 
	{
		yidva_1++;
		if ((home_action_1[0].saxlebis_raodenoba + yidva_1) < 6) 
		{
			$("#small_1_"+ (home_action_1[0].saxlebis_raodenoba + yidva_1)).css({"display": "inline-block"});
			document.querySelector('#text_4_1').innerHTML = "yidvis fasi   " + home_action_1[0].patara_saxlis_fasi * yidva_1
		}
		else
		{
			yidva_1--;
			if (sound_helper == 0) 
			{
				error_sound.play();
			}
			console.log(home_action_1[0] )
		}
	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}
	
});


$( "#button_minus_1" ).click(function() {
	if (home_action_1[0] != null) 
	{
		if (yidva_1 > 0) 
		{
			
			$("#small_1_"+ (home_action_1[0].saxlebis_raodenoba + yidva_1)).css({"display": "none"});
			yidva_1--;
			document.querySelector('#text_4_1').innerHTML = "yidvis fasi   " + home_action_1[0].patara_saxlis_fasi * yidva_1
			
		}
		else
		{
			gayidva_1++;
			if ((home_action_1[0].saxlebis_raodenoba - gayidva_1) >= 0) 
			{
				$("#small_1_"+ (home_action_1[0].saxlebis_raodenoba - gayidva_1)).css({"display": "none"});
				document.querySelector('#text_4_1').innerHTML = "gayidvis fasi   " + home_action_1[0].patara_saxlis_fasi * gayidva_1;
				home_action_1[0].saxlebis_raodenoba = home_action_1[0].saxlebis_raodenoba - gayidva_1;
			}
			else
			{
				gayidva_1--;
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
		console.log("yidva_1", yidva_1, "gayidva_1", gayidva_1);
	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}
	
});

$( "#bey_1" ).click(function() {
	if (home_action_1[0] != null) 
	{
		if (yidva_1 > 0 && home_action_1[0].saxlis_dadgma == 1 && player_1.money >= (home_action_1[0].patara_saxlis_fasi*yidva_1)) 
		{
			home_action_1[0].saxlebis_raodenoba = home_action_1[0].saxlebis_raodenoba + yidva_1;
			player_1.money = player_1.money - home_action_1[0].patara_saxlis_fasi * yidva_1;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
			yidva_1 = 0;
			gayidva_1 = 0;
			show_home_in_action();
		}
	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}
});

$( "#off_bey_1" ).click(function() {
	if (home_action_1[0] != null) 
	{
		if (gayidva_1 > 0 && home_action_1[0].saxlis_dadgma == 1) 
		{
			home_action_1[0].saxlebis_raodenoba = home_action_1[0].saxlebis_raodenoba - gayidva_1;
			player_1.money = player_1.money + home_action_1[0].patara_saxlis_fasi * gayidva_1;
			document.querySelector('#ssa_1_3_1').innerHTML = player_1.money;
			yidva_1 = 0;
			gayidva_1 = 0;
			show_home_in_action();
		}
	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}
});

$( "#pl_1_action_1_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_1_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_3_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_3_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_5_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_5_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_6_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_6_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_8_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_8_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_9_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_9_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_11_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_11_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_12_gayidva" ).click(function() { // vercxlis quca
	sale_1 = parseInt($( "#pl_1_action_12_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_13_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_13_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_14_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_14_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_15_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_15_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_16_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_16_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_18_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_18_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_19_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_19_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_21_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_21_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_23_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_23_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_24_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_24_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_25_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_25_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_26_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_26_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_27_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_27_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_28_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_28_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_29_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_29_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_31_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_31_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_32_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_32_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_34_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_34_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_35_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_35_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_37_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_37_gayidva" ).data( "name" ))
	main_sale_test_1();
});

$( "#pl_1_action_39_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_1_action_39_gayidva" ).data( "name" ))
	main_sale_test_1();
});

function main_sale_test_2(){
	if (activ_chose_2 == 1) 
	{
		if (player_2_action[sale_1] != null) 
		{
			gasayidi_action_2[0] = player_2_action[sale_1];
			$("#pl_2_gayidva").css({"background-color": gasayidi_action_2[0].feri});
			document.querySelector('#pl_2_gayidva').innerHTML = gasayidi_action_2[0].name;
			document.querySelector('#text_pl_2_gayidva').innerHTML = "gasayidi fasi   "+gasayidi_action_2[0].gayidvis_fasi;
			$('.text_pl_2_gayidva').css({"display": "block"});
			
		}
	}
	if (activ_chose_2 == 2) 
	{
		if (player_2_action[sale_1] != null) 
		{
			home_action_2[0] = player_2_action[sale_1];
			$("#pl_2_saxlis_yidva").css({"background-color": home_action_2[0].feri});
			document.querySelector('#pl_2_saxlis_yidva').innerHTML = home_action_2[0].name;
			for (var i = 0; i < 6; i++) {
				$("#small_2_"+i).css({"display": "none"});
			}
			for (var i = 1; i < 6; i++) {
				if (home_action_2[0].saxlebis_raodenoba >= i) 
				{
					$("#small_2_"+i).css({"display": "inline-block"});
					
				}
			}
		}
	}
	yidva_2 = 0;
	gayidva_2 = 0;
}

$( "#button_plius_2" ).click(function() {
	if (home_action_2[0] != null && home_action_2[0].saxlis_dadgma == 1) 
	{
		yidva_2++;
		if ((home_action_2[0].saxlebis_raodenoba + yidva_2) < 6) 
		{
			$("#small_2_"+ (home_action_2[0].saxlebis_raodenoba + yidva_2)).css({"display": "inline-block"});
			document.querySelector('#text_4_2').innerHTML = "yidvis fasi   " + home_action_2[0].patara_saxlis_fasi * yidva_2
		}
		else
		{
			yidva_2--;
			if (sound_helper == 0) 
			{
				error_sound.play();
			}
			
		}
	}
	else
	{
		if (sound_helper == 0) 
		{
			error_sound.play();
		}
	}
	
});

$( "#button_minus_2" ).click(function() {
	if (home_action_2[0] != null) 
	{
		if (yidva_2 > 0) 
		{
			
			$("#small_2_"+ (home_action_2[0].saxlebis_raodenoba + yidva_2)).css({"display": "none"});
			yidva_2--;
			document.querySelector('#text_4_2').innerHTML = "yidvis fasi   " + home_action_2[0].patara_saxlis_fasi * yidva_2
			
		}
		else
		{
			gayidva_2++;
			if ((home_action_2[0].saxlebis_raodenoba - gayidva_2) >= 0) 
			{
				$("#small_2_"+ (home_action_2[0].saxlebis_raodenoba - gayidva_2)).css({"display": "none"});
				document.querySelector('#text_4_2').innerHTML = "gayidvis fasi   " + home_action_2[0].patara_saxlis_fasi * gayidva_2;
				home_action_2[0].saxlebis_raodenoba = home_action_2[0].saxlebis_raodenoba - gayidva_2;
			}
			else
			{
				gayidva_2--;
				if (sound_helper == 0) 
				{
					error_sound.play();
				}
			}
		}
		console.log("yidva_2", yidva_1, "gayidva_2", gayidva_2);
	}
	else
	{
		if (sound_helper == 0) 
				{
					error_sound.play();
				}
	}
	
});

$( "#bey_2" ).click(function() {
	if (home_action_2[0] != null) 
	{
		if (yidva_2 > 0 && home_action_2[0].saxlis_dadgma == 1 && player_2.money >= (home_action_2[0].patara_saxlis_fasi*yidva_2)) 
		{
			home_action_2[0].saxlebis_raodenoba = home_action_2[0].saxlebis_raodenoba + yidva_2;
			player_2.money = player_2.money - home_action_2[0].patara_saxlis_fasi * yidva_2;
			document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
			yidva_2 = 0;
			gayidva_2 = 0;
			show_home_in_action();
		}
	}
	else
	{
		if (sound_helper == 0) 
				{
					error_sound.play();
				}
	}
});

$( "#off_bey_2" ).click(function() {
	if (home_action_2[0] != null) 
	{
		if (gayidva_2 > 0 && home_action_2[0].saxlis_dadgma == 1) 
		{
			home_action_2[0].saxlebis_raodenoba = home_action_2[0].saxlebis_raodenoba - gayidva_2;
			player_2.money = player_2.money + home_action_2[0].patara_saxlis_fasi * gayidva_2;
			document.querySelector('#ssa_1_3_2').innerHTML = player_2.money;
			yidva_2 = 0;
			gayidva_2 = 0;
			show_home_in_action();
		}
	}
	else
	{
		if (sound_helper == 0) 
				{
					error_sound.play();
				}
	}
});

$( "#pl_2_action_1_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_1_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_3_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_3_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_5_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_5_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_6_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_6_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_8_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_8_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_9_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_9_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_11_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_11_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_12_gayidva" ).click(function() { // vercxlis quca
	sale_1 = parseInt($( "#pl_2_action_12_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_13_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_13_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_14_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_14_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_15_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_15_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_16_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_16_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_18_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_18_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_19_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_19_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_21_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_21_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_23_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_23_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_24_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_24_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_25_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_25_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_26_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_26_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_27_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_27_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_28_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_28_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_29_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_29_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_31_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_31_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_32_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_32_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_34_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_34_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_35_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_35_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_37_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_37_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#pl_2_action_39_gayidva" ).click(function() {
	sale_1 = parseInt($( "#pl_2_action_39_gayidva" ).data( "name" ))
	main_sale_test_2();
});

$( "#numero_1_1" ).click(function() {
	activ_chose_1 = 1;
	$('#numero_1_1').css({"background-color": "#7ba972"});
	$('#numero_2_1').css({"background-color": "#899e85"});
});

$( "#numero_2_1" ).click(function() {
	activ_chose_1 = 2;
	$('#numero_1_1').css({"background-color": "#899e85"});
	$('#numero_2_1').css({"background-color": "#7ba972"});
});

$( "#numero_1_2" ).click(function() {
	activ_chose_2 = 1;
	$('#numero_1_2').css({"background-color": "#7ba972"});
	$('#numero_2_2').css({"background-color": "#899e85"});
});

$( "#numero_2_2" ).click(function() {
	activ_chose_2 = 2;
	$('#numero_1_2').css({"background-color": "#899e85"});
	$('#numero_2_2').css({"background-color": "#7ba972"});
});

$( ".sound_137" ).click(function() {
	if (sound_helper == 0) {
		bg_sound.pause(); 
		sound_helper++;
		$( ".sound_137" ).css({ "background-image" : "url('pic/speaker-volume_off.png')"})
	}
	else
	{
		if (sound_helper == 1) 
		{
			bg_sound.play(); 
			sound_helper = 0;
			$( ".sound_137" ).css({ "background-image" : "url('pic/speaker-volume_on.png') "})
		}
	}

	
});

document.querySelector('#kam_roll_1').onclick = Dice_movement
document.querySelector('#kam_roll_2').onclick = Dice_movement
document.querySelector('.start_game').onclick = start_game

document.querySelector('.botton_gavla').onclick = gagrzeleba
document.querySelector('.botton_yidva').onclick = bey

document.querySelector('.name_action_6').onclick = gadaxda

document.querySelector('#bisunes_1').onclick = vachroba_show
document.querySelector('#bisunes_2').onclick = vachroba_show_2

document.querySelector('#player_st_1_1').onclick = icon_1_pl_1
document.querySelector('#player_st_1_2').onclick = icon_1_pl_2
document.querySelector('#player_st_1_3').onclick = icon_1_pl_3
document.querySelector('#player_st_1_4').onclick = icon_1_pl_4
document.querySelector('#player_st_1_5').onclick = icon_1_pl_5
document.querySelector('#player_st_1_6').onclick = icon_1_pl_6

document.querySelector('#player_st_2_1').onclick = icon_2_pl_1
document.querySelector('#player_st_2_2').onclick = icon_2_pl_2
document.querySelector('#player_st_2_3').onclick = icon_2_pl_3
document.querySelector('#player_st_2_4').onclick = icon_2_pl_4
document.querySelector('#player_st_2_5').onclick = icon_2_pl_5
document.querySelector('#player_st_2_6').onclick = icon_2_pl_6

document.querySelector('#chose_car_1_1').onclick = car_chose_1
document.querySelector('#chose_car_1_2').onclick = car_chose_2
document.querySelector('#chose_car_2_1').onclick = car_chose_3
document.querySelector('#chose_car_2_2').onclick = car_chose_4
