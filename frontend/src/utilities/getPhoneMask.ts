function getPhoneMask(num: string) {
    const x = num.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    if (x === null) {
        return num;
    }

    return !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "");
}

export default getPhoneMask;
