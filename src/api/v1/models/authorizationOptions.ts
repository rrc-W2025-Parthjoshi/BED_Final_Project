export interface AuthorizationOptions {
    hasRole: Array<"admin" | "trainer">;
    allowSameUser?: boolean;
}