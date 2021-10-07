<template>
  <div class="test">
    <!-- 第五 -->
    <h3>实验数据记录与处理</h3>
    <p>1. 单摆法测重力加速度实验数据记录处理表</p>
    <!-- 1. 单摆法测重力加速度实验数据记录处理表 -->
    <el-table
      :data="tableData"
      border
      :show-header="false"
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column prop="xuhao" width="50"></el-table-column>
      <el-table-column prop="celiang" width="100">
        <template slot-scope="scope">
          <div v-if="scope.row.celiang == '测量项目/测量次数'">
            测量项目/测量次数
          </div>
          <div v-if="scope.row.celiang == 'l 卷尺测悬线长度'">
            l 卷尺测悬线长度
          </div>
          <div v-if="scope.row.celiang == 'd 游标卡尺测小球直径'">
            d 游标卡尺测小球直径
          </div>
          <div v-if="scope.row.celiang == 't 50次周期摆动时间'">
            t 50次周期摆动时间
          </div>
          <div v-if="scope.row.celiang == 'a'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/fUHMG728KYoeaV8Mf6URWKk4mdd5vUHC9HLTNKbx.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.celiang == 'b'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/RWyyjDjVUj9RlXD2Q2DslGLDxCx0aTUwMcrILmMe.png"
              alt=""
            />
          </div>

          <div v-if="scope.row.celiang == 'c'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/eW8G9TkAD8T1NRwFCVHlsUnrR0Mgxr9WQlDiThVN.png"
              alt=""
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="ceshu1" width="80">
        <template slot-scope="scope">
          <div v-if="scope.row.ceshu1 == '1'">1</div>
          <el-input type="number"
            v-if="scope.row.ceshu1 == 'a'"
            v-model="form2.l1"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu1 == '2'"
            v-model="form2.d1"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu1 == '3'"
            v-model="form2.t1"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu1 == '4'"
            v-model="form2.l6"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu1 == '5'"
            v-model="form2.t6"
          ></el-input>
          <el-input type="number" v-if="scope.row.ceshu1 == '6'" v-model="form2.g"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="ceshu2" width="80">
        <template slot-scope="scope">
          <div v-if="scope.row.ceshu2 == '2'">2</div>
          <el-input type="number"
            v-if="scope.row.ceshu2 == '3'"
            v-model="form2.l2"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu2 == '4'"
            v-model="form2.d2"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu2 == '5'"
            v-model="form2.t2"
          ></el-input>
          <div v-if="scope.row.ceshu2 == 'cm'">cm</div>
          <div v-if="scope.row.ceshu2 == 's'">s</div>
          <div v-if="scope.row.ceshu2 == 'm/s2'">m/s2</div>
        </template>
      </el-table-column>
      <el-table-column prop="ceshu3" width="80">
        <template slot-scope="scope">
          <div v-if="scope.row.ceshu3 == '3'">3</div>
          <el-input type="number"
            v-if="scope.row.ceshu3 == '1'"
            v-model="form2.l3"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu3 == '2'"
            v-model="form2.d3"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu3 == 'a'"
            v-model="form2.t3"
          ></el-input>
          <div v-if="scope.row.ceshu3 == '精确到小数点后2位'">
            精确到小数点后2位
          </div>
          <!-- <div v-if="scope.row.ceshu3 == '精确到小数点后2位'">
            精确到小数点后2位
          </div> -->
          <div v-if="scope.row.ceshu3 == '保留2位有效数'">保留3位有效数</div>
        </template>
      </el-table-column>
      <el-table-column prop="ceshu4" width="80">
        <template slot-scope="scope">
          <div v-if="scope.row.ceshu4 == '4'">4</div>
          <el-input type="number"
            v-if="scope.row.ceshu4 == '5'"
            v-model="form2.l4"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu4 == '6'"
            v-model="form2.d4"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu4 == '7'"
            v-model="form2.t4"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="ceshu5" width="80">
        <template slot-scope="scope">
          <div v-if="scope.row.ceshu5 == '5'">5</div>
          <el-input type="number"
            v-if="scope.row.ceshu5 == '6'"
            v-model="form2.l5"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu5 == '7'"
            v-model="form2.d5"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.ceshu5 == '8'"
            v-model="form2.t5"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="juzhi1" width="50">
        <template slot-scope="scope">
          <div v-if="scope.row.juzhi1 == '平均值'">平均值</div>
          <div v-if="scope.row.juzhi1 == '1'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/TB0cTFsaHiJDaTaAm2FZYpzBUz5DK8Pte9CNK1xY.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.juzhi1 == '2'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/2KHewsGE4eVTv3M5uf6ICoCu07gGlMlUALPfib6f.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.juzhi1 == '3'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/UJfdQfNuMyivO3VbJ93IMa6AWCW4RnIV4TwtfVok.png"
              alt=""
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="juzhi2">
        <template slot-scope="scope">
          <div v-if="scope.row.juzhi2 == '备注'">备注</div>
          <el-input type="number"
            v-if="scope.row.juzhi2 == '1'"
            v-model="form2.la"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.juzhi2 == '2'"
            v-model="form2.da"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.juzhi2 == '3'"
            v-model="form2.ta"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="beizhu1" width="80"> </el-table-column>
      <el-table-column prop="beizhu2" width="150">
        <template slot-scope="scope">
          <div v-if="scope.row.beizhu2 == '精确到小数点后2位'">
            精确到小数点后2位
          </div>
          <div v-if="scope.row.beizhu2 == '精确到小数点后3位'">
            精确到小数点后3位
          </div>
          <!-- <div v-if="scope.row.beizhu2 == '精确到小数点后2位'">
            精确到小数点后2位
          </div> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 2.有效数处理与误差计算 -->
    <p>2.有效数处理与误差计算</p>

    <el-table
      :data="tableData1"
      border
      :show-header="false"
      style="width: 100%"
      :span-method="arraySpanMethod1"
    >
      <el-table-column prop="wucha" width="100"> </el-table-column>
      <el-table-column prop="jisuanx" width="150">
        <template slot-scope="scope">
          <div v-if="scope.row.jisuanx == '误差计算项'">误差计算项</div>
          <div v-if="scope.row.jisuanx == '摆长绝对误差平均值'">
            摆长绝对误差平均值
          </div>

          <div v-if="scope.row.jisuanx == 'a'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/59sklXcmDQ7z74sUOlMxC6573oqoYy3fxKH2qSc2.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.jisuanx == 'c'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/FOlppESHslOlTYfs2fCk6fETm53XtBrw9UEMRusR.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.jisuanx == 'd'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/zGzcF5dNYpRjpqQSfpEuyNrVoBSJ817hCfGU3KQt.png"
              alt=""
            />
          </div>
          <div v-if="scope.row.jisuanx == 'g 的相对误差'">g 的相对误差</div>
          <div v-if="scope.row.jisuanx == '𝜎_𝑔= 𝑔 ̅×𝛿_𝑔'">𝜎_𝑔= 𝑔 ̅×𝛿_𝑔</div>
        </template>
      </el-table-column>
      <el-table-column prop="gongshi" width="150">
        <template slot-scope="scope">
          <div v-if="scope.row.gongshi == '计算公式'">计算公式</div>
          <div v-if="scope.row.gongshi == 'a'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/Vr51WHEIKDzEYUfhzpwGG4sDA0fTD58V52aJif9N.png"
              alt=""
            />
          </div>
          <el-input type="number"
            v-if="scope.row.gongshi == '2'"
            v-model="form2.n2"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.gongshi == '3'"
            v-model="form2.n3"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.gongshi == '4'"
            v-model="form2.n4"
          ></el-input>
          <div v-if="scope.row.gongshi == 'e'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/c0fgFGJN35KbywqeSXBoWKqhzAua7xEyHU0JJibU.png"
              alt=""
            />
          </div>
          <el-input type="number"
            v-if="scope.row.gongshi == '6'"
            v-model="form2.n6"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="jieguo1">
        <template slot-scope="scope">
          <div v-if="scope.row.jieguo1 == '计算结果'">计算结果</div>
          <el-input type="number"
            v-if="scope.row.jieguo1 == '1'"
            v-model="form2.n1"
          ></el-input>
          <div v-if="scope.row.jieguo1 == '%'">%</div>
          <div v-if="scope.row.jieguo1 == 's'">s</div>
          <el-input type="number"
            v-if="scope.row.jieguo1 == '5'"
            v-model="form2.n5"
          ></el-input>
          <div v-if="scope.row.jieguo1 == 'm/s2'">m/s2</div>
        </template>
      </el-table-column>
      <el-table-column prop="jieguo2" width="50px"> </el-table-column>
      <el-table-column prop="beizhu" width="150px"> </el-table-column>
    </el-table>

    <h3>实验结果与分析</h3>
    <p>1. 实验结果</p>
    <p>用单摆法测得实验所在地点重力加速度为：</p>
    <div class="count">
      <p>
        <img
          src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/wdi5vUMeCXChQAYKTRavjFfXPRjaoYtzc9BTrvoN.png"
          height="40"
          width="130"
        />
      </p>
      <el-input type="number" v-model="form2.y1" style="width: 20%"></el-input>
      &nbsp; &nbsp;
      <P>±</P>
      &nbsp; &nbsp;
      <el-input type="number" v-model="form2.y2" style="width: 20%"></el-input>
      <P>m/s2</P>
    </div>
    <div>
      <h3>思考题</h3>
      <div>
        <p>2.测量周期T时,需要连续测量多个周期，这是为了</p>
        <el-radio-group v-model="form2.xz1">
          <el-radio label="A" style="padding: 0 0 15px 0">
            A.减少人为偶然误差</el-radio
          >
          <el-radio label="B" style="padding: 0 0 15px 0"
            >B.减少系统方法误差</el-radio
          >
          <el-radio label="C" style="padding: 0 0 15px 0"
            >C.延长测量时间</el-radio
          >
        </el-radio-group>
      </div>
      <div>
        <p>3.一个单摆在做简谐运动 ，下列说法正确的是</p>
        <el-radio-group v-model="form2.xz2">
          <el-radio label="A" style="padding: 0 0 15px 0"
            >A.单摆的振幅越大 ，振动周期越大</el-radio
          >
          <el-radio label="B" style="padding: 0 0 15px 0"
            >B.摆球的质量越大 ，振动周期越大</el-radio
          ><br />
          <el-radio label="C" style="padding: 0 0 15px 0"
            >C.若将摆线变短，振动周期将变大</el-radio
          >
          <el-radio label="D">D.若将单摆拿到月球上， 振动周期将变大</el-radio>
        </el-radio-group>
        <div class="btn">
          <el-button type="primary" @click="send()">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script>
export default {
  data() {
    return {
      form2: {
        student_id: "",
        grade_xp: "",
        l1: "",
        d1: "",
        t1: "",
        l6: "",
        t6: "",
        g: "",
        l2: "",
        d2: "",
        t2: "",
        l3: "",
        l4: "",
        l5: "",
        d3: "",
        d4: "",
        d5: "",
        t3: "",
        t4: "",
        t5: "",
        la: "",
        da: "",
        ta: "",
        n1: "",
        n2: "",
        n3: "",
        n4: "",
        n5: "",
        n6: "",
        y1: "",
        y2: "",
        xz1: "",
        xz2: "",
      },
      tableData: [
        {
          xuhao: "序号",
          celiang: "测量项目/测量次数",
          ceshu1: "1",
          ceshu2: "2",
          ceshu3: "3",
          ceshu4: "4",
          ceshu5: "5",
          juzhi1: "平均值",
          juzhi2: "备注",
        },
        {
          xuhao: "1",
          celiang: "l 卷尺测悬线长度",
          ceshu1: "a",
          ceshu2: "3",
          ceshu3: "1",
          ceshu4: "5",
          ceshu5: "6",
          juzhi1: "1",
          juzhi2: "1",
          beizhu1: "cm",
          beizhu2: "精确到小数点后2位",
        },
        {
          xuhao: "2",
          celiang: "d 游标卡尺测小球直径",
          ceshu1: "2",
          ceshu2: "4",
          ceshu3: "2",
          ceshu4: "6",
          ceshu5: "7",
          juzhi1: "2",
          juzhi2: "2",
          beizhu1: "cm",
          beizhu2: "精确到小数点后3位",
        },
        {
          xuhao: "3",
          celiang: "t 50次周期摆动时间",
          ceshu1: "3",
          ceshu2: "5",
          ceshu3: "a",
          ceshu4: "7",
          ceshu5: "8",
          juzhi1: "3",
          juzhi2: "3",
          beizhu1: "s",
          beizhu2: "精确到小数点后2位",
        },
        {
          xuhao: "4",
          celiang: "a",
          ceshu1: "4",
          ceshu2: "cm",
          ceshu3: "精确到小数点后2位",
        },
        {
          xuhao: "5",
          celiang: "b",
          ceshu1: "5",
          ceshu2: "s",
          ceshu3: "精确到小数点后2位",
        },
        {
          xuhao: "6",
          celiang: "c",
          ceshu1: "6",
          ceshu2: "m/s2",
          ceshu3: "保留2位有效数",
        },
      ],
      tableData1: [
        {
          wucha: "误差类别",
          jisuanx: "误差计算项",
          gongshi: "计算公式",
          jieguo1: "计算结果",
          jieguo2: "备注",
        },
        {
          wucha: "直接测量误差计算",
          jisuanx: "摆长绝对误差平均值",
          gongshi: "a",
          jieguo1: "1",
          jieguo2: "cm",
          beizhu: "保留1位有效数",
        },
        {
          wucha: "摆长相对误差",
          jisuanx: "a",
          gongshi: "2",
          jieguo1: "%",
          jieguo2: "保留2位有效数",
        },
        {
          wucha: "振动周期绝对误差平均值",
          jisuanx: "c",
          gongshi: "3",
          jieguo1: "s",
          jieguo2: "保留1位有效数",
        },
        {
          wucha: "振动周期相对误差",
          jisuanx: "d",
          gongshi: "4",
          jieguo1: "%",
          jieguo2: "保留2位有效数",
        },
        {
          wucha: "间接测量误差计算",
          jisuanx: "g 的相对误差",
          gongshi: "e",
          jieguo1: "5",
          jieguo2: "%",
          beizhu: "保留2位有效数",
        },
        {
          wucha: "g 的绝对误差",
          jisuanx: "𝜎_𝑔= 𝑔 ̅×𝛿_𝑔",
          gongshi: "6",
          jieguo1: "m/s2",
          jieguo2: "保留1位有效数",
        },
      ],
    };
  },
  created() {
    this.form2.student_id = window.sessionStorage.getItem("student_id");
    // console.log(this.form2.student_id);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 7) {
          return [1, 2];
        } else if (columnIndex === 8) {
          return [1, 2];
        }
      } else if (rowIndex === 4) {
        if (columnIndex === 2) {
          return [1, 7];
        }
      } else if (rowIndex === 5) {
        if (columnIndex === 2) {
          return [1, 7];
        }
      } else if (rowIndex === 6) {
        if (columnIndex === 2) {
          return [1, 7];
        }
      }
    },
    arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 3) {
          return [1, 2];
        }
      } else if (rowIndex === 1) {
        if (columnIndex === 0) {
          return [4, 1];
        }
      } else if (rowIndex === 5) {
        if (columnIndex === 0) {
          return [2, 1];
        }
      }
    },

    async send() {
      // console.log(this.form2.student_id);
      const answer1 = (this.form2.xz1 + this.form2.xz2).split("");
      const answer2 = ["A", "D"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark = mark + 5;
        }
      }
      this.form2.student_id = window.sessionStorage.getItem("student_id");
      // console.log(this.form2);
      this.form2.grade_xp = mark;
      const { data: res } = await this.$http.post(
        "api/pendulum/completion3",
        this.form2
      );
      if (res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      } else {
        this.$message.error(res.msg);
      }
    },
  },
};
</script>

<style scoped>
.test {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.count {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.dui {
  margin-bottom: 0;
}
p {
  line-height: 25px;
}
/* .zhuzhu .el-table{
  height: 30%;
} */

.btn {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
}
.el-table p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>