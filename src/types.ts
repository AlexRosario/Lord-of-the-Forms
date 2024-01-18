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

export interface FormProps {
	handleUserData: (userData: UserInformation) => void;
}
