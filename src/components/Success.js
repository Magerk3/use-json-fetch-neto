import { useJsonFetch } from "../hooks/useJsonFetch";
import { Message } from "./Message";

export const Success = () => {
    const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
    return (
        <div>
            <Message data={data} loading={loading} error={error} />
        </div>  
    );
};
