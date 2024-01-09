export const capitalize = (name: string) => {
	if (!name) return "";

	return name[0].toUpperCase() + name.slice(1).toLowerCase();
};

export const formatPhoneNumber = (phoneNumber: string) => {
	// Split the string into parts and then join with a hyphen
	return [
		phoneNumber.slice(0, 2),
		phoneNumber.slice(2, 4),
		phoneNumber.slice(4, 6),
		phoneNumber.slice(6, 7),
	].join("-");
};
