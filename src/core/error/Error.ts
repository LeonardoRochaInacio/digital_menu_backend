interface Error
{
    GetErrorCode(): number;
    GetErrorMessage(realtimeinfo? : string): string;
}

export default Error;