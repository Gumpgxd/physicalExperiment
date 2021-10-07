<template>
  <div class="test3">
    <!-- 第五 -->
    <div>
      <h3>实验数据记录与处理</h3>
      <p></p>
    </div>
    <!-- 第一个 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column label="1.箱式直流电桥测量电阻值">
        <el-table-column label="测试内容" prop="ratio" width="180"> </el-table-column>
        <el-table-column
          label="1"
          prop="elec_ratio"
          highlight-current-row="false"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.elec_ratio == 0.1">0.1</div>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 1"
              v-model="form.ra1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 2"
              v-model="form.rx1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_ratio == 0.1">0.1</div>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 1"
              v-model="form.ra2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 2"
              v-model="form.rx2"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_result == 0.1">0.1</div>
            <el-input type="number"
              v-if="scope.row.wait_result == 1"
              v-model="form.ra3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_result == 2"
              v-model="form.rx3"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope" >
            <div class="count3 user_info_page">
            <p  v-if="scope.row.result == 1">RX = </p>
            <el-col :span="12">
            <el-input type="number" v-if="scope.row.result == 1" v-model="form.rx" style="width:75px" ></el-input>
            </el-col>
            <p  v-if="scope.row.result == 1">Ω</p>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第二个 -->
    <el-table
      :data="tableData2"
      border
      style="width: 100%"
      :span-method="arraySpanMethod1"
    >
      <el-table-column label="2.测量并计算箱式直流电桥的灵敏度">
        <el-table-column label="测试内容" prop="ratio" width="180"> </el-table-column>
        <el-table-column
          label="1"
          prop="elec_ratio"
          highlight-current-row="false"
        >
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.elec_ratio == 11"
              v-model="form.rb1"
            ></el-input>
            <div v-if="scope.row.elec_ratio == 1">1</div>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 4"
              v-model="form.rchange1a"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 5"
              v-model="form.s1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="2" prop="wait_ratio">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.wait_ratio == 1"
              v-model="form.rb2"
            ></el-input>
            <div v-if="scope.row.wait_ratio == 2">2</div>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 4"
              v-model="form.rchange2a"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 5"
              v-model="form.s2"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="3" prop="wait_result">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.wait_result == 1"
              v-model="form.rb3"
            ></el-input>
            <div v-if="scope.row.wait_result == 3">3</div>
            <el-input type="number"
              v-if="scope.row.wait_result == 4"
              v-model="form.rchange3a"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_result == 5"
              v-model="form.s3"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
            <div class="count3  user_info_page" >
              <p  v-if="scope.row.result == 1"> S =</p>
              <el-col :span="12">
            <el-input type="number" v-if="scope.row.result == 1" v-model="form.s" style="width:100px"></el-input>
              </el-col>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第三个 -->
    <el-table
      :data="tableData3"
      border
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column label="3.箱式直流电桥测量电阻值">
        <el-table-column label="待测电阻" prop="ratio"> </el-table-column>
        <el-table-column
          label="R2"
          prop="elec_ratio"
          highlight-current-row="false"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.elec_ratio == 1">1</div>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 2"
              v-model="form.rc1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 3"
              v-model="form.rwait1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="R3" prop="wait_ratio">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_ratio == 10">100</div>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 2"
              v-model="form.rc2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 3"
              v-model="form.rwait2"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="R1" prop="wait_result">
          <template slot-scope="scope">
            <div v-if="scope.row.wait_result == 0.1">0.1</div>
            <el-input type="number"
              v-if="scope.row.wait_result == 2"
              v-model="form.rc3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_result == 3"
              v-model="form.rwait3"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180">
          <template slot-scope="scope">
             <div class="count3 user_info_page">
            <p  v-if="scope.row.result == 1">Rx =____</p>
            <!-- <el-col :span="12">  -->
            <!-- <el-input type="number"  v-if="scope.row.result == 1"
              v-model="form.rxx" style="width:75px"></el-input> -->
            <!-- </el-col> -->
            <p  v-if="scope.row.result == 1">Ω</p>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- 第四个 -->
   <el-table
      :data="tableData2"
      border
      style="width: 100%"
      :span-method="arraySpanMethod1"
    >
      <el-table-column label="4.测量并计算箱式直流电桥的灵敏度">
        <el-table-column label="待测电阻" prop="ratio"> </el-table-column>
        <el-table-column
          label="R2"
          prop="elec_ratio"
          highlight-current-row="false"
        >
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.elec_ratio == 11"
              v-model="form.rd1"
            ></el-input>
            <div v-if="scope.row.elec_ratio == 1">1</div>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 4"
              v-model="form.rchange1b"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.elec_ratio == 5"
              v-model="form.ss1"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="R3" prop="wait_ratio">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.wait_ratio == 1"
              v-model="form.rd2"
            ></el-input>
            <div v-if="scope.row.wait_ratio == 2">2</div>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 4"
              v-model="form.rchange2b"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_ratio == 5"
              v-model="form.ss2"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="R1" prop="wait_result">
          <template slot-scope="scope">
            <el-input type="number"
              v-if="scope.row.wait_result == 1"
              v-model="form.rd3"
            ></el-input>
            <div v-if="scope.row.wait_result == 3">3</div>
            <el-input type="number"
              v-if="scope.row.wait_result == 4"
              v-model="form.rchange3b"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.wait_result == 5"
              v-model="form.ss3"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="测量结果" prop="result" width="180px">
          <template slot-scope="scope">
              <div class="count3  user_info_page" >
              <p  v-if="scope.row.result == 1"> S =____</p>
              <el-col :span="12">&nbsp;
            <!-- <el-input type="number" v-if="scope.row.result == 1" v-model="form.ss" style="width:100px" disabled></el-input> -->
              </el-col>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <h4>思考题</h4>
    <p>
      1.在使用箱式直流电桥测量电阻时，为什么选取的比例臂一般应使单电桥的四个测量盘尽可能用上? 
    </p>
    <el-radio-group v-model="form.xz1">
      <el-radio label="A" style="padding: 0 0 15px 0"
        >A.测量盘必须全用上</el-radio
      >
      <el-radio label="B" style="padding: 0 0 15px 0"
        >B.比例臂的选取与测量盘使用个数无关</el-radio
      >
      <el-radio label="C" style="padding: 0 0 15px 0"
        >C.使用一个测量盘时，读出的测量值精度最高</el-radio
      >
      <el-radio label="D">D.读出的测量值有效位数多，测量精度有保证</el-radio>
    </el-radio-group>
    <P>2.为了提高电桥测量的灵敏度，应采取哪些措施? </P>
    <el-radio-group v-model="form.xz2">
      <el-radio label="A" style="padding: 0 0 15px 0">A.提高电源电压</el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"
        >B.使用低灵敏度检流计</el-radio
      >
      <el-radio label="C" style="padding: 0 0 15px 0"
        >C.比例臂可以随意选取</el-radio
      >
      <el-radio label="D">D.不使用等臂电桥</el-radio>
    </el-radio-group>
    <h4>判断题</h4>
    <p>1.因为电桥箱是设计生产精良的专业实验仪器，电桥箱中的检流计不用调零。</p>
    <el-radio-group v-model="form.pd1">
      <el-radio label="1">对</el-radio>
      <el-radio label="0">错</el-radio>
    </el-radio-group>
    <p>2.在电阻值的测量过程中，只用按下内接检流计开关这一个开关。</p>
    <el-radio-group v-model="form.pd2">
      <el-radio label="1">对</el-radio>
      <el-radio label="0">错</el-radio>
    </el-radio-group>
    <div class="btn3">
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
        rx1: "",
        rx2: "",
        rx3: "",
        rx: "",
        //第二
        rb1: "",
        rb2: "",
        rb3: "",
        rchange1a: "",
        rchange2a: "",
        rchange3a: "",
        s1: "",
        s2: "",
        s3: "",
        s: "",
        //第三
        rc1: "",
        rc2: "",
        rc3: "",
        rwait1: "",
        rwait2: "",
        rwait3: "",
        // rxx: "",
        //第四
        rd1: "",
        rd2: "",
        rd3: "",
        rchange1b: "",
        rchange2b: "",
        rchange3b: "",
        ss1: "",
        ss2: "",
        ss3: "",
        // ss: "",
        //选择
        xz1: "",
        xz2: "",
        pd1: "",
        pd2: "",
        student_id:"",
        grade_xp:""
      },
      tableData: [
        {
          ratio: "比例臂",
          elec_ratio: "0.1",
          wait_ratio: "0.1",
          wait_result: "0.1",
          result: "1",
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
          ratio: "比例臂",
          elec_ratio: "1",
          wait_ratio: "10",
          wait_result: "0.1",
          result: "1",
        },
        {
          ratio: "电阻臂R0(Ω)",
          elec_ratio: "2",
          wait_ratio: "2",
          wait_result: "2",
        },
        {
          ratio: "待测电阻值RX(Ω)",
          elec_ratio: "3",
          wait_ratio: "3",
          wait_result: "3",
        },
      ],
    };
  },
  created() {
    this.form.student_id = window.sessionStorage.getItem("student_id");
    // console.log(this.form.student_id);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 4) {
        return [3, 1];
      }
    },
    arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 4) {
        return [4, 1];
      }
    },
    async send(){
       const answer1=(
         this.form.xz1+
           this.form.xz2
       ).split("")
       const answer2=["D","A"]
       var mark=0
       for(let i=0;i<answer1.length;i++){
         if(answer1[i]==answer2[i]){
           mark+=10
         }
       }
       var marker=0
       const answer3=(
         this.form.pd1+
           this.form.pd2
       ).split("")
       const answer4=["0","0"] 
       for(let i=0;i<answer1.length;i++){
         if(answer3[i]==answer4[i]){
           marker+=6
         }
       }
       this.form.grade_xp=mark+marker;
      //  console.log(this.form);
          const{data:res}= await this.$http.post('/api/bridge/completion',this.form)
        //  console.log(res);
           if(res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      }else {
        this.$message.error(res.msg)
    }
    }
  },
};
</script>

<style scoped>
.test3 {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.count3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin-top: 35px; */
}
.zhijin3 {
  width: 100px;
  margin-bottom: 0;
}
p {
  font-size: 15px;
  line-height: 24px;
}
.btn3 {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
}
.el-table th {
  background: white !important;
}
.el-table tbody tr:hover > td {
  background-color: white !important;
}
</style>