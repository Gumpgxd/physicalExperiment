<template>
  <div class="test">
    <div>
      <h3>实验数据记录与处理</h3>
      <p style="display: inline">1.待改装微安表参数记录</p>

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
              v-model="form8.ig1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.neizu == '2'"
              v-model="form8.rg1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.neizu == '3'"
              v-model="form8.e"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="dianya" width="100"> </el-table-column>
      </el-table>
      <!-- 各电阻阻值设置计算 -->
      <p style="display: inline">2.各电阻阻值设置计算</p>
      <!-- 调零电阻计算 -->
      <div>
        <p>1) 调零电阻R1计算（理论值）</p>
        <div class="count">
          <p>
            ①
            根据电路图，单刀开关开启，短接红黑表笔，此时调零电阻计算公式为：R1=
          </p>
          <el-form ref="form" :model="form8">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form8.ra"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="count3">
          <div class="count4">
            <div style="width: 80px">② 代入E=</div>
            <el-input type="number" v-model="form8.e1" style="width: 14%"></el-input>
            <p>V,Ig=</p>
            <el-input type="number" v-model="form8.i" style="width: 12%"></el-input>
            <p>uA, Rg=</p>
            <el-input type="number" v-model="form8.ig2" style="width: 12%"></el-input>
            <p>Ω</p>
          </div>
        </div>

        <div class="count">
          <p>③ 计算出R1=</p>
          <el-form ref="form" :model="form8">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form8.r1"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 校准电阻计算 -->
      <div>
        <p>2) 校准电阻R2计算（理论值）</p>
        <div class="count">
          <p>
            ①
            根据电路图，单刀开关闭合，红黑表笔接100Ω电阻，此时校准电阻计算公式为：R2=[0.00015×(R1+Rg)]/[(E-0.00015×(R1+Rg))/100-0.00015]
          </p>
        </div>
        <div class="count3">
          <div class="count4">
            <div style="width: 80px">② 代入E=</div>

            <el-input type="number" v-model="form8.e2" style="width: 14%"></el-input>
            <p>V,R1=</p>
            <el-input type="number" v-model="form8.rb" style="width: 12%"></el-input>
            <p>Ω, Rg=</p>
            <el-input type="number" v-model="form8.rg2" style="width: 14%"></el-input>
            <p>Ω</p>
          </div>
        </div>

        <div class="count">
          <p>③ 计算出R2=</p>
          <el-form ref="form" :model="form">
            <el-form-item class="zhijin">
              <el-input type="number" v-model="form8.r2"></el-input>
            </el-form-item>
          </el-form>
          <p>Ω</p>
        </div>
      </div>
      <!-- 万用表改装设计实验数据记录表 -->
      <p style="display: inline">3. 万用表改装设计实验数据记录表</p>
      <div>
        <el-table
          :data="tableData1"
          border
          :show-header="false"
          style="width: 100%"
          :span-method="arraySpanMethod"
        >
          <el-table-column prop="biao1" width="180px">
            <template slot-scope="scope">
              <div v-if="scope.row.biao1 == '欧姆表的改装设计'">欧姆表的改装设计</div>
              <div v-if="scope.row.biao1 == '截图'">
                <p>实验电路设计截图</p>
                <el-upload
                  v-model="form8.p2"
                  class="upload-demo1"
                  drag
                  action="http://art.aztop.cn/api/uppic/uppic"
                  multiple
                  :on-success="picSuccess1"
                  :show-file-list="false"
                >
                  <img
                    v-if="form.pic_file1"
                    :src="form.pic_file1"
                    class="upPic"
                    style="background-size: 'contain'"
                  />
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                  <!-- <div class="el-upload__tip" slot="tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div> -->
                </el-upload>
              </div>
             
              <div v-if="scope.row.biao1 == '改装计算'">改装计算</div>
              <div v-if="scope.row.biao1 == '校准电阻R2='">校准电阻R2=</div>
              <div v-if="scope.row.biao1 == '测量电阻'">测量电阻</div>
            </template>
          </el-table-column>
          <el-table-column prop="biao2" width="100">
            <template slot-scope="scope">
              <div v-if="scope.row.biao2 == '改装要求'">改装要求</div>
              <div v-if="scope.row.biao2 == '调零电阻R1='">调零电阻R1=</div>
              <el-input type="number"
                v-if="scope.row.biao2 == '2'"
                v-model="form8.r4"
              ></el-input>
              <div v-if="scope.row.biao2 == 'Rx='">Rx=</div>
            </template>
          </el-table-column>
          <el-table-column prop="bilv" width="130">
            <template slot-scope="scope">
              <div v-if="scope.row.bilv == '量程比率×1Ω'">量程比率×1Ω</div>
              <el-input type="number"
                v-if="scope.row.bilv == '1'"
                v-model="form8.r3"
              ></el-input>
              <div v-if="scope.row.bilv == 'Ω'">Ω</div>
              <el-input type="number"
                v-if="scope.row.bilv == '3'"
                v-model="form8.rx"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="biao4">
            <template slot-scope="scope">
              <div v-if="scope.row.biao4 == '6'" class="image_one" style="position:relative;">
                <div>
                <p>表头测量数据截图</p>
                <p>
                  <el-upload
                   v-model="form8.p1"
                  class="upload-demo"
                  drag
                  action="http://art.aztop.cn/api/uppic/uppic"
                  multiple
                  :on-success="picSuccess"
                  :show-file-list="false"
                >
                    <img
                        v-if="form.pic_file"
                        :src="form.pic_file"
                        class="upPic"
                        style="background-size: 'contain'"
                      />
                  <!-- <p>表头测量数据截图</p> -->
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </el-upload>
                </p>
                
                  </div>
              </div>
              <div v-if="scope.row.biao4 == 'Ω'">Ω</div>
            </template>
          </el-table-column>
          <el-table-column prop="biao5" width="50"></el-table-column>
          <el-table-column prop="biao6" width="300"></el-table-column>
        </el-table>
      </div>

      <!-- 判断题 -->
      <h4>判断题</h4>
      <p>1.微安表改装欧姆表，常用的方法是调零电阻内接法，调零电阻外接法。</p>
      <el-radio-group v-model="form8.pd1">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
      <p>2.在改装欧姆电表使用前,回路中电流为零,指针应指在电流表的零刻度。</p>
      <el-radio-group v-model="form8.pd2">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
      <p>3.在改装欧姆电表使用前,回路中电流为零,对应的电阻阻值应为∞。</p>
      <el-radio-group v-model="form8.pd3">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
      <div class="btn8">
        <el-button type="primary" @click="send()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>   
export default {
  data() {
    return {
      form8: {
        ig1: "",
        rg1: "",
        e: "",
        ra: "",
        e1: "",
        i: "",
        ig2: "",
        r1: "",
        e2: "",
        rb: "",
        rg2: "",
        r2: "",
        r3: "",
        r4: "",
        rx: "",
        pd1: "",
        pd2: "",
        pd3: "",
        p1:"",
        p2:"",
        grade_xp:"",
        student_id:""
        // p2score:"",
        // p1score:""
      },
      form: {
        pic_file: "",
        pic_file1: "",
      },
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
          biao1: "欧姆表的改装设计",
          biao2: "改装要求",
          bilv: "量程比率×1Ω",
          biao4: "6",
        },
        {
          biao1: "改装计算",
          biao2: "调零电阻R1=",
          bilv: "1",
          biao4: "Ω",
        },
        {
          biao1: "校准电阻R2=",
          biao2: "2",
          bilv: "Ω",
        },
        {
          biao1: "测量电阻",
          biao2: "Rx=",
          bilv: "3",
          biao4: "Ω",
        },
        {
          biao1: "截图",
        },
      ],
    };
  },
  created() {
    this.form8.student_id = window.sessionStorage.getItem("student_id");
    // console.log(this.form8.student_id);
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
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
      } else if (rowIndex == 4) {
        return [1, 6];
      }
    },
    picSuccess(res, file) {
      if (res.code == 200) {
        this.form.pic_file = res.data;
         this.form8.p1 = res.data
      } else {
        this.$message.error("图片上传失败，请重新上传!!");
      }
      // console.log(res);
      // console.log(this.form.pic_file);
    },
    picSuccess1(res, file) {
      if (res.code == 200) {
        this.form.pic_file1 = res.data;
        this.form8.p2 = res.data
      } else {
        this.$message.error("图片上传失败，请重新上传!!");
      }
      // console.log(res);
    
      // console.log(this.form.pic_file1);
    },
    async send() {
      console.log(this.form8);
      const answer1 = (
        this.form8.pd1 +
        this.form8.pd2 +
        this.form8.pd3
      ).split("");
      const answer2 = ["1", "1", "1"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark = mark + 5;
        }
      }
      // console.log(mark);
   this.form8.grade_xp=mark
  //  console.log(this.form8);
      const {data:res} = await this.$http.post('/api/experiment6/completion6',this.form8)
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
}

p {
  font-size: 15px;
  line-height: 25px;
}

.count {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.count3 {
  display: flex;
  justify-content: flex-start;
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
/* .image_one {
  display: flex;
  justify-content:center;
  align-items: center;
} */
.btn8 {
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