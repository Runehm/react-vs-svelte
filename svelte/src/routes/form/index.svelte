<script>
  // import '../../styles/form.scss';

  let firstName = '';
  let lastName = '';
  let email = '';
  let message = '';

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Form submitted!! firstName: ${firstName}, lastName: ${lastName}, email: ${email}, message: ${message}`)

    firstName = ''
    lastName = ''
    email = '';
    message = ''
  }

</script>

<svelte:head>
    <title>Form</title>
</svelte:head>

<div class="form__wrapper">

    <div class="form__preWrapper">
        <pre>First Name: {firstName}</pre>
        <pre>Last Name: {lastName}</pre>
        <pre>Email: {email}</pre>
        <pre>Message: {message}</pre>
    </div>

    <form class="form">
        <h1>Form</h1>
        <div class="form__section">
            <div class="form__field">
                <label class="form__label">First Name</label>
                <input class="form__input"
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
                <textarea
                        class="form__input form__textarea"
                        id="message"
                        name="message"
                        bind:value={message}></textarea>
            </div>
        </div>

        <button class='button button__ghost button--extraPadding' on:click={handleSubmit}>Send</button>
    </form>

</div>

<style lang="scss">
  @import "src/styles/form.scss";
</style>
