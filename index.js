

function introduction(name) {

    return `Hi, my name is ${name}.`;

}
console.log(introduction('Aki'));

function introductionWithLanguage(name, language){

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage('rozha', 'js'));

function introductionWithLanguageOptional(name, language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional('rozha'));
console.log(introductionWithLanguageOptional('rozha', 'python'));
