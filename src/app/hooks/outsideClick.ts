import { useEffect, useState } from "react";

export default function detectOutsideClick(ref: any) {
	const [isClicked, setisClicked] = useState(false);
	useEffect(() => {
		function handleClickOutside(e: any) {
			if (ref.current && !ref.current.contains(e.target))
				setisClicked(true);
			else
				setisClicked(false);
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [ref])

	return isClicked;
}