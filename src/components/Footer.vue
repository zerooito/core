<template>
	<div>
	    <div class="ui inverted vertical footer segment">
	      <div class="ui center aligned container">
	        <div class="ui stackable inverted divided grid">
	          <div class="three wide column">
	            <h4 class="ui inverted header">Site</h4>
	            <div class="ui inverted link list">
	              <a href="#" class="item">Princing</a>
	              <a href="#" class="item">About Us</a>
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
	            <h4 class="ui inverted header">Platform</h4>
	            <div class="ui inverted link list">
	              <a href="#" class="item">Docs</a>
	            </div>
	          </div>
	          <div class="seven wide column">
	            <h4 class="ui inverted header">CiaWN\Core</h4>
	            <p>This product is builded Winners licensed by MIT.</p>

	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/quality-score.png?b=master"> 
	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/build.png?b=master"> 
	            <img src="https://scrutinizer-ci.com/g/ciawn/api/badges/coverage.png?b=master">
	          </div>
	        </div>
	        <div class="ui inverted section divider"></div>
	        <img src="http://www.ciawn.com.br/images/logo.png" class="ui centered image">
	        <br>
	        <div class="ui horizontal inverted small divided link list">
	          <a class="item" href="#">Support</a>
	          <a class="item" href="#">Terms and Conditions</a>
	          <a class="item" href="#">Privacy Policy</a>
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
    return {}
  }
}
</script>