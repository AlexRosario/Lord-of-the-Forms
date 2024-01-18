import * as React from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";
import { UserInformation } from "../types";

export const FunctionalApp = () => {
	const [userData, setUserData] = useState<UserInformation | null>(null);

	const handleUserData = (userData: UserInformation) => {
		setUserData(userData);
	};

	return (
		<>
			<h2>Functional</h2>
			<ProfileInformation userData={userData} />
			<FunctionalForm handleUserData={handleUserData} />
		</>
	);
};
