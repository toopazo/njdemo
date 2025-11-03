'use client';

import { useState, useEffect } from 'react';

export default function ClientDataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8081/api/v1/recursos'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // const data = JSON.stringify(data, null, 2);
    const person_list = data._embedded.personList;

    let content = [];
    for (const item of person_list) {
        // console.log(`Name: ${item.name}, Age: ${item.age}`);
        content.push(<li key={item.id}>Id: {item.id}, Name: {item.name}, Age: {item.age}</li>)
    }

    return (
        <>
            {content}
        </>
    );
}