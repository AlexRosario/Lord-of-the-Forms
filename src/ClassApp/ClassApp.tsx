import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation, State } from "../types";
import { ProfileInformation, defaultUser } from "../ProfileInformation";
import * as React from "react";

export class ClassApp extends Component<{}, State> {
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

	render() {
		const { firstNameInput, lastNameInput, emailInput, cityInput, phoneInput } =
			this.state;

		const userData: UserInformation = {
			firstName: firstNameInput,
			lastName: lastNameInput,
			email: emailInput,
			city: cityInput,
			phone: phoneInput.join(""),
		};

		const isProfileNotFilled =
			!firstNameInput &&
			!lastNameInput &&
			!emailInput &&
			!cityInput &&
			phoneInput.every((val) => val === "");

		return (
			<>
				<h2>Functional</h2>
				<ProfileInformation
					userData={isProfileNotFilled ? defaultUser : userData}
				/>
				<ClassForm
					firstNameInput={firstNameInput}
					setFirstNameInput={this.setFirstNameInput}
					lastNameInput={lastNameInput}
					setLastNameInput={this.setLastNameInput}
					emailInput={emailInput}
					setEmailInput={this.setEmailInput}
					cityInput={cityInput}
					setCityInput={this.setCityInput}
					phoneInput={phoneInput}
					setPhoneInput={this.setPhoneInput}
				/>
			</>
		);
	}
}
