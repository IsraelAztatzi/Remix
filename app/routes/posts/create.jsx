export default function CreatePost() {
    return (
        <>
            <h2>Create new post</h2>
            <form method="POST">
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="body">Body</label><br />
                    <textarea name="body" id="body" />
                </div>

                <button type="submit">Add new post</button>
            </form>
        </>
    )
}
