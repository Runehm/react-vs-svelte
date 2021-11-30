<script>
	// import { browser, dev } from '$app/env';
	//
	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;
	//
	// // ...but if the client-side router is already loaded
	// // (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;
	//
	// // since there's no dynamic data here, we can prerender
	// // it so that it gets served as a static asset in prod
	// export const prerender = true;


	let firstName = '';
	let	lastName = '';
	let email = '';
	let message = '';


</script>

<svelte:head>
	<title>Form</title>
</svelte:head>

<div class="content">

	<pre>First Name: {firstName}</pre>
	<pre>Last Name: {lastName}</pre>
	<pre>Email: {email}</pre>
	<pre>Message: {message}</pre>

	<form class="form">
		<h1>Form</h1>
		<div class="form__section">
			<div class="form__field">
				<label class="form__label">First Name</label>
				<input
						class="form__input"
						id="firstName"
						name="firstName"
						type="text"
						bind:value={firstName}

				/>
			</div>
			<div class="form__field">
				<label class="form__label">Last Name</label>
				<input
						class="form__input"
						id="lastName"
						name="lastName"
						type="text"
						bind:value={lastName}

				/>
			</div>
		</div>

		<div class="form__section">
			<div class="form__field--fullWidth">
				<label class="form__label">Email</label>
				<input
						class="form__input"
						id="email"
						name="email"
						type="email"
						bind:value={email}

				/>
			</div>
		</div>

		<div class="form__section">
			<div class="form__field--fullWidth">
				<label class="form__label">Message</label>
<!--				<textarea-->
<!--						className="form__input form__textarea"-->
<!--						id="message"-->
<!--						name="message"-->
<!--						value={formState.message}></textarea>-->
			</div>
		</div>

		<button
				class='button button__ghost button--extraPadding'
		>
			Send
		</button>
	</form>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
