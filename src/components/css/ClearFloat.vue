<template>
	<div class="clear-float">
		<div class="case1">
			<div class="title">1.父级div定义height</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case2">
			<div class="title">2.结尾处加空div标签clear:both</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div-clear"></div>
			<div class="div2"></div>
		</div>
		<div class="case3">
			<div class="title">3.父级div定义伪类:after和zoom</div>
			<div class="div1 clearfix">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case4">
			<div class="title">4.父级div定义overflow:hidden</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case5">
			<div class="title">5.父级div定义overflow:auto</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case6">
			<div class="title">6.父级div也一起浮动</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case7">
			<div class="title">7.父级div定义display:table</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="div2"></div>
		</div>
		<div class="case8">
			<div class="title">8.结尾处加br标签clear:both</div>
			<div class="div1">
				<div class="left"></div>
				<div class="right"></div>
				<br class="clear-br" />
			</div>
			<div class="div2"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		clearFloat() {
		}
	}
};
</script>

<style lang='scss' scoped>
.title {
  font-size: 18px;
  color: #333;
}
.clear-br {
	clear: both;
}
.clear-float {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  background-color: #fbfbfb;
  padding: 10px;
  box-sizing: border-box;
	.clearfix {
		zoom: 1;
		&::after {
			content: '';
			display: block;
			height: 0;
			visibility: hidden;
			clear: both;
		}
	}
  .case1 {
    .div1 {
      height: 100px;
      margin-top: 10px;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
  .case2 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
		.div-clear {
			clear: both;
		}
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
	.case3 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
	.case4 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
			overflow: hidden;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
	.case5 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
			overflow: auto;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
	.case6 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
			float: left;
			width: 100%;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
			clear: both;
    }
  }
	.case7 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
			display: table;
			width: 100%;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
	.case8 {
    margin-top: 30px;
    .div1 {
      margin-top: 10px;
			width: 100%;
			zoom: 1;
      .left {
        float: left;
        width: 40%;
        height: 100px;
        background: #108ffb;
      }
      .right {
        float: right;
        width: 40%;
        height: 100px;
        background: #b70000;
      }
    }
    .div2 {
      height: 100px;
      margin-top: 10px;
      background-color: #326151;
    }
  }
}
</style>
