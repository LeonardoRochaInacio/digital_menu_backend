class APIReturnState
{
    public static success(): string
    {
        return "Successfull requested";
    };

    public static error(str: string): Error
    {
        return new Error("Error: " + str);
    };

    public static unauthorizedRole(): string
    {
        return "Unauthorized role!";
    };

}

export default APIReturnState;