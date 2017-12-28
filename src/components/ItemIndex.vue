<template>
    <div class="header-content">
        <div class="header">
            <div class="logo"><img :src="itemData.headerInfo.headerImg"></div>
            <div class="content-detail">
                <div class="line1 font1">
                    <div class="articel-title">随笔:</div>
                    <div class="article-desc">该模块一共{{itemData.headerInfo.articeNum}}篇随笔</div>
                </div>
                <div class="line2 font1">
                    <div class="articel-title">更新文章:</div>
                    <div class="article-desc">{{itemData.headerInfo.articleTitle}}</div>
                </div>
                <div class="line3 font1">
                    <div class="articel-title">更新时间:</div>
                    <div class="article-desc">{{itemData.headerInfo.articleDate}}</div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="wrap">
                <div class="item-list" v-for="(item,index) in itemData.articleList" @click="viewDetail(item.pathUrl)">
                    <div class="item-index font1">{{index+1}}</div>
                    <div class="item-right">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-foot">
                            <div class="item-label tagcloud">
                                <a :class="item.labelColor">{{item.label}}</a>
                            </div>
                            <div class="item-date">{{item.date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: ['itemData'],
    mounted() {

    },
    methods: {
        viewDetail(pathUrl) {
            this.$router.push({ path: pathUrl, query: '' });
        }
    }
};
</script>

<style lang='scss' scoped>
.header-content {
  position: absolute;
  min-height: 100%;
  width: 100%;
  .header {
    display: flex;
    align-items: center;
    align-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    height: 1rem;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    .logo {
      height: 0.9rem;
      width: 0.9rem;
      margin-left: 10px;
    }
    .content-detail {
      margin-left: 15px;
      .line1,
      .line2,
      .line3 {
        display: flex;
        line-height: 1.8;
        .articel-title {
          color: #333;
        }
        .article-desc {
          padding-left: 5px;
        }
      }
    }
  }
  .main-content {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    .wrap {
      padding: 20px 10px 10px 10px;
      .item-list {
        display: flex;
        height: 0.6rem;
        border-bottom: 1px solid #eeeeee;
        .item-index {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.1rem;
          border: 2px solid #ccc;
          border-radius: 5px;
          font-size: 24px;
        }
        .item-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 80%;
          margin-left: 20px;
          padding: 5px 0 5px 0;
          .item-title {
            font-size: 17px;
            line-height: 1.2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .item-foot {
            display: flex;
            align-items: center;
            .item-label {
              line-height: 15px;
            }
            .item-date {
              margin-left: 10px;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
