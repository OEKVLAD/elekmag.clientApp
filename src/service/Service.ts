export default abstract class Service {
    private static readonly restApiUrl: string = "https://elekmag.com.ua/wp-json";
    private static readonly defaultHeaders: { withCredentials: boolean; auth: { password: string; username: string }; params: {} }= {
        params: {},
        withCredentials: true,
        auth: {
            username: "ck_1473f3fdfd193b72a461fd19f93889cad4b14a08",
            password: "cs_2ffd60420c26b044985b0e1ca1a736ffeec2223e"
        }
    };

    public static get getDefaultHeaders(): any{
        return this.defaultHeaders;
    }
    public static getProductURL(): string{
        return `${ this.restApiUrl }/wc/v3/products`;
    }
    public static getProductAttributesTermsURL(attributeId : number): string{
        return `${ this.restApiUrl }/wc/v3/products/attributes/${attributeId}/terms`;
    }
}