export const validateName = (name: string): string | undefined => {
	if (!name) {
		return "Name is required";
	}

	const fullNameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
	if (!fullNameRegex.test(name)) {
		return "Name must be a full name (e.g., John Doe) using only English letters";
	}

	return undefined;
};

export const validateEmail = (email: string): string | undefined => {
	if (!email) {
		return "Email is required";
	}

	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
		return "Sorry, invalid format here";
	}

	return undefined;
};

export const validateMessage = (message: string): string | undefined => {
	if (!message) {
		return "Message is required";
	}

	if (message.length < 10) {
		return "Message must be at least 10 characters long";
	}

	const englishLettersRegex = /^[A-Za-z\s]+$/;
	if (!englishLettersRegex.test(message)) {
		return "Message can only contain English letters and spaces";
	}

	return undefined;
};
