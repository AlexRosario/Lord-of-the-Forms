import * as React from "react";
import { ProfileInformation, defaultUser } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";

export const FunctionalApp = () => {
	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [phoneInput, setPhoneInput] = useState<
		[string, string, string, string]
	>(["", "", "", ""]);

	const userData = {
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
		!phoneInput.every((val) => val === "");

	return (
		<>
			<h2>Functional</h2>
			<ProfileInformation
				userData={isProfileNotFilled ? defaultUser : userData}
			/>
			<FunctionalForm
				firstNameInput={firstNameInput}
				setFirstNameInput={setFirstNameInput}
				lastNameInput={lastNameInput}
				setLastNameInput={setLastNameInput}
				emailInput={emailInput}
				setEmailInput={setEmailInput}
				cityInput={cityInput}
				setCityInput={setCityInput}
				phoneInput={phoneInput}
				setPhoneInput={setPhoneInput}
			/>
		</>
	);
};
