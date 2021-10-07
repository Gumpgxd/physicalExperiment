<template>
  <div class="test">
    <!-- 第五 -->
    <div>
      <h3>实验数据记录与处理</h3>
      <p style="display: inline">1.待改装微安表参数记录</p>
      <p style="display: inline; font-size: 15px; color: skyblue">
        （每空2分，共6分）
      </p>
      <!-- 1.	待改装微安表参数记录（每空2分，共6分） -->
      <el-table
        :data="tableData"
        border
        :show-header="false"
        style="width: 100%"
      >
        <el-table-column prop="dianliu" width="200"> </el-table-column>
        <el-table-column prop="neizu">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.neizu == '1'"
              v-model="form2.one_ig"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.neizu == '2'"
              v-model="form2.one_rg"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.neizu == '3'"
              v-model="form2.one_e"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="dianya" width="100"> </el-table-column>
      </el-table>

      <!-- 2.	各电阻阻值设置计算 -->

      <p style="display: inline">
        2.各电阻阻值设置计算（要求四舍五入精确到小数点后1位，每空3分，共54分）
      </p>
      <p style="display: inline; font-size: 15px; color: skyblue">
        （每空2分，共6分）
      </p>
      <!-- 1) 分流电阻计算 -->
      <div>
        <p>1) 分流电阻计算</p>
        <div class="count">
          <p>① 仅闭合转换开关1，此时分流电阻计算公式为： R1=Rg×Ig/(Im-Ig)</p>
        </div>

        <div class="count4">
          <div style="width: 95px">② 代入Rg=</div>
          <!-- <p style="width:80px">② 代入Rg=</p> -->
          <el-input type="number" v-model="form2.two_one_rg" style="width: 15%"></el-input>
          <p>Ω;Ig=</p>
          <el-input type="number" v-model="form2.two_one_ig" style="width: 15%"></el-input>
          <p>mA;Im=</p>
          <el-input type="number" v-model="form2.two_one_im" style="width: 15%"></el-input>
          <p>mA</p>
        </div>

        <div class="count">
          <p>③ 计算出R1=</p>
          <el-form ref="form" :model="form2">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_one_r1"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 2)	分压电阻计算 -->
      <div>
        <p>2) 分压电阻计算</p>
        <div class="count">
          <p>① 根据电路图，此时微安表内阻为：Rn= Rg//R1=</p>
          <el-form ref="form" :model="form2">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_two_rn"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω；</p>
        </div>
        <div class="count">
          <p>量程为：Im=</p>
          <el-form ref="form" :model="form2">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_two_im"></el-input>
            </el-form-item>
          </el-form>
          <p>mA</p>
        </div>

        <div class="count">
          <p>② 仅闭合转换开关2，此时分压电阻计算公式为：R2=Vm/Im-Rn</p>
        </div>
        <div class="count4">
          <div style="width: 120px">③ 代入Vm=</div>
          <!-- <p style="display: inline">③ 代入Vm=</p> -->
          <el-input type="number" v-model="form2.two_two_vm" style="width: 15%"></el-input>
          <p>V,Im=</p>
          <el-input type="number" v-model="form2.two_two_im2" style="width: 15%"></el-input>
          <p>mA,Rn=</p>
          <el-input type="number" v-model="form2.two_two_rn2" style="width: 15%"></el-input>
          <p>Ω</p>
        </div>

        <div class="count">
          <p>③ 计算出R2=</p>
          <el-form ref="form" :model="form2">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_two_r2"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 3)	调零电阻计算（理论值） -->
      <div>
        <p>3) 调零电阻计算（理论值）</p>
        <div class="count">
          <p>
            ①
            根据电路图，仅闭合转换开关3，短接红黑表笔，此时调零电阻计算公式为：R4=E/Im-Rn
          </p>
        </div>

        <div class="count4">
          <div style="width: 80px">② 代入E=</div>
          <el-input type="number" v-model="form2.two_thr_e" style="width: 14%"></el-input>
          <p>V,Im=</p>
          <el-input type="number" v-model="form2.two_thr_im2" style="width: 12%"></el-input>
          <p>mA, Rn=</p>
          <el-input type="number" v-model="form2.two_thr_rn" style="width: 12%"></el-input>
          <p>Ω</p>
        </div>

        <div class="count">
          <p>③ 计算出R4=</p>
          <el-form ref="form" :model="form2">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_thr_r42"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 4)	校准电阻计算（理论值） -->
      <div>
        <p>4) 校准电阻计算（理论值）</p>
        <div class="count">
          <p>
            ①
            根据电路图，仅闭合转换开关3和单刀开关，红黑表笔接100Ω电阻，此时校准电阻计算公式为：R3=[0.003×(R4+Rn)]/[(E-0.003×(R4+Rn))/100-0.003]
          </p>
        </div>

        <div class="count4">
          <div style="width: 80px">② 代入E=</div>

          <el-input type="number" v-model="form2.two_four_e" style="width: 14%"></el-input>
          <p>V,R4=</p>
          <el-input type="number" v-model="form2.two_four_r4" style="width: 12%"></el-input>
          <p>Ω, Rn=</p>
          <el-input type="number" v-model="form2.two_four_rn4" style="width: 14%"></el-input>
          <p>Ω</p>
        </div>

        <div class="count">
          <p>③ 计算出R3=</p>
          <el-form ref="form" :model="form">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form2.two_four_r3"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 3.	万用表改装设计实验数据记录表（每空3分，共30分） -->
      <p style="display: inline">3. 万用表改装设计实验数据记录表</p>
      <p style="display: inline; font-size: 15px; color: skyblue">
        (每空3分，共30分）
      </p>
      <div>
        <el-table
          :data="tableData1"
          border
          :show-header="false"
          style="width: 100%"
          :span-method="arraySpanMethod"
        >
          <el-table-column prop="wan1" width="100"> </el-table-column>
          <el-table-column prop="wan2" width="100"> </el-table-column>
          <el-table-column prop="lianchen" width="130">
            <template slot-scope="scope">
              <div v-if="scope.row.lianchen == '量程Im=10mA'">量程Im=10mA</div>
              <el-input type="number"
                v-if="scope.row.lianchen == '1'"
                v-model="form2.thr_one_r1"
              ></el-input>
              <el-input type="number"
                v-if="scope.row.lianchen == '2'"
                v-model="form2.thr_one_ix"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="wan4">
            <template slot-scope="scope">
              <div v-if="scope.row.wan4 == '6'">
                <p>表头指针偏转描述：</p>
                <p>用改装好的电流档测量电流时，表头指针 向右偏转，读数为</p>
                <el-input type="number"
                  v-if="scope.row.wan4 == '6'"
                  v-model="form2.thr_one_ds"
                ></el-input>
                <P
                  >，用此读数除以10再乘以改装后的
                  电流表量程10mA，即为所测电流Ix的大小。</P
                >
              </div>
              <div v-if="scope.row.wan4 == 'Ω'">Ω</div>
              <div v-if="scope.row.wan4 == 'mA'">mA</div>
            </template>
          </el-table-column>
          <el-table-column prop="wan5" width="50"> </el-table-column>
          <el-table-column prop="wan6" width="300"> </el-table-column>
        </el-table>
        <el-table
          :data="tableData2"
          border
          :show-header="false"
          style="width: 100%"
          :span-method="arraySpanMethod"
        >
          <el-table-column prop="wan1" width="100"> </el-table-column>
          <el-table-column prop="wan2" width="100"> </el-table-column>
          <el-table-column prop="lianchen" width="130">
            <template slot-scope="scope">
              <div v-if="scope.row.lianchen == '量程Vm=5V'">量程Vm=5V</div>
              <el-input type="number"
                v-if="scope.row.lianchen == '1'"
                v-model="form2.thr_two_r2"
              ></el-input>
              <el-input type="number"
                v-if="scope.row.lianchen == '2'"
                v-model="form2.thr_two_vx"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="wan41">
            <template slot-scope="scope">
              <div v-if="scope.row.wan41 == '6'">
                <p>表头指针偏转描述：</p>
                <p>用改装好的电压档测量电流时，表头指针向右偏转，读数为</p>
                <el-input type="number"
                  v-if="scope.row.wan41 == '6'"
                  v-model="form2.thr_two_ds"
                ></el-input>
                <P
                  >，用此读数除以20再乘以改装后的电压表量程5V，即为所测电压Vx的大小。</P
                >
              </div>
              <div v-if="scope.row.wan41 == 'Ω'">Ω</div>
              <div v-if="scope.row.wan41 == 'V'">V</div>
            </template>
          </el-table-column>
          <el-table-column prop="wan5" width="50"> </el-table-column>
          <el-table-column prop="wan6" width="300"> </el-table-column>
        </el-table>
        <el-table
          :data="tableData3"
          border
          :show-header="false"
          style="width: 100%"
          :span-method="arraySpanMethod1"
        >
          <el-table-column prop="wan1" width="100"> </el-table-column>
          <el-table-column prop="wan2" width="100">
            <template slot-scope="scope">
              <div v-if="scope.row.wan2 == '改装要求'">改装要求</div>
              <div v-if="scope.row.wan2 == '调零电阻R4='">调零电阻R4=</div>
              <el-input type="number"
                v-if="scope.row.wan2 == '2'"
                v-model="form2.thr_thr_r3"
              ></el-input>
              <div v-if="scope.row.wan2 == 'Rx='">Rx=</div>
            </template>
          </el-table-column>
          <el-table-column prop="lianchen" width="130">
            <template slot-scope="scope">
              <div v-if="scope.row.lianchen == '量程比率×1Ω'">量程比率×1Ω</div>
              <el-input type="number"
                v-if="scope.row.lianchen == '1'"
                v-model="form2.thr_thr_r4"
              ></el-input>
              <div v-if="scope.row.lianchen == 'Ω'">Ω</div>
              <el-input type="number"
                v-if="scope.row.lianchen == '3'"
                v-model="form2.thr_thr_rx"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="wan4">
            <template slot-scope="scope">
              <div v-if="scope.row.wan4 == '6'">
                <p>表头指针偏转描述：</p>
                <p>用改装好的电阻档测量电流时，表头指针向左偏转，读数为</p>
                <el-input type="number"
                  v-if="scope.row.wan4 == '6'"
                  v-model="form2.thr_thr_ds"
                ></el-input>
                <P
                  >，用此读数乘以250改装后的电阻表量程比率，即为所测电阻的大小。</P
                >
              </div>
              <div v-if="scope.row.wan4 == 'Ω'">Ω</div>
              <!-- <div v-if="scope.row.wan4 == 'Ω'">Ω</div> -->
            </template>
          </el-table-column>
          <el-table-column prop="wan5" width="50"></el-table-column>
          <el-table-column prop="wan6" width="300"></el-table-column>
        </el-table>
      </div>

      <!-- 4.	实验电路设计识图题（10分） -->
      <p style="display: inline">4. 实验电路设计识图题</p>
      <p style="display: inline; font-size: 15px; color: skyblue">(10分)</p>
      <div>
        <p>
          下图是小明同学根据原理电路图和实验要求，搭建的测电流时的实验截图，请问:
        </p>
        <img
          src="https://notes-images-1304981836.cos.ap-chengdu.myqcloud.com/shiyan/7.png"
          height="90%"
          width="90%"
          min-width="320px"
        /><br />
        <p style="display: inline">
          （1）电路中，各电阻箱的阻值是多少？实测电流是多少？
        </p>
        <p style="display: inline; font-size: 15px; color: skyblue">
          （每空1分）
        </p>
        <div class="count4">
          <div class="count4">
            <p>R1=</p>
            <el-input type="number"
              v-model="form2.four_one_r1"
              style="width: 70px"
            ></el-input>
            <p>Ω;</p>
          </div>

          <div class="count4">
            <p>R2=</p>
            <el-input type="number"
              v-model="form2.four_one_r2"
              style="width: 70px"
            ></el-input>
            <p>Ω;</p>
          </div>

          <div class="count4">
            <p>R3=</p>
            <el-input type="number"
              v-model="form2.four_one_r3"
              style="width: 70px"
            ></el-input>
            <p>Ω;</p>
        </div>
       </div>
        <div class="count4">
      
          <div class="count4">
            <p>R4=</p>
            <el-input type="number"
              v-model="form2.four_one_r4"
              style="width: 70px"
            ></el-input>
            <p>Ω;</p>
          </div>
          <div class="count4">
            <p>Ix=</p>
            <el-input type="number"
              v-model="form2.four_one_ix"
              style="width: 70px"
            ></el-input>
            <p>mA</p>
          </div>
       </div>
        <P>mA（数据范围5.9-6.3）</P>
        <p style="display: inline">（2）判断题</p>
        <p style="display: inline; font-size: 15px; color: skyblue">
          （每空1分）
        </p>
        <div>
          <p>1) 电路连接正确，测量也没有错误；</p>
          <el-radio-group v-model="form2.four_two_1">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>2) 电路连接正确，但在测量电流时，应该将单刀开关断开；</p>
          <el-radio-group v-model="form2.four_two_2">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>3) 电路连接正确，但在测量电流时，应该将多挡开关置2；</p>
          <el-radio-group v-model="form2.four_two_3">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>4) 电路连接正确，但微安表未机械调零；</p>
          <el-radio-group v-model="form2.four_two_4">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
        </div>
        <div>
          <p>5) 电路连接正确，但在测量电流时，应该将多挡开关置3 ;</p>
          <el-radio-group v-model="form2.four_two_5">
            <el-radio label="1">对</el-radio>
            <el-radio label="0">错</el-radio>
          </el-radio-group>
          <div class="btn">
            <el-button type="primary" @click="send()">提交</el-button>
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
      form2: {
        student_id: "",
        grade_xp: "",
        two_one_r1: "",
        two_two_rn: "",
        two_two_im: "",
        two_two_vm: "",
        two_two_im2: "",
        two_two_rn2: "",
        two_two_r2: "",
        two_thr_e: "",
        two_thr_im2: "",
        two_thr_rn: "",
        two_thr_r42: "",
        two_four_e: "",
        two_four_r4: "",
        two_four_rn4: "",
        two_four_r3: "",
        four_one_r1: "",
        four_one_r2: "",
        four_one_r3: "",
        four_one_r4: "",
        four_one_ix: "",
        one_ig: "",
        one_rg: "",
        one_e: "",
        thr_one_r1: "",
        thr_one_ix: "",
        thr_two_r2: "",
        thr_two_vx: "",
        thr_thr_r4: "",
        thr_thr_r3: "",
        thr_thr_rx: "",
        thr_one_ds: "",
        thr_two_ds: "",
        thr_thr_ds: "",
        four_two_1: "",
        four_two_2: "",
        four_two_3: "",
        four_two_4: "",
        four_two_5: "",
        two_one_rg:"",
        two_one_ig:"",
        two_one_im:""

      },
      form: {},
      tableData: [
        {
          dianliu: "微安表表头满量程电流Ig",
          neizu: "1",
          dianya: "μA",
        },
        {
          dianliu: "表头内阻Rg",
          neizu: "2",
          dianya: "Ω",
        },
        {
          dianliu: "电池电压E",
          neizu: "3",
          dianya: "V",
        },
      ],
      tableData1: [
        {
          wan1: "电流档的扩程设计",
          wan2: "改装要求",
          lianchen: "量程Im=10mA",
          wan4: "6",
        },
        {
          wan1: "改装计算",
          wan2: "分流电阻R1=",
          lianchen: "1",
          wan4: "Ω",
        },
        {
          wan1: "所测电流",
          wan2: "Ix=",
          lianchen: "2",
          wan4: "mA",
        },
      ],
      tableData2: [
        {
          wan1: "电压档的改装设计",
          wan2: "改装要求",
          lianchen: "量程Vm=5V",
          wan41: "6",
        },
        {
          wan1: "改装计算",
          wan2: "分压电阻R2=",
          lianchen: "1",
          wan41: "Ω",
        },
        {
          wan1: "所测电压",
          wan2: "Vx=",
          lianchen: "2",
          wan41: "V",
        },
      ],
      tableData3: [
        {
          wan1: "欧姆档的改装设计",
          wan2: "改装要求",
          lianchen: "量程比率×1Ω",
          wan4: "6",
        },
        {
          wan1: "改装计算",
          wan2: "调零电阻R4=",
          lianchen: "1",
          wan4: "Ω",
        },
        {
          wan1: "校准电阻R3=",
          wan2: "2",
          lianchen: "Ω",
        },
        {
          wan1: "测量电阻",
          wan2: "Rx=",
          lianchen: "3",
          wan4: "Ω",
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
          return [3, 1];
        } else if (columnIndex === 3) {
          return [3, 1];
        } else if (columnIndex === 2) {
          return [1, 3];
        }
      }
    },
    arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [4, 1];
        } else if (columnIndex === 2) {
          return [1, 3];
        } else if (columnIndex === 3) {
          return [4, 1];
        }
      } else if (rowIndex === 1) {
        if (columnIndex === 0) {
          return [2, 1];
        }
      }
    },
    async send() {
      // console.log(this.form2.student_id);
      const answer1 = (
        this.form2.four_two_1 +
        this.form2.four_two_2 +
        this.form2.four_two_3 +
        this.form2.four_two_4 +
        this.form2.four_two_5
      ).split("");
      const answer2 = ["0", "1", "0", "1", "0"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark = mark + 1;
        }
      }
      this.form2.student_id = window.sessionStorage.getItem("student_id");
      // console.log(this.form2);
      this.form2.grade_xp = mark;
      const { data: res } = await this.$http.post(
        "api/experiment11/completion11",
        this.form2
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
  /* min-width: 300px; */
}

.count4 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.zhijin {
  margin-bottom: 0;
  width: 70px;
}
p {
  font-size: 15px;
  line-height: 25px;
}

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