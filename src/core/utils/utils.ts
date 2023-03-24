class Utils
{
    public static EmailRegexPattern: string = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"; 

    public static isEmailAddress(str: string): boolean
    {
        let regex = new RegExp(Utils.EmailRegexPattern); 
        return regex.test(str);
    };
    
    public static getTimestamp(): number
    {
        return Math.round(Date.now() / 1000);
    }
}

export default Utils;