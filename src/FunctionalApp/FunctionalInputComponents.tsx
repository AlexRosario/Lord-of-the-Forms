import * as React from "react";
import { ComponentProps, useRef } from "react";

export function TextInput({
	labelText,
	inputProps,
}: {
	labelText: string;
	inputProps: ComponentProps<"input">;
}) {
	return (
		<div className="input-wrap">
			<label>{labelText}:</label>
			<input {...inputProps} />
		</div>
	);
}
export type PhoneInputState = {
	phoneInput: [string, string, string, string];
	setPhoneInput: (phone: [string, string, string, string]) => void;
};
export const PhoneInput: React.FC<PhoneInputState> = ({
	phoneInput,
	setPhoneInput,
}) => {
	const refs = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
	];
	const ref0 = refs[0];
	const ref1 = refs[1];
	const ref2 = refs[2];
	const ref3 = refs[3];

	const createOnChangeHandler =
		(index: number): React.ChangeEventHandler<HTMLInputElement> =>
		(e) => {
			const lengths = [2, 2, 2, 1];
			const currentMaxLength = lengths[index];
			const nextRef = refs[index + 1];
			const prevRef = refs[index - 1];
			const value = e.target.value;

			if (!/^\d*$/.test(value)) {
				return;
			}

			const shouldGoToNextRef = currentMaxLength === value.length;

			const shouldGoToPrevRef = value.length === 0;

			const newState = phoneInput.map((phoneInput, phoneInputIndex) =>
				index === phoneInputIndex ? e.target.value : phoneInput
			) as [string, string, string, string];

			if (shouldGoToNextRef && refs[index] !== refs[refs.length - 1]) {
				nextRef.current?.focus();
			}

			if (shouldGoToPrevRef && refs[index] !== refs[0]) {
				prevRef.current?.focus();
			}
			setPhoneInput(newState);
		};

	return (
		<div className="input-wrap">
			<label htmlFor="phone">Phone:</label>
			<div id="phone-input-wrap">
				<input
					type="tel"
					pattern="/[0-9]*/"
					id="phone-input-1"
					maxLength={2}
					placeholder="55"
					ref={ref0}
					value={phoneInput[0]}
					onChange={createOnChangeHandler(0)}
				/>
				-
				<input
					type="tel"
					pattern="[0-9]*"
					id="phone-input-2"
					maxLength={2}
					placeholder="55"
					ref={ref1}
					value={phoneInput[1]}
					onChange={createOnChangeHandler(1)}
				/>
				-
				<input
					type="tel"
					pattern="[0-9]*"
					id="phone-input-3"
					maxLength={2}
					placeholder="55"
					ref={ref2}
					value={phoneInput[2]}
					onChange={createOnChangeHandler(2)}
				/>
				-
				<input
					type="tel"
					pattern="[0-9]*"
					id="phone-input-4"
					placeholder="5"
					maxLength={1}
					ref={ref3}
					value={phoneInput[3]}
					onChange={createOnChangeHandler(3)}
				/>
			</div>
		</div>
	);
};
