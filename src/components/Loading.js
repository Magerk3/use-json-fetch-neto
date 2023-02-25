import { useJsonFetch } from "../hooks/useJsonFetch"
import { Message } from "./Message"

export const Loading = () => {
    const [data,loading,error] = useJsonFetch('http://localhost:7070/loading')

    return (
        <div>
            <Message data={data} loading={loading} error={error} />
        </div>
    )
}