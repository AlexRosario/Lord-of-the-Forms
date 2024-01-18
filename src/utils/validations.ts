import { allCities } from "../utils/all-cities";

export function isEmailValid(emailAddress: string) {
	// eslint-disable-next-line no-useless-escape
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return !!emailAddress.match(regex);
}

export function isPhoneValid(phoneInput: [string, string, string, string]) {
	return !!(phoneInput.join("").length === 7);
}

export function isNameValid(name: string) {
	const regex = /^[a-zA-Z]+$/;
	return !!(name.match(regex) && name.length >= 2);
}

export function isCityValid(cityInput: string) {
	return !!allCities.find(
		(city) => city.toUpperCase() === cityInput.toUpperCase()
	);
}
