class CharReplacement{
    replacement(word){
        word = word.replace("ą", "a");
        word = word.replace("ć", "c");
        word = word.replace("ę", "e");
        word = word.replace("ł", "l");
        word = word.replace("ń", "n")
        word = word.replace("ó", "o");
        word = word.replace("ś", "s");
        word = word.replace("ż", "z");
        word = word.replace("ź", "z");
        return word;
    }
}

export const charReplacement = new CharReplacement();