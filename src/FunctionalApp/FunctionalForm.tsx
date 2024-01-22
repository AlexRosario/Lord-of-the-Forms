import { ErrorMessage } from "../ErrorMessage";
import * as React from "react";
import { PhoneInputTuple, FormProps } from "../types";
import { /*useRef,*/ useState } from "react";
import { PhoneInput, TextInput } from "./FunctionalInputComponents";
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

export const FunctionalForm = ({ setUserData }: FormProps) => {
	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [phoneInput, setPhoneInput] = useState<PhoneInputTuple>([
		"",
		"",
		"",
		"",
	]);
	const [isFormValid, setIsFormValid] = useState(false);

	const handleSubmit: React.MouseEventHandler<HTMLInputElement> = (
		e: React.FormEvent
	) => {
		e.preventDefault();
		setIsFormValid(true);

		if (
			!isNameValid(firstNameInput) ||
			!isNameValid(lastNameInput) ||
			!isEmailValid(emailInput) ||
			!isCityValid(cityInput) ||
			!isPhoneValid(phoneInput)
		) {
			return;
		} else {
			setUserData({
				email: emailInput,
				firstName: firstNameInput,
				lastName: lastNameInput,
				phone: phoneInput.join(""),
				city: cityInput,
			});

			setFirstNameInput("");
			setLastNameInput("");
			setEmailInput("");
			setCityInput("");
			setPhoneInput(["", "", "", ""]);
			setIsFormValid(false);
		}
	};
	//please disregard. Just for fun, I added a ref to each input and made it so that when you press enter, it will focus on the next input.
	/*
	const refs = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
	];
	const [index, setIndex] = useState(0);

	const nextRef = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (
			e.key === "Enter" &&
			index < refs.length - 1 &&
			e.currentTarget.value.length > 0
		) {
			e.preventDefault();
			setIndex(index + 1);
			refs[index + 1].current?.focus();
		} else if (
			e.key === "Backspace" &&
			index > 0 &&
			e.currentTarget.value.length === 0
		) {
			e.preventDefault();
			setIndex(index - 1);
			refs[index - 1].current?.focus();
		}

		if (index === refs.length - 1) {
			setIndex(0);
		}
	};*/
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
						/*	onKeyDown: (e) => {
							nextRef(e);
						},

						ref: refs[0],*/
					}}
				/>
				{isFormValid && (
					<ErrorMessage
						message={firstNameErrorMessage}
						show={!isNameValid(firstNameInput)}
					/>
				)}

				<TextInput
					labelText="Last Name"
					inputProps={{
						placeholder: "Baggins",
						onChange: (e) => {
							setLastNameInput(e.target.value);
						},
						value: lastNameInput,
						/*onKeyDown: (e) => {
							nextRef(e);
						},

						ref: refs[1],*/
					}}
				/>

				{isFormValid && (
					<ErrorMessage
						message={lastNameErrorMessage}
						show={!isNameValid(lastNameInput)}
					/>
				)}

				<TextInput
					labelText="Email"
					inputProps={{
						placeholder: "bilbo-baggins@adventurehobbits.net",
						onChange: (e) => {
							setEmailInput(e.target.value);
						},
						value: emailInput,
						/*onKeyDown: (e) => {
							nextRef(e);
						},

						ref: refs[2],*/
					}}
				/>

				{isFormValid && (
					<ErrorMessage
						message={emailErrorMessage}
						show={!isEmailValid(emailInput)}
					/>
				)}

				<TextInput
					labelText="City"
					inputProps={{
						placeholder: "Hobbiton",
						onChange: (e) => {
							setCityInput(e.target.value);
						},
						value: cityInput,
						/*
						onKeyDown: (e) => {
							nextRef(e);
						},
						ref: refs[3],*/
						list: "cities",
						type: "text",
					}}
				/>

				{isFormValid && (
					<ErrorMessage
						message={cityErrorMessage}
						show={!isCityValid(cityInput)}
					/>
				)}

				<PhoneInput
					setPhoneInput={setPhoneInput}
					phoneInput={phoneInput}
					/*onKeyDown={(e) => {
						nextRef(e);
					}}
					inputProps={{
						ref: refs[4],
					}}*/
				/>

				{isFormValid && (
					<ErrorMessage
						message={phoneNumberErrorMessage}
						show={!isPhoneValid(phoneInput)}
					/>
				)}

				<input
					type="submit"
					value="Submit"
					onClick={handleSubmit}
					/*	ref={refs[5]}
					onKeyDown={(e) => {
						nextRef(e);
					}}*/
				/>
			</form>
		</>
	);
};
