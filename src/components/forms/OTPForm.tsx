import { useVerifyOtp } from "@/hooks/api/mutations/auth";
import { PrimaryButton } from "@components/global/Buttons";
import { P } from "@components/global/Typography";
import { CSSProperties, useEffect, useRef, useState } from "react";

const maximumLength = 4
const error = false
const hideNumber = false
const fillEmptyBoxes = true


const OTPForm = ({ setStatus, setTokenState }: { setStatus: () => void; setTokenState?: (token: string) => void }) => {
	const [code, setCode] = useState("")
	const [isPinReady, setIsPinReady] = useState(false)

	const boxArray = new Array(maximumLength).fill(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);


	const handleOnPress = () => {
		setIsInputBoxFocused(true);

		inputRef.current?.focus();
	};

	const handleBlur = () => {
		setIsInputBoxFocused(false);
	};

	const handleResend = () => {

	}

	useEffect(() => {
		// Focus the input on mount with delay of 500ms
		const timeout = setTimeout(() => {
			inputRef.current?.focus()
		}, 1000)

		return () => clearTimeout(timeout)
	}, []);

	useEffect(() => {
		// update pin ready status
		setIsPinReady(code.length === maximumLength);

		return () => {
			setIsPinReady(false);
		};
	}, [code]);

	const boxDigit = (_: unknown, index: number) => {
		const emptyInput = '';
		const digit = code[index] || emptyInput;

		const isCurrentValue = index === code.length;
		const isLastValue = index === maximumLength - 1;
		const isCodeComplete = code.length === maximumLength;

		const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

		const focusedStyle =
			isInputBoxFocused && isValueFocused
				? { ...style.splitBoxes, ...style.focusedInput }
				: style.splitBoxes;

		const errorStyle = error ? style.errorInput : {};

		// Replace the digit display based on hideNumber prop
		const displayValue = hideNumber && digit ? '*' : digit;
		// const displayValue = hideNumber && digit ? String.fromCharCode(0x2022) : digit;

		return (
			<div key={index} style={{ ...focusedStyle, ...errorStyle }}>
				<P
					className={`text-center text-xl ${error ? "text-[#FF0000]" : 'text-[#404F65]'}`}
				>
					{displayValue || (fillEmptyBoxes && '-')}
				</P>
			</div>
		);
	};

	const { mutate, isPending } = useVerifyOtp()

	const submitForm = async () => {
		// setTokenState?.(code)
		// setStatus()
		// const text = ''; if (text === '') return


		mutate(code, {
			onSuccess: () => {
				setTokenState?.(code)
				setStatus()
			}
		})
	}




	return (
		<div className="text-left space-y-6" >
			<div className="items-center relative w-fit mx-auto">
				<div className="flex" onClick={handleOnPress} style={{ ...style.splitOtpBoxesContainer, flexDirection: 'row' }}>
					{boxArray.map(boxDigit)}
				</div>
				<input
					className="h-full absolute w-full opacity-0"
					contextMenu="false"
					ref={inputRef}
					autoComplete="sms-otp"
					onBlur={handleBlur}
					value={code}
					maxLength={maximumLength}
					onChange={(e) => setCode(e.target.value)}
				/>
			</div>

			<PrimaryButton
				onClick={submitForm}
				disabled={!isPinReady || isPending}
				className="w-full"
				type="submit"
			>
				Submit
			</PrimaryButton>

			<P className="w-fit mx-auto text-center">
				Didn't receive code? <button onClick={handleResend} type='button' className="text-textHeader">Resend</button>
			</P>

		</div>

	);
};
export default OTPForm

const style: Record<string, CSSProperties> = {
	splitBoxes: {
		backgroundColor: "#FFFFFF",
		width: 53,
		height: 48,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#EAECF0",
		marginRight: 3,
		marginLeft: 3,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	},
	splitOtpBoxesContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	focusedInput: {
		borderColor: "#404F65"
	},
	errorInput: {
		borderColor: "FF0000",
		backgroundColor: 'transparent'
	},
	forgotPinTextContainer: {
		marginTop: 20
	},
	forgotPinText: {
		textDecorationLine: 'underline'
	}
}