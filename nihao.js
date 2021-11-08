describe("Login",function(){

    const Url = "https://www.baidu.com/"

    const Name = "13932869520"

    const Password = "Hh991230"

    it("访问Url",function(){
        // 访问目标URL
        cy.visit(Url)
        // 目标URL断言是否包含'baidu'这个字符
        cy.url()
            .should('contain','baidu')
        // 调整页面大小为1600，900。以便用来操作被页面大小所影响到的定位元素
        cy.viewport(1600,900)
        // 获取登陆button的定位元素并进行点击操作
        cy.get("#s-top-loginbtn")
            .click()
        // 获取账号输入框的定位元素并进行输入操作
        cy.get("#TANGRAM__PSP_11__userName")
            .type(Name)
        // 获取密码输入框的定位元素并进行输入操作
        cy.get("#TANGRAM__PSP_11__password")
            .type(Password)
        // 获取短信登录的定位元素并进行点击操作
        // cy.get("#TANGRAM__PSP_11__changeSmsCodeItem")
        //     .click()
        // 等待10秒
        // cy.wait(10000)
        // 获取登陆button的定位元素并进行点击操作
        cy.get('#TANGRAM__PSP_11__submit')
            .click()
        // 当需要验证码/图形验证时的操作，还未搞明白。记作todo项！！！
        // cy.get('#vcode-spin-button-p423')
        //     .trigger('mousedown')
        // 利用页面元素来校验是否登陆成功
        cy.wait(3000)
        cy.get(".user-name.c-font-normal.c-color-t")
            .should('have.text','当初9527')
        
    })

})