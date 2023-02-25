export const Message = ({data, loading, error}) => {

    return (
        <>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error.message}</p>
            ) : (
                <p>{data.status}</p>
            )}
        </>
    )
}