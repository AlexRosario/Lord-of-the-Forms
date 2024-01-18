import { ErrorMessage } from "../ErrorMessage";
import * as React from "react";
import { UserInformation, FormProps } from "../types";
import { useRef, useState } from "react";
import { PhoneInput, TextInput } from "./FunctionalInputComponents";
import { allCities } from "../utils/all-cities";
import {
	isEmailValid,
	isCityValid,
	isNameValid,
	isPhoneValid,
} from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ handleUserData }: FormProps) => {
	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [phoneInput, setPhoneInput] = useState<
		[string, string, string, string]
	>(["", "", "", ""]);

	const refs = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
	];
	const ref0 = refs[0];
	const ref1 = refs[1];
	const ref2 = refs[2];
	const ref3 = refs[3];
	const ref4 = refs[4];

	const handleSubmit: React.MouseEventHandler<HTMLInputElement> = (
		e: React.FormEvent
	) => {
		e.preventDefault();

		const userData: UserInformation = {
			firstName: firstNameInput,
			lastName: lastNameInput,
			email: emailInput,
			city: cityInput,
			phone: phoneInput.join(""),
		};

		if (
			!isNameValid(firstNameInput) ||
			!isNameValid(lastNameInput) ||
			!isEmailValid(emailInput) ||
			!isCityValid(cityInput) ||
			!isPhoneValid(phoneInput)
		) {
			return;
		} else {
			handleUserData(userData);

			setFirstNameInput("");
			setLastNameInput("");
			setEmailInput("");
			setCityInput("");
			setPhoneInput(["", "", "", ""]);
		}
	};

	return (
		<>
			<form>
				<u>
					<h3>User Information Form</h3>
				</u>
				<TextInput
					labelText="First Name"
					inputProps={{
						placeholder: "Bilbo",
						onChange: (e) => {
							setFirstNameInput(e.target.value);
						},
						value: firstNameInput,
						ref: ref0,
					}}
				/>

				<ErrorMessage
					message={firstNameErrorMessage}
					show={!isNameValid(firstNameInput)}
				/>

				<TextInput
					labelText="Last Name"
					inputProps={{
						placeholder: "Baggins",
						onChange: (e) => {
							setLastNameInput(e.target.value);
						},
						value: lastNameInput,
						ref: ref1,
					}}
				/>

				<ErrorMessage
					message={lastNameErrorMessage}
					show={!isNameValid(lastNameInput)}
				/>

				{/* Email Input */}

				<TextInput
					labelText="Email"
					inputProps={{
						placeholder: "bilbo-baggins@adventurehobbits.net",
						onChange: (e) => {
							setEmailInput(e.target.value);
						},
						value: emailInput,
						ref: ref2,
					}}
				/>

				<ErrorMessage
					message={emailErrorMessage}
					show={!isEmailValid(emailInput)}
				/>

				{/* City Input */}
				<TextInput
					labelText="City"
					inputProps={{
						placeholder: "Hobbiton",
						onChange: (e) => {
							setCityInput(e.target.value);
						},
						value: cityInput,
						ref: ref3,
						list: "cities",
						type: "text",
					}}
				/>
				<div>
					<datalist id="cities">
						{allCities.map((city, index) => (
							<option key={index} value={city} />
						))}
					</datalist>
				</div>

				<ErrorMessage
					message={cityErrorMessage}
					show={!isCityValid(cityInput)}
				/>

				<PhoneInput setPhoneInput={setPhoneInput} phoneInput={phoneInput} />

				<ErrorMessage
					message={phoneNumberErrorMessage}
					show={!isPhoneValid(phoneInput)}
				/>

				<input type="submit" value="Submit" ref={ref4} onClick={handleSubmit} />
			</form>
		</>
	);
};
