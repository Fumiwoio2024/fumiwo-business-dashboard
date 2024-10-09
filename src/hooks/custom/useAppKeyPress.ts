import { useEffect } from 'react';

function useAppKeyPress(key: string, action: () => void) {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === key) action()
		};

		// Add event listener when component mounts
		document.addEventListener('keydown', handleKeyDown);

		// Clean up event listener when component unmounts
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [key, action]);

	return
}

export default useAppKeyPress;
