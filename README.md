<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto - Base</title>
    <link rel="stylesheet" href="./src/css/style.css">
</head>
<body>

    <div class="divs">
        <h1>Hello World</h1>
        <button id="btn">Mudar tudo</button>
    </div>

    <div class="divs">
        <img id="img" src="./src/img/img1.jpg" height="200px">
        <div id="img-name">Nome da imagem</div> 
    </div>

    <script>

    // Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para obter uma imagem e nome aleatórios
function getRandomImage() {
    const images = [
        { src: './src/img/img1.jpg', name: 'Imagem 1' },
        { src: './src/img/img2.jpg', name: 'Imagem 2' },
        { src: './src/img/img3.jpg', name: 'Imagem 3' },
        { src: './src/img/img4.jpg', name: 'Imagem 4' }
    ];
    return images[Math.floor(Math.random() * images.length)];
}

// Seleciona os elementos
const button = document.getElementById('btn');
const h1 = document.querySelector('h1');
const img = document.getElementById('img');
const imgName = document.getElementById('img-name');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    // Muda a cor do texto do h1
    h1.style.color = getRandomColor();
    // Muda a cor de fundo do botão
    button.style.backgroundColor = getRandomColor();
    
    // Muda a imagem e o nome da imagem
    const randomImage = getRandomImage();
    console.log("Imagem selecionada:", randomImage); // Adicionado para depuração
    img.src = randomImage.src;
    imgName.textContent = randomImage.name;
});

    
    </script>
    
</body>
</html>
