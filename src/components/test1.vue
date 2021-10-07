<template>
  <div class="test1">
    <div>
      <h3>实验内容</h3>
      <p>DH4508型电表改装与校准实验仪的使用参见相关文档。</p>
      <p>仪器在进行实验前应对毫安表进行机械调零。</p>
      <p>1、用中值法或替代法测出表头的内阻，按图2-4-1或图2-4-2接线。</p>
      <div class="counts">
        <p>Rg=</p>
        <el-form ref="form" :model="form">
          <el-form-item class="zhijin">
            <el-input type="number" v-model="form.rg"></el-input>
          </el-form-item>
        </el-form>
        <p>（Ω）</p>
      </div>
      <p>2、将一个量程为1mA的表头改装成5mA量程的电流表</p>
      <p>（1）、根据式2-4-1计算出分流电阻值，先将电源调到最小，调到中间位置，再按图2-4-3接线。</p>
      <div class="counts">
        <p>分流电阻值 =</p>
        <el-form ref="form" :model="form">
          <el-form-item class="zhijin">
            <el-input type="number" v-model="form.r1"></el-input>
          </el-form-item>
        </el-form>
        <p>（Ω）</p>
      </div>
      <p>（2）、慢慢调节电源，升高电压，使改装表指到满量程（可配合调节变阻器），这时记录标准表读数。注意：作为限流电阻，阻值不要调至最小值。然后调小电源电压，使改装表每隔1mA（满量程的1/5）逐步减小读数直至零点；(将标准电流表选择开关打在20mA档量程)再调节电源电压按原间隔逐步增大改装表读数到满量程，每次记下标准表相应的读数于下表。</p>
      <p>表 2-4-1</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="改装表读数（mA）" width="180"></el-table-column>
        <el-table-column prop label="标准表读数（mA）" >
          <el-table-column prop="decrease" label="减小时" >
            <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.decrease == '1'" v-model="form.reduce1"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '2'" v-model="form.reduce2"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '3'" v-model="form.reduce3"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '4'" v-model="form.reduce4"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '5'" v-model="form.reduce5"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="increase" label="增大时">
            <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.increase == '1'" v-model="form.increase1"></el-input>
              <el-input type="number" v-if="scope.row.increase == '2'" v-model="form.increase2"></el-input>
              <el-input type="number" v-if="scope.row.increase == '3'" v-model="form.increase3"></el-input>
              <el-input type="number" v-if="scope.row.increase == '4'" v-model="form.increase4"></el-input>
              <el-input type="number" v-if="scope.row.increase == '5'" v-model="form.increase5"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="average" label="平均值">
            <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.average == '1'" v-model="form.average1"></el-input>
              <el-input type="number" v-if="scope.row.average == '2'" v-model="form.average2"></el-input>
              <el-input type="number" v-if="scope.row.average == '3'" v-model="form.average3"></el-input>
              <el-input type="number" v-if="scope.row.average == '4'" v-model="form.average4"></el-input>
              <el-input type="number" v-if="scope.row.average == '5'" v-model="form.average5"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="erro" label="示值误差ΔI（mA）" width="180">
           <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.erro== '1'" v-model="form.error1"></el-input>
              <el-input type="number" v-if="scope.row.erro == '2'" v-model="form.error2"></el-input>
              <el-input type="number" v-if="scope.row.erro == '3'" v-model="form.error3"></el-input>
              <el-input type="number" v-if="scope.row.erro == '4'" v-model="form.error4"></el-input>
              <el-input type="number" v-if="scope.row.erro == '5'" v-model="form.error5"></el-input>
            </template>
        </el-table-column>
      </el-table>
      <p>3、将一个量程为1mA的表头改装成1.5V量程的电压表</p>
      <p>（1）、根据式2-4-2计算扩程电阻的阻值，可用、进行实验。</p>
      <div class="counts">
        <p>Rm=</p>
        <el-form ref="form" :model="form">
          <el-form-item class="zhijin">
            <el-input type="number" v-model="form.rm"></el-input>
          </el-form-item>
        </el-form>
        <p>（Ω）</p>
      </div>
      <p>（2）、按图2-4-4连接校准电路。用量程为2V的数显电压表作为标准表来校准改装的电压表。</p>
      <p>（3）、调节电源电压，使改装表指针指到满量程（1.5V），记下标准表读数。然后每隔0.3V逐步减小改装读数直至零点，再按原间隔逐步增大到满量程，每次记下标准表相应的读数于表2-4-3：</p>
      <el-table :data="tableDatas" border style="width: 100%">
        <el-table-column prop="date" label="改装表读数（V）" width="180"></el-table-column>
        <el-table-column prop="name" label="标准表读数（V）">
          <el-table-column prop="address" label="减小时">
             <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.decrease == '1'" v-model="form.red1"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '2'" v-model="form.red2"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '3'" v-model="form.red3"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '4'" v-model="form.red4"></el-input>
              <el-input type="number" v-if="scope.row.decrease == '5'" v-model="form.red5"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="timi" label="增大时">
             <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.increase == '1'" v-model="form.inc1"></el-input>
              <el-input type="number" v-if="scope.row.increase == '2'" v-model="form.inc2"></el-input>
              <el-input type="number" v-if="scope.row.increase == '3'" v-model="form.inc3"></el-input>
              <el-input type="number" v-if="scope.row.increase == '4'" v-model="form.inc4"></el-input>
              <el-input type="number" v-if="scope.row.increase == '5'" v-model="form.inc5"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="平均值">
             <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.average == '1'" v-model="form.ave1"></el-input>
              <el-input type="number" v-if="scope.row.average == '2'" v-model="form.ave2"></el-input>
              <el-input type="number" v-if="scope.row.average == '3'" v-model="form.ave3"></el-input>
              <el-input type="number" v-if="scope.row.average == '4'" v-model="form.ave4"></el-input>
              <el-input type="number" v-if="scope.row.average == '5'" v-model="form.ave5"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="time" label="示值误差ΔU（V）" width="180">
          <template slot-scope="scope">
              <el-input type="number" v-if="scope.row.erro== '1'" v-model="form.err1"></el-input>
              <el-input type="number" v-if="scope.row.erro == '2'" v-model="form.err2"></el-input>
              <el-input type="number" v-if="scope.row.erro == '3'" v-model="form.err3"></el-input>
              <el-input type="number" v-if="scope.row.erro == '4'" v-model="form.err4"></el-input>
              <el-input type="number" v-if="scope.row.erro == '5'" v-model="form.err5"></el-input>
            </template>
        </el-table-column>
      </el-table>
      <h5>选择题</h5>
      <p>1、测量改装表内阻的方法，正确的是</p>
      <el-radio-group v-model="form.xz1" >
        <el-radio label="A" style="padding:0 0 15px 0">A.电压法</el-radio>
        <el-radio label="B" style="padding:0 0 15px 0">B.替代法</el-radio>
        <el-radio label="C" style="padding:0 0 15px 0">C.等效法</el-radio>
        <el-radio label="D">D.外推法</el-radio>
      </el-radio-group>
      <p>2、以下关于电流表的表述正确的是</p>
      <el-radio-group v-model="form.xz2">
        <el-radio label="A" style="padding:0 0 15px 0">A.电流表的内阻较小，如果误用电流表去测电压，有烧毁电表的风险</el-radio>
        <el-radio label="B" style="padding:0 0 15px 0">B.电流表的档位决定了它可通过的最小电流</el-radio>
        <el-radio label="C" style="padding:0 0 15px 0">C.电流表可以用于测量电压，而无需切换到电压测试档</el-radio>
        <el-radio label="D" >D.电流表的内阻越大越好</el-radio>
      </el-radio-group>
      <p>3、由于磁电式电表结构上的一些缺陷，使得电表在正常条件下测量依然存在误差。引起误差的主要原因有</p>
      <el-radio-group v-model="form.xz3">
        <el-radio label="A" style="padding:0 0 15px 0">A.转动机构的摩擦</el-radio>
        <el-radio label="B" style="padding:0 0 15px 0">B.弹簧的弹性线性不良</el-radio>
        <el-radio label="C" style="padding:0 0 15px 0">C.磁场分布不均匀</el-radio>
        <el-radio label="D" style="padding:0 0 15px 0">D.仪表盘刻度不精确</el-radio>
        <el-radio label="E">E.以上都有</el-radio>
      </el-radio-group>
      <p>4、标称电表满刻度时，改装的电表未满刻度或超过满刻度，这种情况扩程电阻是大还是小及其原因，以下描述不正确的是？</p>
      <el-radio-group v-model="form.xz4">
        <el-radio label="A" style="padding:0 0 15px 0">A.对于改装的电流表，未满刻度时，扩程电阻小，因其分流大；</el-radio>
        <el-radio label="B" style="padding:0 0 15px 0">B.对于改装的电流表，超过满刻度时，扩程电阻大 ，因其分流小；</el-radio>
        <el-radio label="C" style="padding:0 0 15px 0">C.对于改装的电压表，未满刻度时，扩程电阻大 ，因其分压大；</el-radio>
        <el-radio label="D">D.对于改装的电压表，超过满刻度时，扩程电阻大 ，因其分压大；</el-radio>
      </el-radio-group>
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
      form: {
        student_id: "",
        grade_xp:"",
        rg: "",
        r1: "",
        rm: "",
        reduce1: "",
        reduce2: "",
        reduce3: "",
        reduce4: "",
        reduce5: "",
        increase1: "",
        increase2: "",
        increase3: "",
        increase4: "",
        increase5: "",
        average1: "",
        average2: "",
        average3: "",
        average4: "",
        average5: "",
        error1:"",
        error2:"",
        error3:"",
        error4:"",
        error5:"",
        red1: "",
        red2: "",
        red3: "",
        red4: "",
        red5: "",
        inc1: "",
        inc2: "",
        inc3: "",
        inc4: "",
        inc5: "",
        ave1: "",
        ave2: "",
        ave3: "",
        ave4: "",
        ave5: "",
        err1:"",
        err2:"",
        err3:"",
        err4:"",
        err5:"",
        xz1: "",
        xz2: "",
        xz3: "",
        xz4: "",
      },
      tableData: [
        {
          date: "1",
          decrease: "1",
          increase: "1",
          average: "1",
          erro: "1",
        },
        {
          date: "2",
          decrease: "2",
          increase: "2",
          average: "2",
          erro: "2",
        },
        {
          date: "3",
          decrease: "3",
          increase: "3",
          average: "3",
          erro: "3",
        },
        {
          date: "4",
          decrease: "4",
          increase: "4",
          average: "4",
          erro: "4",
        },
        {
          date: "5",
          decrease: "5",
          increase: "5",
          average: "5",
          erro: "5",
        },
      ],
      tableDatas: [
        {
          date: "0.3",
          decrease: "1",
          increase: "1",
          average: "1",
          erro: "1",
        },
        {
          date: "0.6",
          decrease: "2",
          increase: "2",
          average: "2",
          erro: "2",
        },
        {
          date: "0.9",
          decrease: "3",
          increase: "3",
          average: "3",
          erro: "3",
        },
        {
          date: "1.2",
          decrease: "4",
          increase: "4",
          average: "4",
          erro: "4",
        },
        {
          date: "1.5",
          decrease: "5",
          increase: "5",
          average: "5",
          erro: "5",
        },
      ],
    };
  },
  created() {
    this.form.student_id = window.sessionStorage.getItem("student_id");
    // console.log(this.form.student_id);
  },
  methods: {
   async send() {
        const answer1=(
          this.form.xz1+
          this.form.xz2+
          this.form.xz3+
          this.form.xz4
        ).split("");
        const answer2=["B","A","E","D"];
        var mark=0;
        for(let i=0;i<answer1.length;i++){
          if(answer1[i]==answer2[i]){
            mark+=5;
          }
        }
        this.form.grade_xp=mark;
        // console.log(this.form);
        const {data:res}= await this.$http.post('/api/experiment/completion8',this.form)
        //  console.log(res);
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

.test1 {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
}
.counts {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin-top: 35px; */
}
.zhijin {
  width: 100px;
  margin-bottom: 0;
}
p {
  font-size: 15px;
  line-height: 24px;
}
.btn {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
}
</style>