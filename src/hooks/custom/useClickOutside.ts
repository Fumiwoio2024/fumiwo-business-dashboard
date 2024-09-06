import { RefObject, useEffect, useRef } from 'react'

/**
 * Function to create a ref that detects clicks outside a specified element.
 *
 * @param {function} setShowDropdown - A function to set the state of the dropdown to false
 * @return {RefObject<HTMLDivElement>} The ref object for the dropdown element
 */

const useClickOutside = (setShowDropdown: (dropDownState: boolean) => void): RefObject<HTMLDivElement> => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Function to handle clicks outside the dropdown
	const handleClickOutside = (e: MouseEvent) => {
		// Check if the click was outside the dropdown
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(e.target as Node)
		) {
			setShowDropdown(false); // Close the dropdown
		}
	};

	// Use useEffect to add event listener for clicks outside the dropdown
	useEffect(() => {
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			// Unbind the event listener on cleanup
			document.removeEventListener("mousedown", handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return dropdownRef
}

export default useClickOutside