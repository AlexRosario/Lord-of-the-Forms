import { ErrorMessage } from "../ErrorMessage";
import * as React from "react";
import { FormType } from "../types";
import { useRef, useState } from "react";
import { PhoneInput, TextInput } from "./FunctionalInputComponents";
import { allCities } from "../utils/all-cities";
import { isEmailValid } from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm: React.FC<FormType> = ({
	firstNameInput,
	setFirstNameInput,
	lastNameInput,
	setLastNameInput,
	emailInput,
	setEmailInput,
	cityInput,
	setCityInput,
	phoneInput,
	setPhoneInput,
}) => {
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

	const [isSubmitted, setIsSubmitted] = useState(false);

	const isFirstNameValid = firstNameInput.length > 2;
	const isLastNameValid = lastNameInput.length > 2;
	const isCityValid = !!allCities.find(
		(city) => city.toUpperCase() === cityInput.toUpperCase()
	);
	const isPhoneValid =
		phoneInput.every((segment) => /^\d*$/.test(segment)) &&
		phoneInput.join("").length === 7;

	const shouldShowFirstNameError = isSubmitted && !isFirstNameValid;
	const shouldShowLastNameError = isSubmitted && !isLastNameValid;
	const shouldShowEmailError = isSubmitted && !isEmailValid;
	const shouldShowCityError = isSubmitted && !isCityValid;
	const shouldShowPhoneError = isSubmitted && !isPhoneValid;

	const handleSubmit: React.MouseEventHandler<HTMLInputElement> = (
		e: React.FormEvent
	) => {
		e.preventDefault();
		setIsSubmitted(true);
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
				{shouldShowFirstNameError && (
					<ErrorMessage message={firstNameErrorMessage} show={true} />
				)}
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
				{shouldShowLastNameError && (
					<ErrorMessage message={lastNameErrorMessage} show={true} />
				)}
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

				{shouldShowEmailError && (
					<ErrorMessage message={emailErrorMessage} show={true} />
				)}
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
				{shouldShowCityError && (
					<ErrorMessage message={cityErrorMessage} show={true} />
				)}
				<PhoneInput setPhoneInput={setPhoneInput} phoneInput={phoneInput} />

				{shouldShowPhoneError && (
					<ErrorMessage message={phoneNumberErrorMessage} show={true} />
				)}
				<input type="submit" value="Submit" ref={ref4} onClick={handleSubmit} />
			</form>
		</>
	);
};
