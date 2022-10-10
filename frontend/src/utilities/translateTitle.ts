interface Converter {
    [key: string]: string;
}

const translateTitle = (word: string): string => {
    const converter: Converter = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ь: "",
        ы: "y",
        ъ: "",
        э: "e",
        ю: "yu",
        я: "ya",
    };

    const lowerWord: string = word.toLowerCase();

    let answer = "";

    for (let index = 0; index < lowerWord.length; index++) {
        if (converter[lowerWord[index]] === undefined) {
            answer += lowerWord[index];
        } else {
            answer += converter[lowerWord[index]];
        }
    }

    answer = answer.replace(/[^-0-9a-z]/g, "-");
    answer = answer.replace(/[-]+/g, "-");
    answer = answer.replace(/^\\-|-$/g, "");

    return answer;
};

export default translateTitle;
