<template>
    <div id="wrapper">
        <div class="page-address-edit" data-log="地址">

            <div class="edit-box">
                <ul class="ui-list">
                    <li class="ui-list-item">
                        <div class="label">收货人：</div>
                        <div class="ui-input"><input placeholder="真实姓名" name="consignee" maxlength="15" type="text"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">手机号码：</div>
                        <div class="ui-input"><input placeholder="手机号" name="tel" maxlength="13" type="tel"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">所在地区：</div>
                        <div class="ui-input">
                            <input placeholder="省 市 区" name="pcd" maxlength="20" type="text" readonly="readonly" value="">
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">街道地址：</div>
                        <div class="ui-input"><input placeholder="详细地址" name="address" maxlength="120" type="text"></div>
                    </li>
                </ul>
                <div class="save-button">
                    <a href="javascript:;" class="ui-button"><span>保存地址</span></a>
                </div>
            </div>


            <div class="ui-mask" style="display:none;"></div>
            <div class="ui-pop" style="display:none;">
                <div class="ui-pop-content">
                    <div class="region-list">
                        <ul class="ui-list ui-list-bordered">
                            <li class="ui-list-item">北京</li>
                            <li class="ui-list-item">天津</li>
                            <li class="ui-list-item">河北</li>
                            <li class="ui-list-item">山西</li>
                            <li class="ui-list-item">内蒙古</li>
                            <li class="ui-list-item">辽宁</li>
                            <li class="ui-list-item">吉林</li>
                            <li class="ui-list-item">黑龙江</li>
                            <li class="ui-list-item">上海</li>
                            <li class="ui-list-item">江苏</li>
                            <li class="ui-list-item">浙江</li>
                            <li class="ui-list-item">安徽</li>
                            <li class="ui-list-item">福建</li>
                            <li class="ui-list-item">江西</li>
                            <li class="ui-list-item">山东</li>
                            <li class="ui-list-item">河南</li>
                            <li class="ui-list-item">湖北</li>
                            <li class="ui-list-item">湖南</li>
                            <li class="ui-list-item">广东</li>
                            <li class="ui-list-item">广西</li>
                            <li class="ui-list-item">海南</li>
                            <li class="ui-list-item">重庆</li>
                            <li class="ui-list-item">四川</li>
                            <li class="ui-list-item">贵州</li>
                            <li class="ui-list-item">云南</li>
                            <li class="ui-list-item">西藏</li>
                            <li class="ui-list-item">陕西</li>
                            <li class="ui-list-item">甘肃</li>
                            <li class="ui-list-item">青海</li>
                            <li class="ui-list-item">宁夏</li>
                            <li class="ui-list-item">新疆</li>
                        </ul>
                    </div>
                </div>
                <div class="ui-pop-title">选择所在地区</div>
                <div class="ui-pop-close"><a><span class="icon-10chahaokuang"></span></a></div>
            </div>
            <div class="popup-risk-check"></div>
        </div>
    </div>

</template>
<script>
    $("input[name='pcd']").click(function () {
        $('.ui-mask').show();
        $('.ui-pop').show();
    });
</script>