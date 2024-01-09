export type UserInformation = {
	firstName: string;
	lastName: string;
	email: string;
	city: string;
	phone: string;
};
export type State = {
	firstNameInput: string;
	lastNameInput: string;
	emailInput: string;
	cityInput: string;
	phoneInput: [string, string, string, string];
};
export type FormType = {
	firstNameInput: string;
	setFirstNameInput: (name: string) => void;
	lastNameInput: string;
	setLastNameInput: (lastName: string) => void;
	emailInput: string;
	setEmailInput: (email: string) => void;
	cityInput: string;
	setCityInput: (city: string) => void;
	phoneInput: [string, string, string, string];
	setPhoneInput: (phone: [string, string, string, string]) => void;
};
