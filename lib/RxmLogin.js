"use strict";
class RxmLogin {
    fetchInfoBeforeLogin() {
    }
    init() {
    }
    initValidate() {
    }
    _validateEach() {
        return true;
    }
    onValidatePlacement(error, element) {
    }
    onPostCheckPwdSuccess(data) {
    }
    ;
    onPostCheckPwdError(data) {
    }
    //监听登录按钮点击事件
    onLoginSubmit() {
    }
    checkPwd(data) {
    }
    /**从表单获取用户名、密码等
     *override函数
    */
    getFormVal() {
        let ret = {
            name: '',
            password: '',
            rememberUser: ''
        };
        return ret;
    }
}
