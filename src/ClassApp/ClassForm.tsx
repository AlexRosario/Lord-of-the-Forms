import { Component } from "react";
import * as React from "react";
import { ErrorMessage } from "../ErrorMessage";
import {
	PhoneInput,
	TextInput,
} from "../FunctionalApp/FunctionalInputComponents";
import { allCities } from "../utils/all-cities";
import { isEmailValid } from "../utils/validations";
import { FormType } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component<FormType> {
	state = {
		isSubmitted: false,
	};

	ref0 = React.createRef<HTMLInputElement>();
	ref1 = React.createRef<HTMLInputElement>();
	ref2 = React.createRef<HTMLInputElement>();
	ref3 = React.createRef<HTMLInputElement>();
	ref4 = React.createRef<HTMLInputElement>();

	handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		this.setState({ isSubmitted: true });
	};

	render() {
		const {
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
		} = this.props;

		const { isSubmitted } = this.state;

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
		const shouldShowEmailError = isSubmitted && !isEmailValid(emailInput);
		const shouldShowCityError = isSubmitted && !isCityValid;
		const shouldShowPhoneError = isSubmitted && !isPhoneValid;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<u>
						<h3>User Information Form</h3>
					</u>
					<TextInput
						labelText="First Name"
						inputProps={{
							placeholder: "Bilbo",
							onChange: (e) => setFirstNameInput(e.target.value),
							value: firstNameInput,
							ref: this.ref0,
						}}
					/>
					{shouldShowFirstNameError && (
						<ErrorMessage message={firstNameErrorMessage} show={true} />
					)}

					<TextInput
						labelText="Last Name"
						inputProps={{
							placeholder: "Baggins",
							onChange: (e) => setLastNameInput(e.target.value),
							value: lastNameInput,
							ref: this.ref1,
						}}
					/>
					{shouldShowLastNameError && (
						<ErrorMessage message={lastNameErrorMessage} show={true} />
					)}

					<TextInput
						labelText="Email"
						inputProps={{
							placeholder: "bilbo-baggins@adventurehobbits.net",
							onChange: (e) => setEmailInput(e.target.value),
							value: emailInput,
							ref: this.ref2,
						}}
					/>
					{shouldShowEmailError && (
						<ErrorMessage message={emailErrorMessage} show={true} />
					)}

					<TextInput
						labelText="City"
						inputProps={{
							placeholder: "Hobbiton",
							onChange: (e) => setCityInput(e.target.value),
							value: cityInput,
							ref: this.ref3,
							list: "cities",
							type: "text",
						}}
					/>
					<datalist id="cities">
						{allCities.map((city, index) => (
							<option key={index} value={city} />
						))}
					</datalist>
					{shouldShowCityError && (
						<ErrorMessage message={cityErrorMessage} show={true} />
					)}

					<PhoneInput setPhoneInput={setPhoneInput} phoneInput={phoneInput} />
					{shouldShowPhoneError && (
						<ErrorMessage message={phoneNumberErrorMessage} show={true} />
					)}

					<input type="submit" value="Submit" ref={this.ref4} />
				</form>
			</>
		);
	}
}
