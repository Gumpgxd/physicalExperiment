<template>
  <div class="test">
    <!-- 第五 -->
    <h3>实验数据记录与处理</h3>
    <p>1.待改装微安表参数记录表待改装微安表参数记录表</p>
    <div class="count4">
      <p style="line-height: 25px">微安表表头满量程电流</p>
      &nbsp; &nbsp;
      <p>Ig=</p>
      &nbsp;
      <el-input type="number" v-model="form2.ig" style="width: 20%"></el-input>
      &nbsp;
      <p>μA</p>
      &nbsp;&nbsp; <P>表头内阻</P>&nbsp;&nbsp;
      <p>Rg=</p>
      &nbsp;
      <el-input type="number" v-model="form2.rg" style="width: 20%"></el-input>
      &nbsp;
      <p>Ω</p>
    </div>
    <!-- 22.电流表改装设计实验数据记录表电流表改装设计实验数据记录表 -->
    <p>2.电流表改装设计实验数据记录表电流表改装设计实验数据记录表</p>
    <el-table
      :data="tableData"
      border
      :show-header="false"
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column prop="sheji1" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="sheji2" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="sheji3" width="120px" align="center">
        <template slot-scope="scope">
          <el-input type="number" v-if="scope.row.sheji3 == '1'" v-model="form2.i"></el-input>
          <div v-if="scope.row.sheji3 == 'Rs ='">Rs =</div>
          <el-input type="number"
            v-if="scope.row.sheji3 == '2'"
            v-model="form2.ix"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sheji4" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.sheji4 == 'mA'">mA</div>
          <el-input type="number"
            v-if="scope.row.sheji4 == '1'"
            v-model="form2.rs"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sheji5" width="80px" align="center">
      </el-table-column>
    </el-table>
    <p>2.电流表改装设计实验数据记录表电流表改装设计实验数据记录表</p>
    <el-table
      :data="tableData1"
      border
      :show-header="false"
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column prop="sheji1" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="sheji2" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="sheji3" width="120px" align="center">
        <template slot-scope="scope">
          <el-input type="number"
            v-if="scope.row.sheji3 == '1'"
            v-model="form2.vm"
          ></el-input>
          <div v-if="scope.row.sheji3 == 'Rf ='">Rf =</div>
          <el-input type="number"
            v-if="scope.row.sheji3 == '2'"
            v-model="form2.vx"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sheji4" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.sheji4 == 'V'">V</div>
          <el-input type="number"
            v-if="scope.row.sheji4 == '1'"
            v-model="form2.rf"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sheji5" width="80px" align="center">
      </el-table-column> </el-table
    ><br />
    <!-- 思考题 -->
    <h3 style="display: inline">六、思考题</h3>
    <h4>选择题</h4>

    <p>1、 测量改装表内阻的方法 ，正确的是</p>
    <el-radio-group v-model="form2.xz1" style="line-height: 25px">
      <el-radio label="A">A.电压法</el-radio>
      <el-radio label="B">B.替代法</el-radio>
      <el-radio label="C">C.等效法</el-radio>
      <el-radio label="D">D.外推法</el-radio>
    </el-radio-group>
    <p>2、 以下关于电流表的表述正确的是</p>
    <el-radio-group v-model="form2.xz2">
      <p>
        <el-radio label="A" style="line-height: 25px"
          >A.
          电流表的内阻较小,如果误用电流表去测电压,有烧毁电表的风险法</el-radio
        >
      </p>
      <p>
        <el-radio label="B" style="line-height: 25px"
          >B. 电流表的档位决定了它可通过的最小电流</el-radio
        >
      </p>
      <p>
        <el-radio label="C" style="line-height: 25px"
          >C. 电流表可以用于测量电压,而无需切换到电压测试档</el-radio
        >
      </p>
      <p>
        <el-radio label="D" style="line-height: 25px"
          >D. 电流表的内阻越大越好</el-radio
        >
      </p>
    </el-radio-group>
    <p>
      3、
      由于磁电式电表结构上的一些缺陷,使得电表在正常条件下测量依然存在误差,引起误差的主要原因有引起误差的主要原因有
    </p>
    <el-radio-group v-model="form2.xz3">
      <p>
        <el-radio label="A" style="line-height: 25px"
          >A. 转动机构的摩擦</el-radio
        >
      </p>
      <p>
        <el-radio label="B" style="line-height: 25px"
          >B. 弹簧的弹性线性不良</el-radio
        >
      </p>
      <p>
        <el-radio label="C" style="line-height: 25px"
          >C. 磁场分布不均匀</el-radio
        >
      </p>
      <p>
        <el-radio label="D" style="line-height: 25px"
          >D. 仪表盘刻度不精确</el-radio
        >
      </p>
      <p>
        <el-radio label="E" style="line-height: 25px">E. 以上都有</el-radio>
      </p>
    </el-radio-group>
    <p>
      4、
      标称电表满刻度时,改装的电表未满刻度或超过满刻度,这种情况扩程电阻是大还是小及其原因,以下描述不正确的是？
    </p>
    <el-radio-group v-model="form2.xz4">
      <p>
        <el-radio label="A" style="line-height: 25px"
          >A.对于改装的电流表，未满刻度时，扩程电阻小，因其分流大</el-radio
        >
      </p>
      <p>
        <el-radio label="B" style="line-height: 25px"
          >B.对于改装的电流表，超过满刻度时，扩程电阻大 ，因其分流小</el-radio
        >
      </p>
      <p>
        <el-radio label="C" style="line-height: 25px"
          >C.对于改装的电压表，未满刻度时，扩程电阻大 ，因其分压大</el-radio
        >
      </p>
      <p>
        <el-radio label="D" style="line-height: 25px"
          >D.对于改装的电压表，超过满刻度时，扩程电阻大 ，因其分压大</el-radio
        >
      </p>
    </el-radio-group>
    <div class="btn">
      <el-button type="primary" @click="send()">提交</el-button>
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
        ig: "",
        rg: "",
        i: "",
        rs: "",
        ix: "",
        vm: "",
        rf: "",
        vx: "",
        xz1: "",
        xz2: "",
        xz3: "",
        xz4: "",
      },
      form: {},
      tableData: [
        {
          sheji1: "直流电流表的扩程设计",
        },
        {
          sheji1: "改装要求",
          sheji2: "量程	 I =",
          sheji3: "1",
          sheji4: "mA",
        },
        {
          sheji1: "改装计算",
          sheji2: "分流电阻",
          sheji3: "Rs =",
          sheji4: "1",
          sheji5: "Ω",
        },
        {
          sheji1: "未知信号电流",
          sheji2: "Ix =",
          sheji3: "2",
          sheji4: "mA",
        },
      ],
      tableData1: [
        {
          sheji1: "直流电压表的扩程设计",
        },
        {
          sheji1: "改装要求",
          sheji2: "量程 VM=	",
          sheji3: "1",
          sheji4: "V",
        },
        {
          sheji1: "改装计算",
          sheji2: "分压电阻",
          sheji3: "Rf =",
          sheji4: "1",
          sheji5: "Ω",
        },
        {
          sheji1: "未知信号电压",
          sheji2: "Ix =",
          sheji3: "2",
          sheji4: "V",
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
        if (columnIndex === 0) {
          return [1, 5];
        }
      } else if (rowIndex === 1) {
        if (columnIndex === 1) {
          return [1, 2];
        }
      } else if (rowIndex === 3) {
        if (columnIndex === 0) {
          return [1, 2];
        }
      }
    },

    async send() {
      const answer1 = (
        this.form2.xz1 +
        this.form2.xz2 +
        this.form2.xz3 +
        this.form2.xz4
      ).split("");
      const answer2 = ["B", "A", "E", "D"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark = mark + 10;
        }
      }
      this.form2.student_id = window.sessionStorage.getItem("student_id");
      //  console.log(this.form2);
      this.form2.grade_xp = mark;
      const { data: res } = await this.$http.post(
        "/api/experiment10/experiment10",
        this.form2
      );
      // console.log(res);
      if (res.code == 200) {
        this.$message.success("上传成功！");
         this.$router.replace('/login')
        // window.location.href =
        //   "http://120.55.71.155/api/experiment10/pdf10?student_id=" +
        //   this.form2.student_id;
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

.count4 {
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
/* .img{
    width: 120px;
    height: 120px;
} */
</style>