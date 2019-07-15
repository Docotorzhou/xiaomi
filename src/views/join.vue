<template>
        <div class="log_on">
            <div class="log_top">
                <a class="log_link now" href="javascript:;">账号登录</a>
                <span class="line"></span>
                <a class="log_link " href="javascript:;">扫码登录</a>
            </div>
            <div class="log_main">
                <input type="email" class="email" placeholder="邮箱/手机号码/小米ID" v-model="ruleForm.email">
                <div>{{errors.email}}</div>
                <input class="email" type="password"  placeholder="密码" v-model="ruleForm.password">
                <div>{{errors.password}}</div>
            </div>
            <div class="log_bottom">
                <div class="log_button">
                    <a class="link_on" href="javascript:;" @click="join"><span>立即登录/注册</span></a>
                </div>
                <div class="log_nav">
                    <div>
                        <a class="nav_link" href="javascript:;">手机短信登录/注册</a>
                    </div>
                    <div class="nav-right">
                        <a class="nav_join" href="javascript:;" >立即注册</a><span class="lines"></span>
                        <a class="nav-tip" href="javascript:;">忘记密码</a>
                    </div>
                </div>
            </div>
            <div class="other">
                <div class="others">
                    <div class="one"></div>
                    <span>其他方式登录</span>
                    <div class="one"></div>
                </div>
                <div class="icon">
                    <img src="../assets/qq.png">
                    <img src="../assets/微博.png">
                    <img src="../assets/支付宝.png">
                    <img src="../assets/微信.png">
                </div>
            </div>

        </div>
 </template>
    <style lang="scss">

        .log_on{
            display: flex;
            flex-direction: column;

            .log_top{
                margin-top: 40px;
                margin-bottom: 40px;
                display: flex;
                font-size: 24px;
                justify-content: center;
                .line{
                    width: 1px;
                    height: 24px;
                    margin: 0 35px 0 42px;
                    border: 1px solid #e0e0e0;
                }
            }
            .log_main{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .email{
                width: 80%;
                display: block;
                margin-bottom: 20px;
                font-size: 20px;
                padding: 10px 0 10px 20px;
                text-align: left;
            }

        }
        .log_bottom{
            display: flex;
            flex-direction: column;
            align-items: center;
            .log_button{
                text-align: center;
                width: 80%;
                background-color: #FF5722;
                padding: 10px 0px 10px 20px;
                a{
                    font-size: 15px;
                    color: white;
                }

            }
            .log_nav{
                width: 80%;
                display: flex;
                justify-content: space-between;
                a{
                    font-size: 15px;
                }
                .nav_link{
                    color: #FF5722;
                }
                .lines{
                    width: 1px;
                    height: 18px;
                    margin: 0 5px 0 5px;
                    border: 1px solid #e0e0e0;
                }
            }
        }
        .other{
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            .others{
                display: flex;
                .one{
                    width: 30%;
                    height: 0px;
                    border: 1px solid #e0e0e0;
                }
                span{
                    width: 40%;
                    font-size: 18px;
                    text-align: center;
                    height: 1.5em;
                    line-height: 1.5em;
                }
            }
            .icon{display:flex;
                justify-content: space-around;
                img{
                    height: 10%;
                    width: 10%;
                }
            }
        }

    </style>
    <script>
        export  default {
            data(){
                return{
                    ruleForm:{},
                    errors:{
                        email:'',
                        password: ''
                    }
                }
            },
            methods:{
                join(){
                    let data= {
                        email:this.ruleForm.email ,
                        password:this.ruleForm.password
                    };

                    this.axios.post(`api/register`,data).then(res=>{
                        alert('注册成功')
                        this.$router.push({name:'log_on'})
                    }).catch(error=>{
                        console.log(error)
                        this.errors.email=error.errors.email? '请填写正确邮箱地址' : '';
                        this.errors.password=error.errors.password? '请填写密码' : ''
                    })
                }

            }
        }
    </script>