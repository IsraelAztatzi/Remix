import { Form, useActionData, useNavigation } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { db } from '../services/db.js'


export const action = async ({ request }) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')

    const fieldErrors = {
        title: title.length < 3 ? 'Title must be at least 3 characters' : null,
        body: body.length < 10 ? 'Body must be at least 10 characters' : null
    }

    const hasErrors = Object.values(fieldErrors).some(Boolean)
    const fields = { body, title }
    if (hasErrors) {
        return badRequest({ fieldErrors, fields })
    }
    const post = await db.post.create({ data: fields })
    /*await new Promise(resolve => {
        setTimeout(resolve, 5000)
    })
    const post = await db.post.create({ data: { body, title } })*/

    return redirect(`/${post.id}`)

}
export function ErrorBoundary({ error }) {
    return (
        <div>
            <strong>Algo salio mal:C</strong>
        </div>
    )
}

export default function CreatePost() {
    const navigation = useNavigation()
    const actionData = useActionData()

    const { fieldErrors } = actionData ?? {}
    const { title: titleError, body: bodyError } = fieldErrors ?? {}
    return (
        <>
            <h2>Create new post</h2>
            <Form method="POST" disabled={navigation.state === 'submitting'}>
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input placeholder="Title of post" type="text" name="title" id="title" />
                    {titleError && <small style={{ color: 'red' }}>{titleError}</small>}
                </div>
                <div>
                    <label htmlFor="body">Body</label><br />
                    <textarea placeholder="Content of post" name="body" id="body" />
                    {bodyError && { bodyError }}
                </div>

                <button type="submit" >
                    {navigation.state === 'submitting'
                        ? 'Wait for it...'
                        : 'Create Post'

                    }
                </button>
            </Form >
        </>
    )
}
