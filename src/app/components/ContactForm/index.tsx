import { useForm, ValidationError } from "@formspree/react";
import { Button, Textarea, TextInput } from "@mantine/core";

export const ContactForm = () => {
	const [state, handleSubmit] = useForm("moqrgkdp");
	if (state.succeeded) {
		return <p>Thanks for reaching out! I'll reply soon :D</p>;
	}
	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: "40rem", width: "90%" }}
		>
			<TextInput
				id="email"
				type="email"
				name="email"
				label="Email Address"
				placeholder="name@email.com"
				size="xl"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<Textarea
				id="message"
				name="message"
				label="Message"
				placeholder={`I'm like "Hey, what's up? Hello"`}
				minRows={4}
				autosize
				size="xl"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<Button
				type="submit"
				disabled={state.submitting}
				style={{ width: "100%" }}
			>
				Send
			</Button>
		</form>
	);
};
