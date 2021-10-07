<template>
  <div class="test">
    <!-- 第五 -->
    <h3>实验数据记录与处理</h3>
    <p>
      1.用示波器时基扫描功能测量信号的时间/频率参数
      将校准信号线分别接入到两个通道，使用示波器自带方波信号校准示波器两个测量通道，校准后把时基分度旋钮打在0.2ms/DIV,
      幅度分度旋钮打在0.5V/DIV
    </p>
    <p style="display: inline">表1：测量示波器自带校准方波信号的周期/频率</p>
    <p style="display: inline; font-size: 15px; color: skyblue">
      （每空2分共14分）
    </p>
    <!-- 1. 表1：测量示波器自带校准方波信号的周期/频率（每空2分共14分） -->
    <el-table
      :data="tableData"
      border
      :show-header="false"
      style="width: 100%"
      :span-method="arraySpanMethod"
    >
      <el-table-column prop="tongdao" width="120px"> </el-table-column>
      <el-table-column prop="ch1">
        <template slot-scope="scope">
          <div v-if="scope.row.ch1 == 'CH1'">CH1</div>
          <el-input type="number" v-if="scope.row.ch1 == '1'" v-model="form2.b1"></el-input>
          <el-input type="number" v-if="scope.row.ch1 == '2'" v-model="form2.b2"></el-input>
          <el-input type="number" v-if="scope.row.ch1 == '3'" v-model="form2.b3"></el-input>
          <el-input type="number" v-if="scope.row.ch1 == '4'" v-model="form2.b4"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="ch2">
        <template slot-scope="scope">
          <div v-if="scope.row.ch2 == 'CH2'">CH2</div>
          <el-input type="number" v-if="scope.row.ch1 == '2'" v-model="form2.b5"></el-input>
          <el-input type="number" v-if="scope.row.ch1 == '3'" v-model="form2.b6"></el-input>
          <el-input type="number" v-if="scope.row.ch1 == '4'" v-model="form2.b7"></el-input>
        </template>
      </el-table-column>
    </el-table>

    <p>注意：大格数、周期、频率三者的记录均需保留一位小数</p>
    <p>
      选择信号发生器的正弦波接示波器CH2，信号发生器默认幅度2Vp-p，选择不同的时基分度和输入信号频率，测量各信号的周期；此时CH2的幅度分度仍然为0.5V/DIV
    </p>
    <p style="display: inline">表2： 测量正弦波信号周期和频率</p>
    <p style="display: inline; font-size: 15px; color: skyblue">
      （每空2分共24分）
    </p>
    <el-table
      :data="tableData1"
      border
      :show-header="false"
      style="width: 100%"
    >
      <el-table-column prop="hang1" width="130px"> </el-table-column>
      <el-table-column prop="hang2">
        <template slot-scope="scope">
          <div v-if="scope.row.hang2 == '0.5'">0.5</div>
          <div v-if="scope.row.hang2 == '500'">500</div>
          <el-input type="number" v-if="scope.row.hang2 == '1'" v-model="form2.c1"></el-input>
          <el-input type="number" v-if="scope.row.hang2 == '2'" v-model="form2.c2"></el-input>
          <el-input type="number" v-if="scope.row.hang2 == '3'" v-model="form2.c3"></el-input>
          <el-input type="number" v-if="scope.row.hang2 == '4'" v-model="form2.c4"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="hang3">
        <template slot-scope="scope">
          <div v-if="scope.row.hang3 == '0.2'">0.2</div>
          <div v-if="scope.row.hang3 == '1000'">1000</div>
          <el-input type="number" v-if="scope.row.hang3 == '1'" v-model="form2.c5"></el-input>
          <el-input type="number" v-if="scope.row.hang3 == '2'" v-model="form2.c6"></el-input>
          <el-input type="number" v-if="scope.row.hang3 == '3'" v-model="form2.c7"></el-input>
          <el-input type="number" v-if="scope.row.hang3 == '4'" v-model="form2.c8"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="hang4">
        <template slot-scope="scope">
          <div v-if="scope.row.hang4 == '0.1'">0.1</div>
          <div v-if="scope.row.hang4 == '2000'">2000</div>
          <el-input type="number" v-if="scope.row.hang4 == '1'" v-model="form2.c9"></el-input>
          <el-input type="number"
            v-if="scope.row.hang4 == '2'"
            v-model="form2.c10"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.hang4 == '3'"
            v-model="form2.c11"
          ></el-input>
          <el-input type="number"
            v-if="scope.row.hang4 == '4'"
            v-model="form2.c12"
          ></el-input>
        </template>
      </el-table-column>
    </el-table>

    <p>注意：大格数、周期、频率三者的记录均需保留一位小数</p>
    <p style="display: inline">
      2. 观察李萨如图形并测量频率<br />
      &nbsp; &nbsp;
      &nbsp;按实验步骤接好连线，调节信号发生器（示波器CH2（Y）通道输入）的信号频率fy，显示通道打到CH2,触发器通道默认为CH1，显示方式打开X-Y控制键，观察示波器对应李萨如图形。按如下要求将数据填入下表。
    </p>
    <p style="display: inline; font-size: 15px; color: skyblue">
      （每空5分共30分）
    </p>
    <el-table
      :data="tableData2"
      border
      :show-header="false"
      style="width: 100%"
    >
      <el-table-column prop="h1" width="95px"> </el-table-column>
      <el-table-column prop="h2" width="285px">
        <template slot-scope="scope">
          <div v-if="scope.row.h2 == '2/1'">2/1</div>
          <div v-if="scope.row.h2 == '1'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/aFRC0kHOiiF2L0BtmBM0dFdaNuzYj3Kg2KX0q9Yx.png"
              alt=""
            />
          </div>
          <el-input type="number" v-if="scope.row.h2 == '2'" v-model="form2.d1"></el-input>
          <el-input type="number" v-if="scope.row.h2 == '3'" v-model="form2.d2"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="h3" width="285px">
        <template slot-scope="scope">
          <div v-if="scope.row.h3 == '1/1'">1/1</div>
          <div v-if="scope.row.h3 == '1'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/MU7AJhSSH5lgcigOqEOUgdWazhupkiw8RyiKtUDi.png"
              alt=""
            />
          </div>
          <el-input type="number" v-if="scope.row.h3 == '2'" v-model="form2.d3"></el-input>
          <el-input type="number" v-if="scope.row.h3 == '3'" v-model="form2.d4"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="h4" width="285px">
        <template slot-scope="scope">
          <div v-if="scope.row.h4 == '1/2'">1/2</div>
          <div v-if="scope.row.h4 == '1'">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/QWNB34RQhZDHZ0dy2gT95WVX57xNUOMuP2RLY54h.png"
              alt=""
            />
          </div>
          <el-input type="number" v-if="scope.row.h4 == '2'" v-model="form2.d5"></el-input>
          <el-input type="number" v-if="scope.row.h4 == '3'" v-model="form2.d6"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <p>
      注：1，此时CH1/CH2的幅度分度均为0.2V/DIV，信号发生器默认幅度2Vp-p
      <br />&nbsp; &nbsp;
      &nbsp;&nbsp;&nbsp;2，此时示波器时基分度为0.2ms/DIV（即使改变此值对李萨如图形测量也影响不大）
    </p>
    <!-- 选择题 -->
    <!-- <p style="display: inline">选择题</p> -->
    <div>
      <h3 style="display: inline">选择题</h3>
      <p style="display: inline; font-size: 15px; color: skyblue">
        （每选项2分，共20分）
      </p>
    </div>
    <br />
    <div>
      <p>1.请根据示波器面板的使用要求，选择正确的选项</p>
      <p>
        A.辉度按钮；B.聚焦按钮；C.水平位移；D.垂直移位；E.扫描微调旋钮；F.触发电平旋钮
      </p>
      <div class="count4">
        <div style="width: 320px">（1）当显示波形线条太粗了，可以尝试使用</div>
        <el-input  v-model="form2.e1" style="width: 20%"></el-input>
        <p>使波形线条调整至适合宽度。</p>
      </div>
      <div class="count4">
        <div style="width: 320px; line-height: 25px">
          （2）在示波器测量1KHz方波校准信号时，读数不够1KHz，可以尝试
        </div>
        <el-input  v-model="form2.e2" style="width: 20%"></el-input>
        <div>校准</div>
      </div>
      <div class="count4">
        <p style="width: 320px; line-height: 25px">
          （3）当波形不够稳定不断跳跃时，可以尝试使用
        </p>
        <el-input v-model="form2.e3" style="width: 20%"></el-input>
        <p>使波形相对静止</p>
      </div>
      <div class="count4">
        <div style="width: 320px; line-height: 25px">
          （4）在示波器显示波形不够亮时，可以尝试使用
        </div>
        <el-input  v-model="form2.e4" style="width: 20%"></el-input>
        <p>提高显示波形的亮度</p>
      </div>
    </div>

    <div>
      <div class="count4">
        <p>2.利用示波器测量信号频率的优点是</p>
        <el-input  v-model="form2.f1" style="width: 15%"></el-input>
        <p>，但不足的是示波器内部时基</p>
      </div>
      <div class="count4">
        <el-input  v-model="form2.f2" style="width: 15%"></el-input>
        <p>，且</p>
        <el-input  v-model="form2.f3" style="width: 15%"></el-input>
      </div>
      <div>
        <div>A.精度不高</div>
        <br />
        <div>B.示波器不能测量频率</div>
        <br />
        <div>C.不能直接读数频率，使用周期读数换算到频率会引入误差</div>
        <br />
        <div>D.可以直观的观察出波形</div>
      </div>
    </div>

    <div>
      <div class="count4">
        <p>3.使用李萨如图形测量信号频率实验过程中,信号波形选用</p>
        <el-input  v-model="form2.g1" style="width: 15%"></el-input>
      </div>
      <div class="count4">
        <p>波形;得到闭合稳定的图案时，两个信号的频率比是</p>
        <el-input  v-model="form2.g2" style="width: 15%"></el-input>
      </div>

      <div class="count4">
        <p>;在两个信号的相位关系变化时,李萨如图形会发生</p>
        <el-input  v-model="form2.g3" style="width: 15%"></el-input>
      </div>
      <div>
        <div>A.三角波  B.正弦波  C.方波</div>
        <br />
        <div>D.整数比  E.无理数之比</div>
        <br />
        <div>F.跳出示波器窗口  G.旋转</div>
      </div>
    </div>
    <br />
    <!-- 判断题 -->
    <h3 style="display: inline">判断题</h3>
    <!-- <p style="display: inline">判断题</p> -->
    <p style="display: inline; font-size: 15px; color: skyblue">
      （每题4分，共12分）
    </p>
    <div>
      <p>
        1.在使用示波器的校准信号线校准示波器测量通道时，当示波器屏幕幅度读数不是5V时，可以通过调整“扫描微调旋钮”修正校准相应通道的读数。
      </p>
      <el-radio-group v-model="form2.x1">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
    </div>
    <div>
      <p>2.只有正弦波信号才能利用本实验项目的李萨如图形方法测量频率。</p>
      <el-radio-group v-model="form2.x2">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
    </div>
    <div>
      <p>
        3.在利用李萨如图形测量频率过程中，将示波器时基分度由默认的0.2ms/DIV改为0.1ms/DIV，则李萨如图形的纵横切点数之比会发生变化。
      </p>
      <el-radio-group v-model="form2.x3">
        <el-radio label="1">对</el-radio>
        <el-radio label="0">错</el-radio>
      </el-radio-group>
    </div>
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
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        b5: "",
        b6: "",
        b7: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c7: "",
        c8: "",
        c9: "",
        c10: "",
        c11: "",
        c12: "",
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
        e1: "",
        e2: "",
        e3: "",
        e4: "",
        f1: "",
        f2: "",
        f3: "",
        g3: "",
        g2: "",
        g1: "",
        x1: "",
        x2: "",
        x3: "",
      },
      form: {},
      tableData: [
        {
          tongdao: "通道",
          ch1: "CH1",
          ch2: "CH2",
        },
        {
          tongdao: "校准信号频率",
          ch1: "1",
          //  ch2:"1"
        },
        {
          tongdao: "大格数",
          ch1: "2",
          ch2: "2",
        },
        {
          tongdao: "周期(ms)",
          ch1: "3",
          ch2: "3",
        },
        {
          tongdao: "频率(Hz)",
          ch1: "4",
          ch2: "4",
        },
      ],
      tableData1: [
        {
          hang1: "时基分度(ms/DIV)",
          hang2: "0.5",
          hang3: "0.2",
          hang4: "0.1",
        },
        {
          hang1: "信号发生器显示频率(Hz)",
          hang2: "500",
          hang3: "1000",
          hang4: "2000",
        },
        {
          hang1: "信号发生器实际输出(Hz)",
          hang2: "1",
          hang3: "1",
          hang4: "1",
        },
        {
          hang1: "大格数",
          hang2: "2",
          hang3: "2",
          hang4: "2",
        },
        {
          hang1: "周期(ms)",
          hang2: "3",
          hang3: "3",
          hang4: "3",
        },
        {
          hang1: "频率(Hz)",
          hang2: "4",
          hang3: "4",
          hang4: "4",
        },
      ],
      tableData2: [
        {
          h1: "fy / fx",
          h2: "2/1",
          h3: "1/1",
          h4: "1/2",
        },
        {
          h1: "李萨如图形样例",
          h2: "1",
          h3: "1",
          h4: "1",
        },
        {
          h1: "fy(Hz)",
          h2: "2",
          h3: "2",
          h4: "2",
        },
        {
          h1: "fx(Hz)",
          h2: "3",
          h3: "3",
          h4: "3",
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
      if (rowIndex === 1) {
        if (columnIndex === 1) {
          return [1, 2];
        }
      }
    },

    async send() {
      // console.log(this.form2.student_id);
      const answer1 = (
        this.form2.e1 +
        this.form2.e2 +
        this.form2.e3 +
        this.form2.e4 +
        this.form2.f1 +
        this.form2.f2 +
        this.form2.f3 +
        this.form2.g1 +
        this.form2.g2 +
        this.form2.g3
      ).split("");
      const answer2 = ["B", "E", "F", "A", "D", "A", "C", "B", "D", "G"];
      var mark1 = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark1 = mark1 + 2;
        }
      }
      const answer3 = (this.form2.x1 + this.form2.x2 + this.form2.x3).split("");
      const answer4 = ["0", "1", "0"];
      var mark2 = 0;
      for (let i = 0; i < answer3.length; i++) {
        if (answer3[i] == answer4[i]) {
          mark2 = mark2 + 4;
        }
      }
      var mark = 0;
      mark = mark1 + mark2;
      this.form2.student_id = window.sessionStorage.getItem("student_id");
      this.form2.grade_xp = mark;
      const { data: res } = await this.$http.post(
        "/api/experiment14/completion14",
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