const TextoEmMeme = caracter =>
{
    let novoTexto = caracter.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');

    return novoTexto;
}
export default TextoEmMeme;
