import Error from "./Error";

class ErrorDefault implements Error
{
    GetErrorCode(): number {
        return 1;
    }

    GetErrorMessage(realtimeinfo? : string): string {
        if(realtimeinfo)
        {
            return "Error code " + this.GetErrorCode().toString() + " - " + realtimeinfo;
        }

        return "Error code " + this.GetErrorCode().toString();
    }
}

export default ErrorDefault;