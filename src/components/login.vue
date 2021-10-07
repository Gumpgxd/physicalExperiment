<template>
  <div class="zhuye">
    <div class="img">
      <img class="imgs" src="https://z3.ax1x.com/2021/06/30/RDF0RH.png" />
    </div>
    <div class="main">
      <div class="middle">
        <el-table
          :data="tableData"
          :span-method="arraySpanMethod"
          :show-header="showHeader"
          border
          style="width: 100%"
        >
          <el-table-column prop="id" width="140" label="实验（项目）名称">
          </el-table-column>
          <el-table-column prop="name">
            <template slot-scope="scope">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <el-select
                  v-model="form.experiment_name"
                  placeholder="请选择实验名称"
                  v-if="scope.row.id == '实验（项目）名称'"
                  style="width：100%;display:block;"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <!-- </el-form-item> -->
                <div v-if="scope.row.id == '课程名称'">
                  <el-input v-model="form.course_name"></el-input>
                </div>
                <div v-if="scope.row.id == '学生专业'">
                  <el-input v-model="form.student_spec"></el-input>
                </div>
                <!-- <div v-if="scope.row.id == '学生班级'"> -->
                <el-select
                  v-model="form.student_class"
                  placeholder="请选择班级"
                  v-if="scope.row.id == '学生班级'"
                  style="width：100%;display:block;"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.class"
                    :label="item.class"
                    :value="item.class"
                  >
                  </el-option>
                </el-select>
                <!-- <el-input v-model="form.student_class"></el-input> -->
                <!-- <el-cascader
            v-model="form.student_class"
            :options="options2"
            placeholder="请选择班级"
          ></el-cascader>
                </div> -->
                <div v-if="scope.row.id == '学生姓名'">
                  <el-input v-model="form.student_name"></el-input>
                </div>
                <div v-if="scope.row.id == '指导教师'">
                  <el-input v-model="form.student_teacher"></el-input>
                </div>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="amount1" width="140px"> </el-table-column>
          <el-table-column prop="amount2">
            <template slot-scope="scope">
              <el-form
                :model="form"
                :rules="rules"
                ref="form"
                class="demo-ruleForm"
              >
                <div v-if="scope.row.amount1 == '学生层次'">
                  <el-input v-model="form.student_level"></el-input>
                </div>
                <div v-if="scope.row.amount1 == '学生年级'">
                  <el-select
                    v-model="form.student_year"
                    placeholder="请选择年级"
                    style="width：100%;display:block;"
                  >
                    <el-option
                      v-for="item in optionss"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <!-- <el-cascader
            v-model="form.student_year"
            :options="optionss"
            placeholder="请选择年级"
          ></el-cascader> -->
                </div>
                <div v-if="scope.row.amount1 == '学生学号'">
                  <!-- <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm" v-if="scope.row.amount1 == '学生学号'">
  <el-form-item  prop="student_num">
    <el-input v-model="form.student_num"></el-input>
  </el-form-item>
                  </el-form> -->
                  <el-input v-model="form.student_num" ></el-input>
                </div>
                <div v-if="scope.row.amount1 == '完成日期'">
                  <el-input v-model="form.student_date"></el-input>
                </div>
              </el-form>
            </template>
          </el-table-column>
        </el-table>
        <!-- <div>
          <el-link type="danger" disabled
            >建议使用谷歌浏览器，火狐浏览器</el-link
          >
        </div> -->
        <el-form ref="form">
          <el-form-item style="text-align: center">
            <el-button
              class="btn"
              style="text-align: center"
              type="primary"
              @click="login()"
              >进入测试</el-button
            >
          </el-form-item>
        </el-form>
        <!-- <div><el-link type="danger" disabled>建议使用谷歌浏览器，火狐浏览器</el-link></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        experiment_name: "",
        course_name: "",
        student_spec: "",
        student_class: "",
        student_name: "",
        student_teacher: "",
        student_level: "",
        student_year: "",
        student_num: "",
        student_date: "",
      },
      rules: {
        student_num: [
          {
            min: 11,
            max: 11,
            message: "请输入11位学号",
            trigger: "blur",
          },
        ],
      },
      options2: [
        // {
        //   value: "信工一班",
        //   label: "信工一班",
        // },
        // {
        //   value: "信工二班",
        //   label: "信工二班",
        // },
        // {
        //   value: "信工三班",
        //   label: "信工三班",
        // },
      ],
      optionss: [
        {
          value: "2020级",
          label: "2020级",
        },
      ],
      options: [
        // {
        //   value: "劈尖测细丝实验",
        //   label: "劈尖测细丝实验",
        // },
        // {
        //   value: "电表的改装与校准",
        //   label: "电表的改装与校准",
        // },
        // {
        //   value: "万用表改装设计实验",
        //   label: "万用表改装设计实验",
        // },
        {
          value: "箱式直流电桥测量电阻",
          label: "箱式直流电桥测量电阻",
        },
        {
          value: "大学物理实验一报告",
          label: "大学物理实验一报告",
        },
        {
          value: "单摆法测重力加速度",
          label: "单摆法测重力加速度",
        },
        // {
        //   value:"牛顿环法测曲率半径",
        //   label:"牛顿环法测曲率半径"
        // },
        // {
        //   value: "欧姆表的改装设计",
        //   label: "欧姆表的改装设计",
        // },
        {
          value: "自组式直流电桥测量电阻值",
          label: "自组式直流电桥测量电阻值",
        },
        {
          value: "示波器的调整与使用",
          label: "示波器的调整与使用",
        },
        // {
        //   value: "霍尔效应测量磁感应强度",
        //   label: "霍尔效应测量磁感应强度",
        // },
        //  {
        //   value: "电表改装设计实验",
        //   label: "电表改装设计实验",
        // },
      ],
      showHeader: false,
      checked: "",
      tableData: [
        {
          id: "实验（项目）名称",
          name: "",
        },
        {
          id: "课程名称",
          name: "",
          amount1: "学生层次",
          amount2: "",
        },
        {
          id: "学生专业",
          name: "",
          amount1: "学生年级",
          amount2: "",
        },
        {
          id: "学生班级",
          name: "",
          amount1: "学生学号",
          amount2: "",
        },
        {
          id: "学生姓名",
          name: "",
          amount1: "完成日期",
          amount2: "",
        },
        {
          id: "指导教师",
          name: "",
        },
      ],
    };
  },
  created() {
    this.getClass();
  },
  methods: {
    async login() {
      if(this.form.student_num.length!=11){
        this.$message.error('请输入11位学号')
      }
      // console.log(this.form);
else{
      try {
        const { data: res } = await this.$http.post(
          "api/experiment/student",
          this.form
        );
        if (res.code == 200) {
          if (res.data.state == 2) {
            this.$message.error("请勿重复答题！");
            return;
          }
          const number = this.form.student_num;
          window.sessionStorage.setItem("student_id", res.data.id);
          if (this.form.experiment_name == "劈尖测细丝实验") {
            this.$router.replace({
              name: "test",
              params: { number },
            });
          } else if (this.form.experiment_name == "电表的改装与校准") {
            this.$router.replace({
              name: "test1",
              params: { number },
            });
          } else if (this.form.experiment_name == "万用表改装设计实验") {
            this.$router.replace({
              name: "test2",
              params: { number },
            });
          } else if (this.form.experiment_name == "箱式直流电桥测量电阻") {
            this.$router.replace({
              name: "test3",
              params: { number },
            });
          } else if (this.form.experiment_name == "大学物理实验一报告") {
            this.$router.replace({
              name: "test4",
              params: { number },
            });
          } else if (this.form.experiment_name == "单摆法测重力加速度") {
            this.$router.replace({
              name: "test5",
              params: { number },
            });
          } else if (this.form.experiment_name == "牛顿环法测曲率半径") {
            this.$router.replace({
              name: "test6",
              params: { number },
            });
          } else if (this.form.experiment_name == "自组式直流电桥测量电阻值") {
            this.$router.replace({
              name: "test7",
              params: { number },
            });
          } else if (this.form.experiment_name == "欧姆表的改装设计") {
            this.$router.replace({
              name: "test8",
              params: { number },
            });
          } else if (this.form.experiment_name == "示波器的调整与使用") {
            this.$router.replace({
              name: "test9",
              params: { number },
            });
          } else if (this.form.experiment_name == "霍尔效应测量磁感应强度") {
            this.$router.replace({
              name: "test10",
              params: { number },
            });
          } else if (this.form.experiment_name == "电表改装设计实验") {
            this.$router.replace({
              name: "test11",
              params: { number },
            });
          }
        } else {
          this.$message.error(res.msg);
        }
      } catch (err) {
        if (err) {
          this.$message.error("频繁操作，请等待一分钟！");
        }
      }}
    },
    // login(){
    //     window.sessionStorage.setItem('student_id',this.form.student_num)
    //       this.$router.push({
    //         name:'logined',
    //         params: { number }
    //       });
    // },
    async getClass() {
      const { data: res } = await this.$http.get("/api/menu/getclass");
      this.options2 = res.data;
      // console.log(res.data);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 1) {
          return [1, 3];
        }
      } else if (rowIndex === 5) {
        if (columnIndex === 1) {
          return [1, 3];
        }
      }
    },
  },
};
</script>

<style scoped>
.el-table td,
.el-table th {
  padding: 6px 0 !important;
}
.zhuye {
  height: 100%;
  background-color: #dee5f3;
}
.main {
  height: 60%;
  width: 50%;
  min-width: 300px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.middle {
  min-width: 250px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.btn {
  margin-top: 50px !important;
  background-color: #6f8ed3;
  text-align: center;
}
.img {
  height: 50px;
  background-color: #4168c0;
}
.imgs {
  height: 38px;
  padding: 6px 0 6px 10px;
}
</style>