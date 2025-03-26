

// Inicializa o carrinho
let cart = [];

// Função para adicionar um item ao carrinho
function comprar(item, price) {
    const cartItem = { name: item, price: price };
    cart.push(cartItem);
    alert(item + " foi adicionado ao seu carrinho!");
    atualizarCarrinho();
}

// Função para atualizar a contagem de itens no carrinho e o total
function atualizarCarrinho() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    cartCount.textContent = cart.length;

    // Calcula o total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
}

// Função para exibir o conteúdo do carrinho
function exibirCarrinho() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpa a lista atual

    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
    } else {
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = () => removerDoCarrinho(index);
            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);
        });
    }
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    cart.splice(index, 1);
    alert("Item removido do carrinho!");
    atualizarCarrinho();
    exibirCarrinho();
}
