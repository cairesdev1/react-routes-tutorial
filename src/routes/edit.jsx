import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);

  return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Nome</span>
        <input
          placeholder="Primeiro nome"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Ultimo nome"
          aria-label="Last"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>instagram</span>
        <input
          type="text"
          name="instagram"
          placeholder="@cairesdev"
          defaultValue={contact.instagram}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notas</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Salvar</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancelar
        </button>
      </p>
    </Form>
  );
}
