<template>
	<div v-if="$route.name != 'Login'">
	    <div class="ui inverted vertical footer segment">
	      <div class="ui center aligned container">
	        <div class="ui stackable inverted divided grid">
	          <div class="three wide column">
	            <h4 class="ui inverted header">{{ $t('Site', {locale: this.locale}) }}</h4>
	            <div class="ui inverted link list">
	              <a href="#" class="item">{{ $t('Princing', {locale: this.locale}) }}</a>
	              <a href="#" class="item">{{ $t('About Us', {locale: this.locale}) }}</a>
	            </div>
	          </div>
	          <div class="three wide column">
	            <h4 class="ui inverted header">GitHub</h4>
	            <div class="ui inverted link list">
	              <a href="https://github.com/ciawn/core" class="item" target="_blank">Core</a>
	              <a href="https://github.com/ciawn/api" class="item" target="_blank">API</a>
	              <a href="https://github.com/ciawn/deploy" class="item" target="_blank">Deploy</a>
	            </div>
	          </div>
	          <div class="three wide column">
	            <h4 class="ui inverted header">{{ $t('Platform', {locale: this.locale}) }}</h4>
	            <div class="ui inverted link list">
	              <a href="#" class="item">{{ $t('Docs', {locale: this.locale}) }}</a>
	            </div>
	          </div>
	          <div class="seven wide column">
	            <h4 class="ui inverted header">CiaWN\Core</h4>
	            <p>{{ $t('This product is builded Winners licensed by MIT.', {locale: this.locale}) }}</p>

	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/quality-score.png?b=master">
	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/build.png?b=master">
	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/coverage.png?b=master">
	          </div>
	        </div>
	        <div class="ui inverted section divider"></div>
	        <img src="http://www.ciawn.com.br/images/logo.png" class="ui centered image">
	        <br>
	        <div class="ui horizontal inverted small divided link list">
	          <a class="item" href="#">{{ $t('Support', {locale: this.locale}) }}</a>
	          <a class="item" href="#">{{ $t('Terms and Conditions', {locale: this.locale}) }}</a>
	          <a class="item" href="#">{{ $t('Privacy', {locale: this.locale}) }}</a>
	        </div>
	      </div>
	    </div>
	</div>
</template>

<style scoped>
  footer.footer {
    text-align: center;
    margin-top: 70px;
    border-top: 1px solid #E5E5E5;
  }

  .ui.footer.segment {
    margin: 5em 0em 0em;
    padding: 5em 0em;
  }

  .image {
  	width: 120px;
  }
</style>

<script>
export default {
  name: 'footer',
  data () {
    return {
      locale: process.env.LOCALE
    }
  }
}
</script>
