import React from 'react'

import { createPost } from '@/actions/post'

export default function CreatePostForm() {

    return (
        <div className="mx-auto mt-10">
            <form action={createPost} className="bg-white p-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                <input type="text" id="title" name="title" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />

                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mt-4">Content:</label>
                <textarea id="content" name="content" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>

                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </form>
        </div>
    )
}
