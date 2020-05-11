
type TRxmLoginPwd={
    name:string
    password :string
    rememberUser? :string
}
type TRxmLoginSubmit={
    Data?:TRxmLoginPwd|any,
    encrypt?:boolean,
    deviceInfo:boolean,
    success?:(d?:Object)=>void,
    fail?:(d?:Object)=>void
}
class RxmLogin {
    fetchInfoBeforeLogin ():void{
    }
    init(): void {
    }
    initValidate  ():void {
    }
    _validateEach ():boolean {
        return true
    }
    onValidatePlacement  (error:any, element:any) {
     
    }
    onPostCheckPwdSuccess  (data:any) {
    };
    onPostCheckPwdError  (data:any) {
    }
  
    //监听登录按钮点击事件
    onLoginSubmit ():void  {
    }
    checkPwd(data?:TRxmLoginSubmit):void{
    }
    /**从表单获取用户名、密码等 
     *override函数
    */
    getFormVal():TRxmLoginPwd{
        let ret:TRxmLoginPwd={
            name:'',
            password:'',
            rememberUser:''
        }
        return  ret;
    }
}