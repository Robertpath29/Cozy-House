import { useState } from "react";

export function useFetch(Callback: (page: number) => void): [(page: number) => Promise<void>, boolean, string] {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    async function getAnimalFetch(page: number) {
        try {
            setLoading(true);
            setError("");
            await Callback(page);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false)
        };
    };

    return [getAnimalFetch, loading, error];
}