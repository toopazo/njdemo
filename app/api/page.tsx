import ClientDataFetcher from './client_fetch';
import ServerDataFetcher from './server_fetch';

export default async function HomePage() {
    return (
        <ul>
            {/* {posts2.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))} */}
            <h3>Data from API - SSC</h3>
            <ServerDataFetcher />
            <h3>Data from API - CSC</h3>
            <ClientDataFetcher />
        </ul>
    )
}

