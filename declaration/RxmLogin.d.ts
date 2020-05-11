declare type TRxmLoginPwd = {
    name: string;
    password: string;
    rememberUser?: string;
};
declare type TRxmLoginSubmit = {
    Data?: TRxmLoginPwd | any;
    encrypt?: boolean;
    deviceInfo: boolean;
    success?: (d?: Object) => void;
    fail?: (d?: Object) => void;
};
declare class RxmLogin {
    fetchInfoBeforeLogin(): void;
    init(): void;
    initValidate(): void;
    _validateEach(): boolean;
    onValidatePlacement(error: any, element: any): void;
    onPostCheckPwdSuccess(data: any): void;
    onPostCheckPwdError(data: any): void;
    onLoginSubmit(): void;
    checkPwd(data?: TRxmLoginSubmit): void;
    /**从表单获取用户名、密码等
     *override函数
    */
    getFormVal(): TRxmLoginPwd;
}
