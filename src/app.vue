<script>

	export default {
		data : function() {
			return {
				imc : 0,
				height : localStorage && localStorage.imc_h && !isNaN(localStorage.imc_h) ? localStorage.imc_h : 170,
				weight : localStorage && localStorage.imc_w && !isNaN(localStorage.imc_w) ? localStorage.imc_w : 70,
			}
		},
		methods : {
			computeBMI : function(height, weight) {
				localStorage.imc_h = height;
				localStorage.imc_w = weight;
				return Math.round(100000 * weight / (height * height)) / 10;
			}
		},
	};

</script>
<template>
	<form>
		<div class="form-elt">
			<label>Height (cm)</label>
			<input name="height" class="input" type="number" v-model="height" />
		</div>
		<div class="form-elt">
			<label>Weight (kg)</label>
			<input class="input" name="weight" type="number" v-model="weight" />
		</div>
		<div class="result-title">Body Mass Index</div>
		<div class="bmi">{{computeBMI(height, weight)}}</div>
	</form>
</template>
<style scoped>

	form {
		width: 200px;
		margin: 8px auto;
	}

	div.form-elt {
		display:flex;
		flex-direction: column;
		align-items: center;
	}
	div.form-elt {
		display: flex;
		flex-direction: column;
		margin: 8px auto;
	}

	div.form-elt label {
		margin: 4px 0;
		text-align: center;
		display: block;
	}

	input.input {
		border-radius: 8px;
		height: 36px;
		font-size: 16px;
		border-style: solid;
		border-color: #CCC;
		max-width: 100px;
		text-align: right;
		padding: 2px 2px;
		box-sizing: border-box;
	}
	div.result-title {
		margin-top: 16px;
		text-align: center;
	}
	div.bmi {
		margin-top: 8px;
		font-size: 24px;
		text-align: center;
		font-weight: bold;
	}

</style>
