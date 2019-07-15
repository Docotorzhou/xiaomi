<template>
    <div id="wrapper">
        <div class="page-address-edit" data-log="地址">

            <div class="edit-box">
                <ul class="ui-list">
                    <li class="ui-list-item">
                        <div class="label">收货人：</div>
                        <div class="ui-input"><input v-model="ruleForm.name"  placeholder="真实姓名" name="consignee" maxlength="15" type="text"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">手机号码：</div>
                        <div class="ui-input"><input v-model="ruleForm.tel" placeholder="手机号" name="tel" maxlength="13" type="tel"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">所在地区：</div>
                        <div class="ui-input" @click="show">
                            <input v-model="ruleForm.pca" placeholder="省 市 区" name="pcd" maxlength="20" type="text" readonly="readonly" value="">
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">街道地址：</div>
                        <div class="ui-input"><input v-model="ruleForm.detail" placeholder="详细地址" name="address" maxlength="120" type="text"></div>
                    </li>
                </ul>
                <div class="save-button">
                    <a href="javascript:;" class="ui-button" @click="keep_address"><span>保存地址</span></a>
                </div>
            </div>


            <div class="ui-mask" style="display:none;" ></div>
            <div class="ui-pop" style="display:none;">
                <div class="ui-pop-content">
                    <div class="region-list">
                    <v-distpicker @selected="sel" type="mobile"></v-distpicker>
                    </div>
                </div>
                <div class="ui-pop-title">选择所在地区</div>
                <div class="ui-pop-close"><a><span class="icon-10chahaokuang" @click="close"></span></a></div>
            </div>
            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>
<script>
    import  VDistpicker from 'v-distpicker'
    export  default {
        name:'demo',
        components:{VDistpicker},
        data(){
           return{
               ruleForm:{
                   pca:'',
                   name:'',
                   tel:'',
                   detail:''
               }
           }
        },
        methods:{

            keep_address(){
                this.axios.post('api/address',this.ruleForm).then(res=>{
                    console.log(res)
                    this.$router.push({name:'product_address'})
                })
            },
            show(){
                $('.ui-mask').css('display','block');
                $('.ui-pop').css('display','block')
            },
            close(){
                $('.ui-mask').css('display','none');
                $('.ui-pop').css('display','none')

            },
            sel:function(x){
                console.log(x)
               this.ruleForm.pca = x.province.value + " " + x.city.value + " " + x.area.value;
                $('.ui-mask').css('display','none');
                $('.ui-pop').css('display','none')
            },

        }

    }
</script>