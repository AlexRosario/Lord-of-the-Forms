import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";
import * as React from "react";

type ClassAppState = {
	userData: UserInformation | null;
};

export class ClassApp extends Component {
	state: ClassAppState = {
		userData: null,
	};

	setUserData = (userData: UserInformation) => {
		this.setState({ userData });
	};

	render() {
		const { userData } = this.state;

		return (
			<>
				<h2>Class Form</h2>
				<ProfileInformation userData={userData} />
				<ClassForm setUserData={this.setUserData} />
			</>
		);
	}
}
