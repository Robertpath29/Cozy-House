import { useState } from "react";

export function useFetch(Callback: (page?: number, id?: number) => void): [(page?: number, id?: number) => Promise<void>, boolean, string] {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    async function getAnimalFetch(page?: number, id?: number) {
        try {
            setLoading(true);
            setError("");
            await Callback(page, id);

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