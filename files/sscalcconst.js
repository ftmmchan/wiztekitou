$('#tikutxt').addClass('invisible');
$('#joutxt').addClass('invisible');
$('#jou2txt').addClass('invisible');
$('#kautxt').addClass('invisible');
$('#dantxt').addClass('invisible');
$('#kaujtxt').addClass('invisible');
$('#seitxt').addClass('invisible');
$('#tanseitxt').addClass('invisible');
$('#yuuseitxt').addClass('invisible');
$('#hanseitxt').addClass('invisible');
$('#touseitxt').addClass('invisible');
$('#skitxt').addClass('invisible');
$('#jikantxt').addClass('invisible');
$('#baitxt').addClass('invisible');
$('#chjtxt').addClass('invisible');
$('#panehitxt').addClass('invisible');
$('#panemizutxt').addClass('invisible');
$('#panekamitxt').addClass('invisible');
$('#panehikatxt').addClass('invisible');
$('#paneyamitxt').addClass('invisible');
$('#dametxt').addClass('invisible');
$('#panedame').addClass('invisible');
$('#chjoutxt').addClass('invisible');
$('#chsyoutxt').addClass('invisible');
$('#seikaitxt').addClass('invisible');
$('#mudame').addClass('invisible');
$('#joustxt').addClass('invisible');
$('#skimtxt').addClass('invisible');
$('#baimtxt').addClass('invisible');
$('#kaisuutxt').addClass('invisible');
$('#damaavgtxt').addClass('invisible');
$('#damaavgtxt2').addClass('invisible');
$('#cs2txt').addClass('invisible');
$('#damagef').addClass('invisible');
$('#mzokusei2').addClass('invisible');

$("#ss_type").change(function() {
var ss = Number($('#ss_type').val());
switch (Number(ss)) {
	case 1: //大魔術
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#mptxt').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 2: //特効・残滅大魔術・カウンター
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 3: //多弾魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 4: //斬撃大魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 5: //蓄積%
		$('#mptxt').hide();
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').show();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').show();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 6: //カウント
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').show();
		$('#dantxt').hide();
		$('#kaujtxt').show();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 7: //時限大魔術
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 8: //反転解除
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').show();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 9: //詠唱
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').show();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').show();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 10: //反動蝕・犠牲
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').show();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#hanseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 11: //純属性
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').show();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 12: //融合
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').show();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 13: //統一
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').show();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').show();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').show();
		$('#damagef').show();
	break;
	case 14: //連鎖解放
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').show();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 15: //激化 エンハの乗り方が特殊っぽい
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').show();
		$('#jikantxt').hide();
		$('#baitxt').show();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	case 16: //急襲 多分激化の逆
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').show();
		$('#baimtxt').show();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 17: //パネル爆破 
		$('#mzokusei').hide();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').show();
		$('#panemizutxt').show();
		$('#panekamitxt').show();
		$('#panehikatxt').show();
		$('#paneyamitxt').show();
		$('#dametxt').hide();
		$('#panedame').show();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 18:  //撃滅連弾
		$('#mzokusei').show();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').show();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').show();
		$('#chsyoutxt').show();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 19: //天穹大魔術
		$('#mzokusei').hide();
		$('#mzokusei2').hide();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').show();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').show();
		$('#mudame').show();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').hide();
	break;
	case 20: //詠唱多弾大魔術
		$('#mptxt').show();
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#skimtxt').hide();
		$('#baimtxt').hide();
		$('#kaisuutxt').show();
		$('#damaavgtxt').show();
		$('#damaavgtxt2').show();
		$('#cs2txt').hide();
		$('#damagef').show();
	break;
	default: //大魔術 基本的なやつ
		$('#mzokusei').show();
		$('#mzokusei2').show();
		$('#tikutxt').hide();
		$('#joutxt').hide();
		$('#jou2txt').hide();
		$('#kautxt').hide();
		$('#dantxt').hide();
		$('#kaujtxt').hide();
		$('#seitxt').hide();
		$('#hanseitxt').hide();
		$('#tanseitxt').hide();
		$('#yuuseitxt').hide();
		$('#touseitxt').hide();
		$('#skitxt').hide();
		$('#jikantxt').hide();
		$('#baitxt').hide();
		$('#baimtxt').hide();
		$('#skimtxt').hide();
		$('#chjtxt').hide();
		$('#panehitxt').hide();
		$('#panemizutxt').hide();
		$('#panekamitxt').hide();
		$('#panehikatxt').hide();
		$('#paneyamitxt').hide();
		$('#dametxt').hide();
		$('#panedame').hide();
		$('#chjoutxt').hide();
		$('#chsyoutxt').hide();
		$('#seikaitxt').hide();
		$('#mudame').hide();
		$('#joustxt').hide();
		$('#mptxt').show();
		$('#kaisuutxt').hide();
		$('#damaavgtxt').hide();
		$('#damaavgtxt2').hide();
		$('#cs2txt').hide();
		$('#damagef').show();
}
});

