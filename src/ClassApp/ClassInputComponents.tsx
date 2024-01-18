import { Component, createRef } from "react";
import * as React from "react";

export class PhoneInput extends Component<
	{
		setPhoneInput: (phone: [string, string, string, string]) => void;
		phoneInput: [string, string, string, string];
	},
	{}
> {
	private ref0 = createRef<HTMLInputElement>();
	private ref1 = createRef<HTMLInputElement>();
	private ref2 = createRef<HTMLInputElement>();
	private ref3 = createRef<HTMLInputElement>();

	createOnChangeHandler =
		(index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
			const lengths = [2, 2, 2, 1];
			const currentMaxLength = lengths[index];
			const nextRef = [this.ref0, this.ref1, this.ref2, this.ref3][index + 1];
			const prevRef = [this.ref0, this.ref1, this.ref2, this.ref3][index - 1];
			const value = e.target.value;

			if (!/^\d*$/.test(value)) {
				return;
			}

			const shouldGoToNextRef = currentMaxLength === value.length;
			const shouldGoToPrevRef = value.length === 0;

			const newState = this.props.phoneInput.map(
				(phoneInput, phoneInputIndex) =>
					index === phoneInputIndex ? e.target.value : phoneInput
			) as [string, string, string, string];

			if (shouldGoToNextRef && index !== lengths.length - 1) {
				nextRef.current?.focus();
			}

			if (shouldGoToPrevRef && index !== 0) {
				prevRef.current?.focus();
			}

			this.props.setPhoneInput(newState);
		};

	render() {
		const { phoneInput } = this.props;

		return (
			<div className="input-wrap">
				<label htmlFor="phone">Phone:</label>
				<div id="phone-input-wrap">
					<input
						type="text"
						id="phone-input-1"
						maxLength={2}
						placeholder="55"
						ref={this.ref0}
						value={phoneInput[0]}
						onChange={this.createOnChangeHandler(0)}
					/>
					-
					<input
						type="text"
						id="phone-input-2"
						maxLength={2}
						placeholder="55"
						ref={this.ref1}
						value={phoneInput[1]}
						onChange={this.createOnChangeHandler(1)}
					/>
					-
					<input
						type="text"
						id="phone-input-3"
						maxLength={2}
						placeholder="55"
						ref={this.ref2}
						value={phoneInput[2]}
						onChange={this.createOnChangeHandler(2)}
					/>
					-
					<input
						type="text"
						id="phone-input-4"
						maxLength={1}
						placeholder="5"
						ref={this.ref3}
						value={phoneInput[3]}
						onChange={this.createOnChangeHandler(3)}
					/>
				</div>
			</div>
		);
	}
}
