const cleanPhone = (number: string): string => {
    return `+${number.replace(/[^0-9]/g, "")}`;
};

export default cleanPhone;
