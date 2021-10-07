<template>
  <div class="test6">
    <div>
      <h3>五、实验数据记录与处理</h3>
      <p>λ=589nm</p>
      <!-- 第一 -->
      <el-table
        :data="tableData"
        border
        
        style="width: 100%"
      >
        <el-table-column prop="loop" width="140" label="环数">
        </el-table-column>
        <el-table-column prop="five" label="第5环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.five == '1'" v-model="form.n1">
            </el-input>
            <el-input type="number" v-if="scope.row.five == '11'" v-model="form.n5">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="ten" label="第10环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.ten == '2'" v-model="form.n10"> </el-input>
            <!-- <div v-if="scope.row.ten == '22'">57.810</div> -->
            <el-input type="number" v-if="scope.row.ten == '22'" v-model="form.l1">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="第15环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.num == '3'" v-model="form.n15"> </el-input>
            <!-- <div v-if="scope.row.num == '33'">58.182</div> -->
             <el-input type="number" v-if="scope.row.num == '33'" v-model="form.l2">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="twenty" label="第20环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.twenty == '4'" v-model="form.n20">
            </el-input>
            <!-- <div v-if="scope.row.twenty == '44'">58.410</div> -->
             <el-input type="number" v-if="scope.row.twenty == '44'" v-model="form.l3">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="twentyfive" label="第25环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.twentyfive == '5'" v-model="form.n25">
            </el-input>
            <!-- <div v-if="scope.row.twentyfive == '55'">59.009</div> -->
             <el-input type="number" v-if="scope.row.twentyfive == '55'" v-model="form.l4">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="thirty" label="第30环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.thirty == '6'" v-model="form.n30">
            </el-input>
            <!-- <div v-if="scope.row.thirty == '66'">59.772</div> -->
             <el-input type="number" v-if="scope.row.thirty == '66'" v-model="form.l5">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="threefive" label="第35环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.threefive == '7'" v-model="form.n35">
            </el-input>
            <!-- <div v-if="scope.row.threefive == '77'">60.200</div> -->
             <el-input type="number" v-if="scope.row.threefive == '77'" v-model="form.l6">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="forty" label="第40环">
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.forty == '8'" v-model="form.n40">
            </el-input>
            <!-- <div v-if="scope.row.forty == '88'">60.738</div> -->
            <el-input type="number" v-if="scope.row.forty == '88'" v-model="form.l7">
            </el-input>
          </template>
        </el-table-column>
      </el-table>
      <div class="count6">
        <p>牛顿环的曲率半径R=</p>
        <el-form ref="form" :model="form">
          <el-form-item class="zhijin">
            <el-input type="number" v-model="form.r"></el-input>
          </el-form-item>
        </el-form>
        <p>(m)</p>
      </div>
      <!-- 选择题 -->
      <h4>选择题</h4>
      <p>1、牛顿环实验中，读数显微镜的视场中亮度不均匀，其原因是 </p>
       <el-radio-group v-model="form.xz1"> 
          <el-radio label="A" >A：显微镜的物镜有问题</el-radio>
          <el-radio label="B" >B：反光玻璃片放反了</el-radio>
          <el-radio label="C" >C：入射单色光方向不正</el-radio>
          <el-radio label="D" >D：显微镜的目镜有问题</el-radio>
        </el-radio-group>
          <p>2、牛顿环是一种 </p>
       <el-radio-group v-model="form.xz2"> 
          <el-radio label="A" >A：不等间距的衍射条纹</el-radio>
          <el-radio label="B" >B：等倾干涉条纹</el-radio>
          <el-radio label="C" >C：等间距的干涉条纹</el-radio>
          <el-radio label="D" >D：等厚干涉条纹</el-radio>
        </el-radio-group>
          <p>3、牛顿环实验中，单向测量的目的是为了消除 </p>
       <el-radio-group v-model="form.xz3"> 
          <el-radio label="A" >A：视差</el-radio>
          <el-radio label="B" >B：读数显微镜测微鼓轮的仪器误差</el-radio>
          <el-radio label="C" >C：测微螺距间隙引起的回程误差</el-radio>
          <el-radio label="D" >D：ABC都不是</el-radio>
        </el-radio-group>
          <p>4、牛顿环实验中有如下步骤：①调节读数显微镜的反光片和纳光灯的位置，使其视场明亮均匀②调节目镜使叉丝像清晰③将牛顿环放于载物台，由下向上调节镜筒，得到清晰的干涉条纹④调节牛顿环的位置和叉丝方向，使牛顿环中某环在纵向叉丝沿主尺方向移动时始终于横向叉丝相切⑤测量。则正确的实验顺序是 </p>
       <el-radio-group v-model="form.xz4"> 
          <el-radio label="A" >A：a b c d e </el-radio>
          <el-radio label="B" >B：b c a d e </el-radio>
          <el-radio label="C" >C：a b d c e </el-radio>
          <el-radio label="D" > D：d a c b e  </el-radio>
        </el-radio-group>

      <!-- <div v-for="item in question" :key="item.topic" @click="onChange()">
        <p>{{ item.topic }}</p>
        <el-radio-group v-model="form.xz"> 
          <el-radio label="A" v-model="form.xz">{{ item.xuanx1 }}</el-radio>
          <el-radio label="B" v-model="form.xz">{{ item.xuanx2 }}</el-radio>
          <el-radio label="C" v-model="form.xz">{{ item.xuanx3 }}</el-radio>
          <el-radio label="D" v-model="form.xz">{{ item.xuanx4 }}</el-radio>
        </el-radio-group>
      </div> -->
      <!-- 判断题 -->
      <h4>判断题</h4> 
      <!-- <div v-for="item in question1" :key="item.id">
        <p>{{ item.topic }}</p>
        <el-radio-group v-model="form.xz">
          <el-radio label="1">{{ item.xuanx1 }}</el-radio>
          <el-radio label="0">{{ item.xuanx2 }}</el-radio>
        </el-radio-group>
      </div> -->
      <p>1、若十字叉丝未通过牛顿环中心，测出的可能不是直径，则得出的曲率半径是不准确的。 </p>
       <el-radio-group v-model="form.pd1"> 
          <el-radio label="1" >对</el-radio>
          <el-radio label="0" >错</el-radio>
        </el-radio-group>
         <p>牛顿环中心应该是暗点，但看到的是一个暗斑，这是由于透镜与平行玻璃接触处弹性形变造成的面接触的缘故。 </p>
       <el-radio-group v-model="form.pd2"> 
          <el-radio label="1" >对</el-radio>
          <el-radio label="0" >错</el-radio>
        </el-radio-group>
         <p>牛顿环实验中，读数显微镜鼓轮可以任意正反旋转，以便于找准测量点。 </p>
       <el-radio-group v-model="form.pd3"> 
          <el-radio label="1" >对</el-radio>
          <el-radio label="0" >错</el-radio>
        </el-radio-group>
    </div>
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
      n1: "",
        n10: "",
        n15: "",
        n20: "",
        n25: "",
        n30: "",
        n35: "",
        n40: "",
        n5: "",
        r: "",
        l1:"",
        l2:"",
        l3:"",
        l4:"",
        l5:"",
        l6:"",
        l7:"",
        xz1: "",
        xz2: "",
        xz3: "",
        xz4: "",
        pd1:"",
        pd2:"",
        pd3:"",
         student_id:"",
        // grade_xp:""
      },
      // question: [
      //   {
      //     topic: "1、牛顿环实验中，读数显微镜的视场中亮度不均匀，其原因是",
      //     //  topic1: "2、牛顿环是一种",
      //     //  topic2:"3、牛顿环实验中，单向测量的目的是为了消除",
      //     xuanx1: "A：显微镜的物镜有问题",
      //     xuanx2: " B：反光玻璃片放反了 ",
      //     xuanx3: " C：入射单色光方向不正 ",
      //     xuanx4: "D：显微镜的目镜有问题",
      //     // pd: "对",
      //     // pd2: "错",
      //     //     xuanxx1: "A：不等间距的衍射条纹 ",
      //     // xuanxx2: " B：等倾干涉条纹 ",
      //     // xuanxx3: " C：等间距的干涉条纹 ",
      //     // xuanxx4: " D：等厚干涉条纹 ",
      //   },
      //   {
      //     topic: "2、牛顿环是一种",
      //     xuanx1: "A：不等间距的衍射条纹 ",
      //     xuanx2: " B：等倾干涉条纹 ",
      //     xuanx3: " C：等间距的干涉条纹 ",
      //     xuanx4: " D：等厚干涉条纹 ",
      //   },
      //   {
      //     topic: "3、牛顿环实验中，单向测量的目的是为了消除",
      //     xuanx1: "A：视差 ",
      //     xuanx2: " B：读数显微镜测微鼓轮的仪器误差 ",
      //     xuanx3: " C：测微螺距间隙引起的回程误差 ",
      //     xuanx4: "  D：ABC都不是 ",
      //   },
      //   {
      //     topic:
      //       "4、牛顿环实验中有如下步骤：①调节读数显微镜的反光片和纳光灯的位置，使其视场明亮均匀②调节目镜使叉丝像清晰③将牛顿环放于载物台，由下向上调节镜筒，得到清晰的干涉条纹④调节牛顿环的位置和叉丝方向，使牛顿环中某环在纵向叉丝沿主尺方向移动时始终于横向叉丝相切⑤测量。则正确的实验顺序是",
      //     xuanx1: " A：a b c d e ",
      //     xuanx2: " B：b c a d e  ",
      //     xuanx3: " C：a b d c e  ",
      //     xuanx4: " D：d a c b e  ",
      //   },
      // ],
      // question1: [
      //   {
      //     topic:
      //       "若十字叉丝未通过牛顿环中心，测出的可能不是直径，则得出的曲率半径是不准确的。 ",
      //     xuanx1: "对",
      //     xuanx2: "错",
      //   },
      //   {
      //     topic:
      //       "牛顿环中心应该是暗点，但看到的是一个暗斑，这是由于透镜与平行玻璃接触处弹性形变造成的面接触的缘故。 ",
      //     xuanx1: "对",
      //     xuanx2: "错",
      //   },
      //   {
      //     topic:
      //       "牛顿环实验中，读数显微镜鼓轮可以任意正反旋转，以便于找准测量点。 ",
      //     xuanx1: "对",
      //     xuanx2: "错",
      //   },
      // ],
      tableData: [
        {
          loop: "左读数（mm）",
          five: "1",
          ten: "2",
          num: "3",
          twenty: "4",
          twentyfive: "5",
          thirty: "6",
          threefive: "7",
          forty: "8",
        },
        {
          loop: "右读数（mm）",
          five: "11",
          ten: "22",
          num: "33",
          twenty: "44",
          twentyfive: "55",
          thirty: "66",
          threefive: "77",
          forty: "88",
        },
      ],
    };
  },
  created(){
      // this.form.student_id=98
    this.form.student_id = window.sessionStorage.getItem("student_id");
    // console.log(this.form.student_id);
  },
  methods:{

  async  send(){  
        
      // const answer3=(
      //   this.form.xz1+
      //   this.form.xz2+
      //   this.form.xz3+
      //   this.form.xz4+
      //   this.form.pd1+
      //   this.form.pd2+
      //   this.form.pd3
      // ).split("")
      // console.log(answer3);
      // const answer2=["C","D","C","A","1","1","0"]
      // var mark=0;
      // for(let i=0;i<answer3.length;i++){
      //   if(answer3[i]==answer2[i]){
      //            mark+=6
      //   }
      // }
      // console.log(mark);
      // console.log(this.form);
      // this.form.grade_xp=mark;
      // console.log(this.form);
       const { data: res } = await this.$http.post(
        "api/experiment4/completion4",
        this.form
      );
      if (res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      } else {
        this.$message.error(res.msg);
      }
    },
    // onChange() {
    //   console.log(this.form.xz);
    //   console.log(1);
    // }
  }
};
</script>

<style scoped>
.test6 {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.count6 {
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