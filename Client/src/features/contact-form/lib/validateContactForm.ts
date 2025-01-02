import { validateEmail, validateMessage, validateName } from "../model";

export const validateContactForm = (values: { name: string; email: string; message: string }) => {
	const errors: Record<string, string> = {};

	const nameError = validateName(values.name);
	if (nameError) {
		errors.name = nameError;
	}

	const emailError = validateEmail(values.email);
	if (emailError) {
		errors.email = emailError;
	}

	const messageError = validateMessage(values.message);
	if (messageError) {
		errors.message = messageError;
	}

	return errors;
};
