Vue.component('custom-header', {
	props: ['link'],
	template: ` 
	<header>
		<a :href="link" id="main-link">Vue - project</a>
		<div id="nav">
			<nav><a href="../manage/index.html">Управление</a></nav>
			<nav><a href="../additional/index.html">Дополнительное</a></nav>
		</div>
	</header>
	`
})

Vue.component('custom-input', {
	props: ['label', 'value'],
	template: ` 
	<label class="form-group">
		{{ label }}
		<input class="form-control" 
			:value="value" 
			@input="$emit('input', $event.target.value)">
	</label>
	`
})

Vue.component('submit-button', {
	props: ['button-text'],
	template: ` 
	<button class="btn btn-primary btn-block" 
		@click="$emit('set-word')">{{ buttonText }}</button>
	`
})

Vue.component('custom-form', {
	template: ` 
	<div class="row justify-content-center">
		<div id="form" class="col-md-5 col-xs-10 shadow rounded">
		<slot></slot>
		</div>
	</div>
	`
})

Vue.component('nav-link', {
	props: ['text', 'link'],
	template: `<a class="btn btn-lg my-2" :href="link">{{ text }}</a>`
})

Vue.component('nav-button', {
	props: ['text'],
	template: `<button class="btn btn-lg my-2" @click="$emit('delete-word')">{{ text }}</button>`
})