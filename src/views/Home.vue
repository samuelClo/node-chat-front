<template>
	<main>
		<div v-if="!connected">
			<h1>Sign up</h1>
			<input
				type="text"
				name="username"
				placeholder="Name"
				v-model="user.username"
			/>

			<input
				type="text"
				name="email"
				placeholder="Email"
				v-model="user.email"
			/>

			<input
				type="password"
				name="password"
				placeholder="Password"
				v-model="user.password"
			/>

			<button type="submit" @click="signUp">
				Create Account
			</button>
		</div>

		<div v-else>
			<h3>Hello {{ user.username }}</h3>
		</div>
	</main>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Home',

	data() {
		return {
			user: {
				email: '',
				password: '',
				username: '',
			},
			connected: false,
		}
	},

	methods: {
		async signUp() {
			try {
				const response = await axios.post(
					'http://localhost:3000/auth/signup',
					this.user
				)

				this.$snotify.success(response.data.msg)
				this.connected = true
			} catch (err) {
				const error = err.response.data.msg || err

				this.$snotify.error(error)
			}
		},
	},
}
</script>

<style>
  main {
    width: 300px;
    margin: 0 auto;
  }
</style>
