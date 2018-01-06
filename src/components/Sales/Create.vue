<template>
  <div>
    <div class="ui two column grid">
      <div class="row">
        <div class="column">
          <input type="text" :placeholder="$t('Type to search products...', {locale: getLocale()})" />
        </div>
        <div class="column">
          <input type="text" :placeholder="$t('Type quantity products...', {locale: getLocale()})" />
        </div>
      </div>
    </div>

    <div class="ui two column grid">
      <div class="row">
        <div class="column left">
          <span>Subtotal</span> <h1>R$ 32.99</h1> <br>
          <span>Desconto</span> <h2>R$ 32.99</h2> <br>
          <span>A Pagar</span> <h2>R$ 32.99</h2>
        </div>
        <div class="column left">
          <div class="ui items">
            <div class="item">
              <div class="content">
                <a class="header">Camisa Malcolm X > Preta > G</a>
                <div class="description">
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
                </div>
                <div class="extra">
                  <b>Quantidade:</b> 1 <br> 
                  <b>Preço:</b> R$ 10,00
                </div>
              </div>
            </div>
            <div class="item">
              <div class="content">
                <a class="header">Camisa Malcolm X > Branca > M</a>
                <div class="description">
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
                </div>
                <div class="extra">
                  <b>Quantidade:</b> 1 <br> 
                  <b>Preço:</b> R$ 10,00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleCreate',
  data () {
    return {}
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    }
  }
}
</script>

<style scoped>
.search-products {
  position: absolute;
  width: 85%;
  height: 100px;
}
.column input{
  width: 100%;
  border: solid 1px #ebebeb;
  margin: 0px 0px 15px 0px;
  padding: 10px;
}
.left {
  text-align: left;
}
.ui .item {
  margin-bottom: 20px !important;
}
</style>