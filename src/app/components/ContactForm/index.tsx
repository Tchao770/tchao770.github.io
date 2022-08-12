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
				placeholder="Email Address"
				size="md"
				style={{ paddingBottom: "1em" }}
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<Textarea
				id="message"
				name="message"
				placeholder={`Message`}
				minRows={4}
				autosize
				size="md"
				style={{ paddingBottom: "1em" }}
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<Button
				type="submit"
				disabled={state.submitting}
				style={{ width: "100%", backgroundColor: "#508DD6" }}
			>
				Send Message
			</Button>
		</form>
	);
};
