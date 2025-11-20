'use server'; // Mark the file as a Server Component and enable Server Actions


export default async function ServerDataFetcher() {
    const api_url = 'https://dsy1103njdemo-production.up.railway.app/api/v1/recursos'
    const response = await fetch(api_url, { cache: 'no-store' })
    const data = await response.json()
    const person_list = data._embedded.personList

    const content = []
    for (const item of person_list) {
        // console.log(`Name: ${item.name}, Age: ${item.age}`);
        content.push(<li key={item.id}>Id: {item.id}, Name: {item.name}, Age: {item.age}</li>)
    }
    return <>{content}</>
}

export async function createPost(formData: FormData) {
    const title = formData.get('title');
    const content = formData.get('content');
    // Logic to save the new post to your database
    console.log('Creating post:', { title, content });
    // You can return data or redirect here
}