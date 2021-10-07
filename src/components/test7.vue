<template>
  <div class="test7">
    <!-- 第五题开始 -->
    <div>
      <h3>实验数据记录与处理</h3>
      <p></p>
    </div>
    <!-- 第一个表格 -->
    <el-table :data="tableData" border style="width: 100%" :span-method="arraySpanMethod">
      <el-table-column label="1.自组式直流电桥测量电阻值">
        <el-table-column label="测试内容" prop="ratio" width="180"></el-table-column>
        <el-table-column label="1" prop="elec_ratio" highlight-current-row="false">
          <template slot-scope="scope">
            <div v-if="scope.row.elec_ratio == 500">500</div>
            <el-input type="number" v-if="scope.row.elec_ratio == 1" v-model="form.ra1"></el-input>
            <el-input type="number" v-if="scope.row.elec_ratio == 2" v-model="form.rx_a1"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_ratio == 2000">2000</div>
            <el-input type="number" v-if="scope.row.wait_ratio == 1" v-model="form.ra2"></el-input>
            <el-input type="number" v-if="scope.row.wait_ratio == 2" v-model="form.rx_a2"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_result == 100">100</div>
            <el-input type="number" v-if="scope.row.wait_result == 1" v-model="form.ra3"></el-input>
            <el-input type="number" v-if="scope.row.wait_result == 2" v-model="form.rx_a3"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
            <div class="count7">
              <p v-if="scope.row.result == 1">RX =</p>
              <el-col :span="12">
                <el-input type="number" v-if="scope.row.result == 1" v-model="form.rx" style="width: 75px"></el-input>
              </el-col>
              <p v-if="scope.row.result == 1">Ω</p>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第二个表格 -->
    <el-table :data="tableData2" border style="width: 100%" :span-method="arraySpanMethod1">
      <el-table-column label="2.测量并计算自组式直流电桥的灵敏度">
        <el-table-column label="测试内容" prop="ratio" width="180"></el-table-column>
        <el-table-column label="1" prop="elec_ratio" highlight-current-row="false">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.elec_ratio == 11" v-model="form.rb1"></el-input>
            <div v-if="scope.row.elec_ratio == 1">1</div>
            <el-input type="number" v-if="scope.row.elec_ratio == 4" v-model="form.ra_change1"></el-input>
            <el-input type="number" v-if="scope.row.elec_ratio == 5" v-model="form.s1"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.wait_ratio == 1" v-model="form.rb2"></el-input>
            <div v-if="scope.row.wait_ratio == 2">2</div>
            <el-input type="number" v-if="scope.row.wait_ratio == 4" v-model="form.ra_change2"></el-input>
            <el-input type="number" v-if="scope.row.wait_ratio == 5" v-model="form.s2"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.wait_result == 1" v-model="form.rb3"></el-input>
            <div v-if="scope.row.wait_result == 3">3</div>
            <el-input type="number" v-if="scope.row.wait_result == 4" v-model="form.ra_change3"></el-input>
            <el-input type="number" v-if="scope.row.wait_result == 5" v-model="form.s3"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
            <div class="count3 user_info_page">
              <p v-if="scope.row.result == 1">S =</p>
              <el-col :span="12">
                <el-input type="number" v-if="scope.row.result == 1" v-model="form.s" style="width: 100px"></el-input>
              </el-col>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第三个表格 -->
    <el-table :data="tableData3" border style="width: 100%" :span-method="arraySpanMethod">
      <el-table-column label="3.自组式直流电桥测量电阻值">
        <el-table-column label="测试内容" prop="ratio" width="180"></el-table-column>
        <el-table-column label="1" prop="elec_ratio" highlight-current-row="false">
          <template slot-scope="scope">
            <div v-if="scope.row.elec_ratio == 200">200</div>
            <div v-if="scope.row.elec_ratio == 100">100</div>
            <el-input type="number" v-if="scope.row.elec_ratio == 1" v-model="form.rc1"></el-input>
            <el-input type="number" v-if="scope.row.elec_ratio == 2" v-model="form.rx_b1"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_ratio == 500">500</div>
            <div v-if="scope.row.wait_ratio == 1000">1000</div>
            <el-input type="number" v-if="scope.row.wait_ratio == 1" v-model="form.rc2"></el-input>
            <el-input type="number" v-if="scope.row.wait_ratio == 2" v-model="form.rx_b2"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_result == 1000">1000</div>
            <div v-if="scope.row.wait_result == 4000">4000</div>
            <el-input type="number" v-if="scope.row.wait_result == 1" v-model="form.rc3"></el-input>
            <el-input type="number" v-if="scope.row.wait_result == 2" v-model="form.rx_b3"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
            <div class="count7">
              <p v-if="scope.row.result == 1">RX =</p>
              <el-col :span="12">
                <el-input type="number" v-if="scope.row.result == 1" v-model="form.rxx" style="width: 75px"></el-input>
              </el-col>
              <p v-if="scope.row.result == 1">Ω</p>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第四个表格 -->
    <el-table :data="tableData4" border style="width: 100%" :span-method="arraySpanMethod1">
      <el-table-column label="4.测量并计算自组式直流电桥的灵敏度">
        <el-table-column label="测试内容" prop="ratio" width="180"></el-table-column>
        <el-table-column label="1" prop="elec_ratio" highlight-current-row="false">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.elec_ratio == 11" v-model="form.rd1"></el-input>
            <div v-if="scope.row.elec_ratio == 1">1</div>
            <el-input type="number" v-if="scope.row.elec_ratio == 4" v-model="form.rb_change1"></el-input>
            <el-input type="number" v-if="scope.row.elec_ratio == 5" v-model="form.ss1"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.wait_ratio == 1" v-model="form.rd2"></el-input>
            <div v-if="scope.row.wait_ratio == 2">2</div>
            <el-input type="number" v-if="scope.row.wait_ratio == 4" v-model="form.rb_change2"></el-input>
            <el-input type="number" v-if="scope.row.wait_ratio == 5" v-model="form.ss2"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.wait_result == 1" v-model="form.rd3"></el-input>
            <div v-if="scope.row.wait_result == 3">3</div>
            <el-input type="number" v-if="scope.row.wait_result == 4" v-model="form.rb_change3"></el-input>
            <el-input type="number" v-if="scope.row.wait_result == 5" v-model="form.ss3"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
            <div class="count3 user_info_page">
              <p v-if="scope.row.result == 1">S =</p>
              <el-col :span="12">
                <el-input type="number" v-if="scope.row.result == 1" v-model="form.ss" style="width: 100px"></el-input>
              </el-col>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <h4>思考题（每题10分，一共20分）</h4>
    <p>1.单独对于实验仪器本身来说，电压源的电压值是（）</p>
    <el-radio-group v-model="form.xz1">
      <el-radio label="A" style="padding: 0 0 15px 0">A.可调节的</el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">B.不可调节的</el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.0 V</el-radio>
      <el-radio label="D">D.5 V</el-radio>
    </el-radio-group>
    <p>2.下列有关比例臂的说法中，正确的是（）</p>
    <el-radio-group v-model="form.xz2">
      <el-radio label="A" style="padding: 0 0 15px 0">A.箱式直流电桥的比例臂可以随意选取</el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">B.自组式直流电桥的比例臂可以随意选取</el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.箱式直流电桥的比例臂只有固定的几个选项</el-radio>
      <el-radio label="D">D.自组式直流电桥的比例臂只有固定的几个选项</el-radio>
    </el-radio-group>
    <h4>判断题（每题6分，一共12分）</h4>
    <p>1.在实验初始状态下，检流计需要调零。</p>
    <el-radio-group v-model="form.pd1">
      <el-radio label="1">对</el-radio>
      <el-radio label="0">错</el-radio>
    </el-radio-group>
    <p>2.在实验初始状态下，实验仪器滑线变阻器的滑动片可以不用滑动。</p>
    <el-radio-group v-model="form.pd2">
      <el-radio label="1">对</el-radio>
      <el-radio label="0">错</el-radio>
    </el-radio-group>
    <div class="btn7">
      <el-button type="primary" @click="send()">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        //第一
        ra1: "",
        ra2: "",
        ra3: "",
        rx_a1: "",
        rx_a2: "",
        rx_a3: "",
        rx: "",
        //第二
        rb1: "",
        rb2: "",
        rb3: "",
        ra_change1: "",
        ra_change2: "",
        ra_change3: "",
        s1: "",
        s2: "",
        s3: "",
        s: "",
        //第三
        rc1: "",
        rc2: "",
        rc3: "",
        rx_b1: "",
        rx_b2: "",
        rx_b3: "",
        rxx: "1",
        //第四
        rd1: "",
        rd2: "",
        rd3: "",
        rb_change1: "",
        rb_change2: "",
        rb_change3: "",
        ss1: "",
        ss2: "",
        ss3: "",
        ss: "1",
        //选择
        xz1: "",
        xz2: "",
        pd1: "",
        pd2: "",
        grade_xp: "",
        student_id: "",
      },
      tableData: [
        {
          ratio: "R1(Ω)",
          elec_ratio: "500",
          wait_ratio: "2000",
          wait_result: "100",
          result: "1",
        },
        {
          ratio: "R2(Ω)",
          elec_ratio: "500",
          wait_ratio: "2000",
          wait_result: "100",
        },
        {
          ratio: "电阻臂R0(Ω)",
          elec_ratio: "1",
          wait_ratio: "1",
          wait_result: "1",
        },
        {
          ratio: "待测电阻值RX(Ω)",
          elec_ratio: "2",
          wait_ratio: "2",
          wait_result: "2",
        },
      ],
      tableData2: [
        {
          ratio: "电阻臂R0(Ω)",
          elec_ratio: "11",
          wait_ratio: "1",
          wait_result: "1",
          result: "1",
        },
        {
          ratio: "偏转格数Δn",
          elec_ratio: "1",
          wait_ratio: "2",
          wait_result: "3",
        },
        {
          ratio: "变化量ΔR0(Ω)",
          elec_ratio: "4",
          wait_ratio: "4",
          wait_result: "4",
        },
        {
          ratio: "电桥灵敏度S",
          elec_ratio: "5",
          wait_ratio: "5",
          wait_result: "5",
        },
      ],
      tableData3: [
        {
          ratio: "R1(Ω)",
          elec_ratio: "200",
          wait_ratio: "500",
          wait_result: "1000",
          result: "1",
        },
        {
          ratio: "R2(Ω)",
          elec_ratio: "100",
          wait_ratio: "1000",
          wait_result: "4000",
        },
        {
          ratio: "电阻臂R0(Ω)",
          elec_ratio: "1",
          wait_ratio: "1",
          wait_result: "1",
        },
        {
          ratio: "待测电阻值RX(Ω)",
          elec_ratio: "2",
          wait_ratio: "2",
          wait_result: "2",
        },
      ],
      tableData4: [
        {
          ratio: "电阻臂R0(Ω)",
          elec_ratio: "11",
          wait_ratio: "1",
          wait_result: "1",
          result: "1",
        },
        {
          ratio: "偏转格数Δn",
          elec_ratio: "1",
          wait_ratio: "2",
          wait_result: "3",
        },
        {
          ratio: "变化量ΔR0(Ω)",
          elec_ratio: "4",
          wait_ratio: "4",
          wait_result: "4",
        },
        {
          ratio: "电桥灵敏度S",
          elec_ratio: "5",
          wait_ratio: "5",
          wait_result: "5",
        },
      ],
    };
  },
  created() {
    this.form.student_id = window.sessionStorage.getItem("student_id");
  },
  methods: {
    arraySpanMethod({ columnIndex }) {
      if (columnIndex == 4) {
        return [4, 1];
      }
    },
    arraySpanMethod1({ columnIndex }) {
      if (columnIndex == 4) {
        return [4, 1];
      }
    },
    async send() {
      const answer1 = (this.form.xz1 + this.form.xz2).split("");
      const answer2 = ["A", "C"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark += 10;
        }
      }
      var marker = 0;
      const answer3 = (this.form.pd1 + this.form.pd2).split("");
      const answer4 = ["1", "0"];
      for (let i = 0; i < answer1.length; i++) {
        if (answer3[i] == answer4[i]) {
          marker += 6;
        }
      }
      this.form.grade_xp = mark + marker;
      // console.log(this.form);
      const { data: res } = await this.$http.post(
        "/api/bridge1/completion5",
        this.form
      );
      // console.log(res);
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
.test7 {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
}
.count7 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
p {
  font-size: 15px;
  line-height: 24px;
}
.btn7 {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
}
</style>