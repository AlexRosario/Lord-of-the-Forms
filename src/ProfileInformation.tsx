import * as React from "react";
import { UserInformation } from "./types";
import { capitalize, formatPhoneNumber } from "../src/utils/transformations";

export const defaultUser: UserInformation = {
	email: "default@default.com",
	firstName: "Default",
	lastName: "Default",
	city: "Hobbiton",
	phone: "1234567",
};

export const InfoRow = ({ label, value }: { label: string; value: string }) => {
	return (
		<div>
			<span style={{ marginRight: 5 }}>
				<b>{label}:</b>
			</span>
			<span>{value}</span>
		</div>
	);
};
export const ProfileInformation = ({
	userData,
}: {
	userData: UserInformation | null;
}) => {
	if (!userData) {
		return (
			<>
				<u>
					<h3>Your Submitted User Information</h3>
				</u>
				<div className="user-info">
					<div>No information provided</div>
				</div>
			</>
		);
	}
	const { email, firstName, lastName, phone, city } = userData;
	return (
		<>
			<u>
				<h3>Your Submitted User Information</h3>
			</u>
			<div className="user-info">
				<InfoRow label="Email" value={email} />
				<InfoRow label="First Name" value={capitalize(firstName)} />
				<InfoRow label="Last Name" value={capitalize(lastName)} />
				<InfoRow label="City" value={city} />
				{/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
				<InfoRow label="Phone" value={formatPhoneNumber(phone)} />
			</div>
		</>
	);
};
