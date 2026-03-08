const container = document.getElementById("produtos")

function calcularDesconto(antigo, atual){
return Math.round(((antigo - atual) / antigo) * 100)
}

function mostrarProdutos(){

container.innerHTML = ""

produtos.forEach(produto=>{

const desconto = calcularDesconto(produto.precoAntigo, produto.precoAtual)

const card = document.createElement("div")
card.classList.add("card")

card.innerHTML = `

<div class="card-img">
<img src="${produto.imagens[0]}" alt="produto">
</div>

<div class="card-body">

<h3 class="card-title">${produto.nome}</h3>

<span class="preco-antigo">R$ ${produto.precoAntigo}</span>

<span class="desconto">-${desconto}%</span>

<div class="preco-atual">R$ ${produto.precoAtual}</div>

<div class="parcelamento">${produto.parcelamento}</div>

<a href="${produto.link}" target="_blank" class="btn-comprar">
Ver promoção
</a>

</div>

`

container.appendChild(card)

})

}

mostrarProdutos()
console.log(produtos)