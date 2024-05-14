import { useEffect, useRef } from "react";

export const useKey = (keyId, callback) => {
    const ref = useRef(null)

    useEffect(() => {
		const handleKey = (event) => {
			if(event.key === keyId) {
				if (callback) callback(ref.current)
			}
		}

		window.addEventListener("keydown", handleKey);

		return () => {
			window.removeEventListener("keydown", handleKey);
		}
	}, [])
    return ref;
}