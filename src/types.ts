export type UserInformation = {
	firstName: string;
	lastName: string;
	email: string;
	city: string;
	phone: string;
};

export type ClassState = {
	firstNameInput: string;
	lastNameInput: string;
	emailInput: string;
	cityInput: string;
	phoneInput: [string, string, string, string];
	isFormValid: boolean;
};

export interface FormProps {
	setUserData: (userData: UserInformation) => void;
}
export type PhoneInputState = {
	phoneInput: PhoneInputTuple;
	setPhoneInput: (phone: PhoneInputTuple) => void;
	//inputProps: ComponentProps<"input">;
	//onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export type PhoneInputTuple = [string, string, string, string];
