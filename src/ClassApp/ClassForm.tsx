import { Component } from "react";
import * as React from "react";
import { ErrorMessage } from "../ErrorMessage";
import {
	PhoneInput,
	TextInput,
} from "../FunctionalApp/FunctionalInputComponents";
import { allCities } from "../utils/all-cities";
import {
	isEmailValid,
	isCityValid,
	isNameValid,
	isPhoneValid,
} from "../utils/validations";
import { FormProps, ClassState } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component<FormProps> {
	state: ClassState = {
		firstNameInput: "",
		lastNameInput: "",
		emailInput: "",
		cityInput: "",
		phoneInput: ["", "", "", ""],
		isFormValid: false,
	};

	setFirstNameInput = (name: string) => {
		this.setState({ firstNameInput: name });
	};

	setLastNameInput = (name: string) => {
		this.setState({ lastNameInput: name });
	};

	setEmailInput = (email: string) => {
		this.setState({ emailInput: email });
	};

	setCityInput = (city: string) => {
		this.setState({ cityInput: city });
	};

	setPhoneInput = (phone: [string, string, string, string]) => {
		this.setState({ phoneInput: phone });
	};

	handleSubmit: React.MouseEventHandler<HTMLInputElement> = (
		e: React.FormEvent
	) => {
		e.preventDefault();
		this.setState({ isFormValid: true });

		const firstName = this.state.firstNameInput;
		const lastName = this.state.lastNameInput;
		const email = this.state.emailInput;
		const city = this.state.cityInput;
		const phone = this.state.phoneInput;

		if (
			!isNameValid(firstName) ||
			!isNameValid(lastName) ||
			!isEmailValid(email) ||
			!isCityValid(city) ||
			!isPhoneValid(phone)
		) {
			return;
		} else {
			this.props.setUserData({
				email: email,
				firstName: firstName,
				lastName: lastName,
				phone: phone.join(""),
				city: city,
			});

			this.setFirstNameInput("");
			this.setLastNameInput("");
			this.setEmailInput("");
			this.setCityInput("");
			this.setPhoneInput(["", "", "", ""]);
			this.setState({ isFormValid: false });
		}
	};
	render() {
		const {
			firstNameInput,
			lastNameInput,
			emailInput,
			cityInput,
			phoneInput,
			isFormValid,
		} = this.state;
		const {
			setFirstNameInput,
			setLastNameInput,
			setEmailInput,
			setCityInput,
			setPhoneInput,
		} = this;

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
					{isFormValid && (
						<ErrorMessage
							message={cityErrorMessage}
							show={!isCityValid(cityInput)}
						/>
					)}
					<PhoneInput setPhoneInput={setPhoneInput} phoneInput={phoneInput} />
					{isFormValid && (
						<ErrorMessage
							message={phoneNumberErrorMessage}
							show={!isPhoneValid(phoneInput)}
						/>
					)}
					<input type="submit" value="Submit" onClick={this.handleSubmit} />
				</form>
			</>
		);
	}
}
