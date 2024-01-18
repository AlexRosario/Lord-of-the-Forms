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
import { UserInformation, FormProps, State } from "../types";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component<FormProps> {
	state: State = {
		firstNameInput: "",
		lastNameInput: "",
		emailInput: "",
		cityInput: "",
		phoneInput: ["", "", "", ""],
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

	ref0 = React.createRef<HTMLInputElement>();
	ref1 = React.createRef<HTMLInputElement>();
	ref2 = React.createRef<HTMLInputElement>();
	ref3 = React.createRef<HTMLInputElement>();
	ref4 = React.createRef<HTMLInputElement>();

	handleSubmit: React.MouseEventHandler<HTMLInputElement> = (
		e: React.FormEvent
	) => {
		e.preventDefault();

		const userData: UserInformation = {
			firstName: this.state.firstNameInput,
			lastName: this.state.lastNameInput,
			email: this.state.emailInput,
			city: this.state.cityInput,
			phone: this.state.phoneInput.join(""),
		};

		if (
			!isNameValid(this.state.firstNameInput) ||
			!isNameValid(this.state.lastNameInput) ||
			!isEmailValid(this.state.emailInput) ||
			!isCityValid(this.state.cityInput) ||
			!isPhoneValid(this.state.phoneInput)
		) {
			return;
		} else {
			this.props.handleUserData(userData);

			this.setFirstNameInput("");
			this.setLastNameInput("");
			this.setEmailInput("");
			this.setCityInput("");
			this.setPhoneInput(["", "", "", ""]);
		}
	};
	render() {
		const { firstNameInput, lastNameInput, emailInput, cityInput, phoneInput } =
			this.state;
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
							ref: this.ref0,
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
							ref: this.ref1,
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
							ref: this.ref2,
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
							ref: this.ref3,
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

					<input
						type="submit"
						value="Submit"
						ref={this.ref4}
						onClick={this.handleSubmit}
					/>
				</form>
			</>
		);
	}
}
