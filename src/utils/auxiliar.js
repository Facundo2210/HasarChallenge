import aries from '../images/boton_aries.png';
import acuario from '../images/boton_acuario.png';
import cancer from '../images/boton_cancer.png';
import capricornio from '../images/boton_capricornio.png';
import escorpio from '../images/boton_escorpio.png';
import geminis from '../images/boton_geminis.png';
import leo from '../images/boton_leo.png';
import libra from '../images/boton_libra.png';
import piscis from '../images/boton_piscis.png';
import sagitario from '../images/boton_sagitario.png';
import tauro from '../images/boton_tauro.png';
import virgo from '../images/boton_virgo.png';

export const userBirthday = (mount, day) => {
	let today = new Date();
	let bday = new Date(today.getFullYear(), mount - 1, day);
	if (today.getTime() > bday.getTime()) {
		bday.setFullYear(bday.getFullYear() + 1);
	}
	let mls = bday.getTime() - today.getTime();
	let results = Math.floor(mls / (1000 * 60 * 60 * 24));
	return results;
};

export const matchHoroscope = (mount, day) => {
	const mount2 = parseInt(mount) * 31;
	const suma = mount2 + parseInt(day);
	if (suma >= 52 && suma <= 81) {
		return {name: 'acuario', img: acuario};
	} else if (suma >= 82 && suma <= 113) {
		return {name: 'piscis', img: piscis};
	} else if (suma >= 114 && suma <= 144) {
		return {name: 'aries', img: aries};
	} else if (suma >= 145 && suma <= 176) {
		return {name: 'tauro', img: tauro};
	} else if (suma >= 177 && suma <= 207) {
		return {name: 'geminis', img: geminis};
	} else if (suma >= 208 && suma <= 239) {
		return {name: 'cancer', img: cancer};
	} else if (suma >= 240 && suma <= 270) {
		return {name: 'leo', img: leo};
	} else if (suma >= 271 && suma <= 302) {
		return {name: 'virgo', img: virgo};
	} else if (suma >= 303 && suma <= 333) {
		return {name: 'libra', img: libra};
	} else if (suma >= 334 && suma <= 363) {
		return {name: 'escorpio', img: escorpio};
	} else if (suma >= 364 && suma <= 393) {
		return {name: 'sagitario', img: sagitario};
	} else return {name: 'capricornio', img: capricornio};
};
