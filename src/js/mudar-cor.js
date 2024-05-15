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
    img.src = randomImage.src;
    imgName.textContent = randomImage.name;
});
