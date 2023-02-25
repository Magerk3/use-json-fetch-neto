import { useJsonFetch } from "../hooks/useJsonFetch";
import { Message } from "./Message";

export const Error = () => {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

    return (
        <div>
            <Message data={data} loading={loading} error={error} />
        </div>
    );
};
