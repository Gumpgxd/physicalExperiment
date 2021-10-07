<template>
  <div class="test">
    <!-- 第五 -->
    <div>
      <h3>实验数据记录与处理</h3>
      <p></p>
      <el-table
        :data="tableData"
        :span-method="arraySpanMethod"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" label=""> </el-table-column>
        <el-table-column prop="amount1" label="Xi">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.amount1 == '11'"
              v-model="form2.completion_m"
            ></el-input>
            <div v-if="scope.row.amount1 == '1'">
              <el-input type="number" v-model="form2.completion_1"></el-input>
            </div>
            <div v-if="scope.row.amount1 == '7'">
              <el-input type="number" v-model="form2.completion_l1"></el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="amount2" label="Xi+20">
          <template slot-scope="scope">
            <div v-if="scope.row.amount2 == '2'">
              <el-input type="number" v-model="form2.completion_2"></el-input>
            </div>
            <div v-if="scope.row.amount2 == '8'">
              <el-input type="number" v-model="form2.completion_l2"></el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="amount3" label="Xi+40">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.amount3 == '3'"
              v-model="form2.completion_3"
            ></el-input>
            <div v-if="scope.row.amount3 == '9'">
              <el-input type="number" v-model="form2.completion_l3"></el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="amount4" label="Xi+60">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.amount4 == '4'"
              v-model="form2.completion_4"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="amount5" label="Xi+80">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.amount4 == '4'"
              v-model="form2.completion_5"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="amount6" label="Xi+100">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.amount4 == '4'"
              v-model="form2.completion_6"
            ></el-input> </template
        ></el-table-column>
      </el-table>
      <div class="count">
        <p>计算劈尖中细丝的直径D=</p>
        <el-form ref="form" :model="form">
          <el-form-item class="zhijin">
            <el-input type="number" v-model="form2.completion_d"></el-input>
          </el-form-item>
        </el-form>
        <p>(mm)</p>
      </div>
      <!-- 第六 思考题-->
      <div>
        <h3>思考题</h3>
        <div>
          <p>1.两束光在空间相遇产生干涉的条件是：</p>
          <el-radio-group v-model="form2.completion_xz1">
            <el-radio label="A" style="padding:0 0 15px 0">A.频率相同</el-radio>
            <el-radio label="B" style="padding:0 0 15px 0">B.振动方向相同</el-radio>
            <el-radio label="C" style="padding:0 0 15px 0">C.相位差恒定，且满足一定条件</el-radio>
            <el-radio label="D">D.ABC都是</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>2.劈尖干涉实验中，若测得20个劈尖干涉条纹间隔L1，劈尖条纹总长为L，则其包含的干涉暗条纹总数为：
</p>
          <el-radio-group v-model="form2.completion_xz2">
            <el-radio label="A" style="padding:0 0 15px 0">A.20L/L1</el-radio>
            <el-radio label="B" style="padding:0 0 15px 0">B.20L1/L</el-radio>
            <el-radio label="C" style="padding:0 0 15px 0">C.L/(20L1)</el-radio>
            <el-radio label="D">D.L1/(20L)</el-radio>
          </el-radio-group>
        </div>
      </div>
      <!-- 第七题 -->
      <div>
        <h3>判断题</h3>
        <div>
          <p>1.牛顿环和劈尖分别属于等厚干涉和等倾干涉 。</p>
          <el-radio-group v-model="form2.completion_pd1">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>
            2.劈尖实验，视场很亮，但是调不出干涉条纹，其原因可能是反光玻璃片放反。
          </p>
          <el-radio-group v-model="form2.completion_pd2">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>3.劈尖实验中，若发现视场半明半暗，则原因是光源亮度不够。</p>
          <el-radio-group v-model="form2.completion_pd3">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
      </div>
       <div class="btn">
        <el-button type="primary" @click="send()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form2: {
        completion_1: "",
        completion_l1: "",
        completion_2: "",
        completion_l2: "",
        completion_3: "",
        completion_l3: "",
        completion_4: "",
        completion_5: "",
        completion_6: "",
        completion_m: "",
        completion_d: "",
        grade_xp:"",
        student_id:"",
        completion_xz1: "",
        completion_xz2: "",
        completion_pd1: "",
        completion_pd2: "",
        completion_pd3: "",
      },
      form: {
        radio1: "",
        radio2: "",
        radio3: "",
        radio4: "",
        radio5: "",
      },
      tableData: [
        {
          name: "读数",
          amount1: "1",
          amount2: "2",
          amount3: "3",
          amount4: "4",
          amount5: "5",
          amount6: "6",
        },
        {
          name: "60条暗条纹的宽度（mm）",
          amount1: "7",
          amount2: "8",
          amount3: "9",
        },
        {
          name: "m/Δl=3×60/L1+L2+L3",
          amount1: "11",
        },
      ],
    };
  },
  created() {
    this.form2.student_id = window.sessionStorage.getItem('student_id')
        //  console.log(this.form2.student_id);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 2) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [1, 5];
        }
      } else if (rowIndex === 1) {
        if (columnIndex === 1) {
          return [1, 2];
        } else if (columnIndex === 2) {
          return [1, 2];
        } else if (columnIndex === 3) {
          return [1, 2];
        }
      }
    },
    async send() {
      const answer1 = (
        this.form2.completion_xz1 +
        this.form2.completion_xz2 +
        this.form2.completion_pd1 +
        this.form2.completion_pd2 +
        this.form2.completion_pd3
      ).split("");
      const answer2 = ["D", "A", "0", "1", "0"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark = mark + 10;
        }
      }
       this.form2.student_id = window.sessionStorage.getItem('student_id')
      //  console.log(this.form2);
      this.form2.grade_xp = mark
      const {data:res} = await this.$http.post('api/experiment/completion',this.form2)
      // console.log(res);
        if(res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      }else {
        this.$message.error(res.msg)
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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 35px;
}
.zhijin {
  margin-bottom: 0;
}
.count p {
  line-height: 15px;
}
.btn {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
  
}
</style>