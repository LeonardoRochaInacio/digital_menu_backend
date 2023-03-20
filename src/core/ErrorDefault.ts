import Error from "./Error";

class ErrorDefault implements Error
{
    GetErrorCode(): number {
        return 1;
    }

    GetErrorMessage(): string {
        return "Error code " + this.GetErrorCode().toString();
    }
}

export default ErrorDefault;