<template>
    <div class="bottom">
        <ul>
            <li>
                <router-link to="/" active-class="active" exact>
                    <img src="../assets/shang.png" alt="" >
                    <span>商城</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about"  active-class="active">
                    <img src="../assets/fenlei.png" alt="" >
                    <span>分类</span>
                </router-link>
            </li>
            <li>
                <router-link to="/product_shop"  active-class="active">
                    <img src="../assets/gou.png" alt="" >
                    <span>购物车</span>
                </router-link>
            </li>
            <li>
                <router-link to="/user"  active-class="active">
                    <img src="../assets/fuwu.png" alt="">
                    <span>服务</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    .all {
        margin-bottom: 120px;
    }

    .bottom {
        width: 100%;
        background-color: white;
        position: fixed;
        height: 50px;
        bottom: 0;
        z-index: 1;

        ul {
            display: flex;
            text-decoration: none;

            li {
                flex-basis: 25%;
                list-style: none;

                a {
                    display: flex;
                    flex-direction: column;
                    text-decoration: none;
                    align-items: center;
                }

                .active {
                    background-color: navajowhite;

                }

                img {
                    width: 40%;
                }

                span {
                    display: block;
                }
            }
        }
    }
</style>