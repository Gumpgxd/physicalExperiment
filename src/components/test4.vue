<template>
  <div class="test">
    <h3>练习题</h3>
    <p></p>
    <div>
      <p>1、测定某物理量为589.3mm，该量真值为593.3mm，则该测量量的绝对误差为()</p>
      <el-radio-group v-model="form.r1">
        <el-radio label="A" style="padding: 0 0 15px 0">-4.0</el-radio>
        <el-radio label="B" style="padding: 0 0 15px 0">4.0</el-radio>
        <el-radio label="C" style="padding: 0 0 15px 0">4</el-radio>
        <el-radio label="D">-4</el-radio>
      </el-radio-group>
      <!--  -->
      <p>2、指出下列有效数字的位数()</p>
      <div class="count">
        <p>0.005m是_______位</p>
        <p>2.9×10^6mm是______位</p>
      </div>
      <div class="count">
        <p>100.00mg是_______位</p>
        <p>自然数10是______位</p>
      </div>
    </div>
    <el-radio-group v-model="form.r2">
      <el-radio label="A" style="padding: 0 0 15px 0">A.1,2,5,2 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B.3,2,5,2 </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.1,2,5,无穷</el-radio>
      <el-radio label="D">D.3,2,5,无穷</el-radio>
    </el-radio-group>
    <p>3、遵循有效数字的传递法则，计算
789.30×50÷0.100=()</p>
<el-radio-group v-model="form.r3">
      <el-radio label="A" style="padding: 0 0 15px 0">A.4.0*10^5 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B.39.12 </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.39.1</el-radio>
      <el-radio label="D">D.39.2</el-radio>
    </el-radio-group>
    <p>4、自然数20的有效位数为____位。</p>
    <el-radio-group v-model="form.r4">
      <el-radio label="A" style="padding: 0 0 15px 0">A.2位 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B.无穷位 </el-radio>
    </el-radio-group>
    <p>5、作图时在纵横坐标上不仅应标出分度值，还要标出___和____。</p>
     <el-radio-group v-model="form.r5">
      <el-radio label="A" style="padding: 0 0 15px 0"> A.物理量和单位 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">  B.大小和物理量 </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.大小和单位 </el-radio>
    </el-radio-group>
    <p>6、凡可用仪器量具直接读出某物理量值称为_____测量，例如______；在直接测出与被量具有一定函数关系的几个量后,通过函数关系式确定被测量的大小的测量称为_______测量，例如_______。</p>
     <el-radio-group v-model="form.r6">
      <el-radio label="A" style="padding: 0 0 15px 0"> A.间接测量、长度、直接测量、速度。 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B.直接测量、质量、间接测量、速度。 </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C.直接测量、速度、间接测量、长度。 </el-radio>
      <el-radio label="D" style="padding: 0 0 15px 0">D.间接测量、质量、直接测量、时间。 </el-radio>
    </el-radio-group>
    <p>7、下列测量结果表达式正确的是（     ）</p>
    <el-radio-group v-model="form.r7">
      <el-radio label="A" style="padding: 0 0 15px 0">A. Y=(1.89±0.03)×10^10Pa  </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">   B. R=(5.56±0.008)mm </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0"> C. X=(889±100)nm </el-radio>
      <el-radio label="D"> D. L=(1.89±0.032) mm</el-radio>
    </el-radio-group>
    <p>8、计算圆的周长时，圆的半径R=5.23cm，则π取（　 ）最合适。</p>
     <el-radio-group v-model="form.r8">
      <el-radio label="A" style="padding: 0 0 15px 0">A．3.1415	 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B. 3.14156 </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0"> C．3.142 </el-radio>
      <el-radio label="D"> D. 3.1</el-radio>
    </el-radio-group>
    <p>9）球的面积S=4πR2，如果R=100cm，则该球的面积为（   ）。</p>
    <el-radio-group v-model="form.r9">
      <el-radio label="A" style="padding: 0 0 15px 0">A．1.26×10^5cm^2 	 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">   B．12.56×10^4  </el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0"> C．12.6×10^4m^2</el-radio>
      <el-radio label="D"> D．12.568×10^4cm^2</el-radio>
    </el-radio-group>
    <p>10、改正下列的错误表达式。</p>
     <div class="count">
        <p>m = (72.3307±0.4)Kg（）</p>
        <p>v = 1.23±0.015m/s（）。</p>
      </div>
     <el-radio-group v-model="form.r10">
      <el-radio label="A" style="padding: 0 0 15px 0">A．(72.3307±0.4)Kg、1.23±0.01m/s。 </el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0"> B.(72.3±0.4)Kg、1.23±0.015m/s。</el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0"> C.(72.3 ±0.4)Kg、1.23±0.02m/s。</el-radio>
      <el-radio label="D">D.(72±0.4)Kg、1.23±0.015m/s。</el-radio>
    </el-radio-group>
    <div class="btn">
        <el-button type="primary" @click="send()">提交</el-button>
      </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        r1: "",
        r2: "",
        r3:"",
        r4:"",
        r5:"",
        r6:"",
        r7:"",
        r8:"",
        r9:"",
        r10:"",
        // grade_xp:"",
        student_id:""
      },
    };
  },
   created() {
    this.form.student_id = window.sessionStorage.getItem('student_id')
    // console.log( this.form.student_id);
  },
  methods:{
      async send(){
          const answer1=(
              this.form.r1+
              this.form.r2+
              this.form.r3+
              this.form.r4+
              this.form.r5+
              this.form.r6+
              this.form.r7+
              this.form.r8+
              this.form.r9+
              this.form.r10
              ).split("");
          // var mark=0
          // const answer2=["A","C","A","B","A","B","A","C","A","C"]
          // for(let i=0;i<answer1.length;i++){
          //   console.log(answer1[i]);
          //     if(answer1[i]==answer2[i]){
          //       mark+=10
          //     }
          // }
          // this.form.grade_xp=mark
          // console.log(this.form);
          const{data:res}= await this.$http.post('/api/experiment1/completion1',this.form)
        //  console.log(res);
           if(res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      }else {
        this.$message.error(res.msg)
      }
      }
  }
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
  width: 400px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zhijin {
  margin-bottom: 0;
}
.count p {
  min-width: 200px;
  font-size: 13px;
}

p {
    margin: 5px 0;
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